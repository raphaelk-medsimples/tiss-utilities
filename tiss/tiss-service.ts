import { TissWebservice, WsdlUrlMapping } from '../tiss-webservice/tiss-webservice';
import type { PedidoElegibilidadeWs } from '../tiss-webservice/client/verificaelegibilidade/definitions/PedidoElegibilidadeWs';
import type { RespostaElegibilidadeWs } from '../tiss-webservice/client/verificaelegibilidade/definitions/RespostaElegibilidadeWs';
import type { SolicitacaoStatusAutorizacaoWs } from '../tiss-webservice/client/solicitacaostatusautorizacao/definitions/SolicitacaoStatusAutorizacaoWs';
import type { SituacaoAutorizacaoWs } from '../tiss-webservice/client/solicitacaostatusautorizacao/definitions/SituacaoAutorizacaoWs';
import type { LoteGuiasWs } from '../tiss-webservice/client/loteguias/definitions/LoteGuiasWs';
import type { ProtocoloRecebimentoWs } from '../tiss-webservice/client/loteguias/definitions/ProtocoloRecebimentoWs';
import type { IExOptions as ISoapExOptions } from 'soap';

import { 
  enhancedCabecalho, 
  enhancedAmilCabecalho, 
  calcObjectHash, 
  type CabecalhoParams, 
  type TipoTransacao,
  IdentificacaoTransacao,
  type IdentificacaoTransacaoParams
} from './utils';

export interface TissGatewayConfig {
  defaultCabecalhoParams?: Omit<CabecalhoParams, 'tipoTransacao'>;
  enableRequestHashing?: boolean;
  enableResponseLogging?: boolean;
  useAmil?: boolean;
}

export interface TissRequestBase {
  tipoTransacao: TipoTransacao;
  sequencialTransacao?: string;
}

export interface TissResponse<T> {
  success: boolean;
  data: T;
  requestHash?: string;
  rawResponse?: string;
  soapHeader?: string;
  rawRequest?: string;
}

export class TissGateway<T extends Partial<WsdlUrlMapping>> {
  private ws: TissWebservice<T>;
  private config: TissGatewayConfig;
  private defaultCabecalhoParams?: Omit<CabecalhoParams, 'tipoTransacao'>;

  constructor(
    urls: T,
    config: TissGatewayConfig = {},
  ) {
    this.ws = new TissWebservice(urls);
    this.config = {
      enableRequestHashing: true,
      enableResponseLogging: false,
      useAmil: false,
      ...config,
    };
    this.defaultCabecalhoParams = config.defaultCabecalhoParams;
  }

  private createEnhancedRequest<TRequest extends TissRequestBase>(
    request: TRequest,
    customCabecalhoParams?: Partial<CabecalhoParams>
  ): TRequest & { cabecalho: any } {
    if (!this.defaultCabecalhoParams && !customCabecalhoParams) {
      throw new Error('Cabecalho parameters must be provided either in constructor or method call');
    }

    const cabecalhoParams: CabecalhoParams = {
      ...this.defaultCabecalhoParams!,
      ...customCabecalhoParams,
      tipoTransacao: request.tipoTransacao,
      sequencialTransacao: request.sequencialTransacao,
    };

    const cabecalho = this.config.useAmil 
      ? enhancedAmilCabecalho(cabecalhoParams)
      : enhancedCabecalho(cabecalhoParams);

    return {
      cabecalho,
      ...request,
    };
  }

  private async executeWithEnhancements<TRequest extends TissRequestBase, TResponse>(
    request: TRequest,
    operationMethod: keyof TissWebservice<T>,
    customCabecalhoParams?: Partial<CabecalhoParams>,
    options?: ISoapExOptions
  ): Promise<TissResponse<TResponse>> {
    try {
      const enhancedRequest = this.createEnhancedRequest(request, customCabecalhoParams);
      
      const requestHash = calcObjectHash(enhancedRequest);
      // enhancedRequest.hash = requestHash;

      const [result, rawResponse, soapHeader, rawRequest] = await (this.ws as any)[operationMethod](
        enhancedRequest,
        options
      );
      console.log(result, rawRequest);

      if (this.config.enableResponseLogging) {
        console.log('TISS Response:', {
          operation: operationMethod,
          requestHash,
          success: !!result,
        });
      }

      return {
        success: true,
        data: result,
        requestHash,
        rawResponse: this.config.enableResponseLogging ? rawResponse : undefined,
        soapHeader: this.config.enableResponseLogging ? soapHeader : undefined,
        rawRequest: this.config.enableResponseLogging ? rawRequest : undefined,
      };
    } catch (error) {
      console.error(`TISS Gateway Error in ${String(operationMethod)}:`, error);
      throw error;
    }
  }

  async verificaElegibilidade(
    request: PedidoElegibilidadeWs & TissRequestBase,
    customCabecalhoParams?: Partial<CabecalhoParams>,
    options?: ISoapExOptions
  ): Promise<TissResponse<RespostaElegibilidadeWs>> {
    if (!request.tipoTransacao) {
      request.tipoTransacao = 'VERIFICA_ELEGIBILIDADE';
    }
    
    return this.executeWithEnhancements<PedidoElegibilidadeWs & TissRequestBase, RespostaElegibilidadeWs>(
      request,
      'verificaElegibilidade',
      customCabecalhoParams,
      options
    );
  }

  async solicitaStatusAutorizacao(
    request: SolicitacaoStatusAutorizacaoWs & TissRequestBase,
    customCabecalhoParams?: Partial<CabecalhoParams>,
    options?: ISoapExOptions
  ): Promise<TissResponse<SituacaoAutorizacaoWs>> {
    if (!request.tipoTransacao) {
      request.tipoTransacao = 'SOLICITA_STATUS_AUTORIZACAO';
    }
    
    return this.executeWithEnhancements<SolicitacaoStatusAutorizacaoWs & TissRequestBase, SituacaoAutorizacaoWs>(
      request,
      'solicitaStatusAutorizacao',
      customCabecalhoParams,
      options
    );
  }

  async envioLoteGuias(
    request: LoteGuiasWs & TissRequestBase,
    customCabecalhoParams?: Partial<CabecalhoParams>,
    options?: ISoapExOptions
  ): Promise<TissResponse<ProtocoloRecebimentoWs>> {
    if (!request.tipoTransacao) {
      request.tipoTransacao = 'ENVIO_LOTE_GUIAS';
    }
    
    return this.executeWithEnhancements<LoteGuiasWs & TissRequestBase, ProtocoloRecebimentoWs>(
      request,
      'envioLoteGuias',
      customCabecalhoParams,
      options
    );
  }

  updateConfig(config: Partial<TissGatewayConfig>): void {
    this.config = { ...this.config, ...config };
  }

  updateWsdlUrls(newUrls: Partial<T>): void {
    this.ws.updateWsdlUrls(newUrls);
  }

  updateDefaultCabecalhoParams(params: Partial<Omit<CabecalhoParams, 'tipoTransacao'>>): void {
    this.defaultCabecalhoParams = { ...this.defaultCabecalhoParams, ...params };
  }

  clearCache(): void {
    this.ws.clearCache();
  }
}

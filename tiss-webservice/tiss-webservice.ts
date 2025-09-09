import { createClientAsync as soapCreateClientAsync, type IExOptions as ISoapExOptions } from "soap";
import type { 
  SolicitacaoStatusAutorizacaoV40100Client 
} from "./client/solicitacaostatusautorizacao/client";
import type { 
  SolicitacaoStatusProtocoloV40100Client 
} from "./client/solicitacaostatusprotocolo/client";
import type { 
  SolicitacaoStatusRecursoGlosaV40100Client 
} from "./client/solicitacaostatusrecursoglosa/client";
import type { 
  EnvioDocumentosV40100Client 
} from "./client/enviodocumentos/client";
import type { 
  VerificaElegibilidadeV40100Client 
} from "./client/verificaelegibilidade/client";
import type { 
  CancelaGuiaV40100Client 
} from "./client/cancelaguia/client";
import type { 
  ComunicacaoBeneficiarioV40100Client 
} from "./client/comunicacaobeneficiario/client";
import type { 
  LoteAnexoV40100Client 
} from "./client/loteanexo/client";
import type { 
  LoteGuiasV40100Client 
} from "./client/loteguias/client";
import type { 
  RecursoGlosaV40100Client 
} from "./client/recursoglosa/client";
import type { 
  SolicitacaoDemonstrativoRetornoV40100Client 
} from "./client/solicitacaodemonstrativoretorno/client";
import type { 
  SolicitacaoProcedimentoV40100Client 
} from "./client/solicitacaoprocedimento/client";

// Import specific response types
import type { SituacaoAutorizacaoWs } from "./client/solicitacaostatusautorizacao/definitions/SituacaoAutorizacaoWs";
import type { SituacaoProtocoloWs } from "./client/solicitacaostatusprotocolo/definitions/SituacaoProtocoloWs";
import type { SituacaoProtocoloRecursoWs } from "./client/solicitacaostatusrecursoglosa/definitions/SituacaoProtocoloRecursoWs";
import type { ReciboDocumentosWs } from "./client/enviodocumentos/definitions/ReciboDocumentosWs";
import type { RespostaElegibilidadeWs } from "./client/verificaelegibilidade/definitions/RespostaElegibilidadeWs";
import type { ReciboCancelaGuiaWs } from "./client/cancelaguia/definitions/ReciboCancelaGuiaWs";
import type { ReciboComunicacaoWs } from "./client/comunicacaobeneficiario/definitions/ReciboComunicacaoWs";
import type { ProtocoloRecebimentoAnexoWs } from "./client/loteanexo/definitions/ProtocoloRecebimentoAnexoWs";
import type { ProtocoloRecebimentoWs } from "./client/loteguias/definitions/ProtocoloRecebimentoWs";
import type { ProtocoloRecebimentoRecursoWs } from "./client/recursoglosa/definitions/ProtocoloRecebimentoRecursoWs";
import type { DemonstrativoRetornoWs } from "./client/solicitacaodemonstrativoretorno/definitions/DemonstrativoRetornoWs";
import type { AutorizacaoProcedimentoWs } from "./client/solicitacaoprocedimento/definitions/AutorizacaoProcedimentoWs";

// Import request types for proper parameter typing
import type { SolicitacaoStatusAutorizacaoWs } from "./client/solicitacaostatusautorizacao/definitions/SolicitacaoStatusAutorizacaoWs";
import type { SolicitacaoStatusProtocoloWs } from "./client/solicitacaostatusprotocolo/definitions/SolicitacaoStatusProtocoloWs";
import type { SolicitacaoStatusRecursoGlosaWs } from "./client/solicitacaostatusrecursoglosa/definitions/SolicitacaoStatusRecursoGlosaWs";
import type { EnvioDocumentoWs } from "./client/enviodocumentos/definitions/EnvioDocumentoWs";
import type { PedidoElegibilidadeWs } from "./client/verificaelegibilidade/definitions/PedidoElegibilidadeWs";
import type { CancelaGuiaWs } from "./client/cancelaguia/definitions/CancelaGuiaWs";
import type { ComunicacaoBeneficiarioWs } from "./client/comunicacaobeneficiario/definitions/ComunicacaoBeneficiarioWs";
import type { LoteAnexoWs } from "./client/loteanexo/definitions/LoteAnexoWs";
import type { LoteGuiasWs } from "./client/loteguias/definitions/LoteGuiasWs";
import type { LoteRecursoGlosaWs } from "./client/recursoglosa/definitions/LoteRecursoGlosaWs";
import type { SolicitacaoDemonstrativoRetornoWs } from "./client/solicitacaodemonstrativoretorno/definitions/SolicitacaoDemonstrativoRetornoWs";
import type { SolicitacaoProcedimentoWs } from "./client/solicitacaoprocedimento/definitions/SolicitacaoProcedimentoWs";

/**
 * Configuration mapping for TISS WSDL operation URLs
 */
export interface WsdlUrlMapping {
  SOLICITA_STATUS_AUTORIZACAO?: string;
  SOLIC_STATUS_PROTOCOLO?: string;
  SOLIC_STATUS_RECURSO_GLOSA?: string;
  ENVIO_DOCUMENTO?: string;
  VERIFICA_ELEGIBILIDADE?: string;
  CANCELA_GUIA?: string;
  COMUNICACAO_BENEFICIARIO?: string;
  ENVIO_ANEXO?: string;
  ENVIO_LOTE_GUIAS?: string;
  RECURSO_GLOSA?: string;
  SOLIC_DEMONSTRATIVO_RETORNO?: string;
  SOLICITACAO_PROCEDIMENTOS?: string;
}

export type Result<T> = {
  success: boolean;
  data: T;
  rawResponse: string;
  soapHeader: string;
  rawRequest: string;
}

/**
 * Type to conditionally include methods based on provided URLs
 */
type ConditionalMethods<T extends Partial<WsdlUrlMapping>> = 
  & (T['SOLICITA_STATUS_AUTORIZACAO'] extends string ? {
      solicitaStatusAutorizacao(params: SolicitacaoStatusAutorizacaoWs, options?: ISoapExOptions): Promise<[result: SituacaoAutorizacaoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
    } : {})
  & (T['SOLIC_STATUS_PROTOCOLO'] extends string ? {
      solicStatusProtocolo(params: SolicitacaoStatusProtocoloWs, options?: ISoapExOptions): Promise<[result: SituacaoProtocoloWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
    } : {})
  & (T['SOLIC_STATUS_RECURSO_GLOSA'] extends string ? {
      solicStatusRecursoGlosa(params: SolicitacaoStatusRecursoGlosaWs, options?: ISoapExOptions): Promise<[result: SituacaoProtocoloRecursoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
    } : {})
  & (T['ENVIO_DOCUMENTO'] extends string ? {
      envioDocumento(params: EnvioDocumentoWs, options?: ISoapExOptions): Promise<[result: ReciboDocumentosWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
    } : {})
  & (T['VERIFICA_ELEGIBILIDADE'] extends string ? {
      verificaElegibilidade(params: PedidoElegibilidadeWs, options?: ISoapExOptions): Promise<[result: RespostaElegibilidadeWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
    } : {})
  & (T['CANCELA_GUIA'] extends string ? {
      cancelaGuia(params: CancelaGuiaWs, options?: ISoapExOptions): Promise<[result: ReciboCancelaGuiaWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
    } : {})
  & (T['COMUNICACAO_BENEFICIARIO'] extends string ? {
      comunicacaoBeneficiario(params: ComunicacaoBeneficiarioWs, options?: ISoapExOptions): Promise<[result: ReciboComunicacaoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
    } : {})
  & (T['ENVIO_ANEXO'] extends string ? {
      envioAnexo(params: LoteAnexoWs, options?: ISoapExOptions): Promise<[result: ProtocoloRecebimentoAnexoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
    } : {})
  & (T['ENVIO_LOTE_GUIAS'] extends string ? {
      envioLoteGuias(params: LoteGuiasWs, options?: ISoapExOptions): Promise<[result: ProtocoloRecebimentoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
    } : {})
  & (T['RECURSO_GLOSA'] extends string ? {
      recursoGlosa(params: LoteRecursoGlosaWs, options?: ISoapExOptions): Promise<[result: ProtocoloRecebimentoRecursoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
    } : {})
  & (T['SOLIC_DEMONSTRATIVO_RETORNO'] extends string ? {
      solicDemonstrativoRetorno(params: SolicitacaoDemonstrativoRetornoWs, options?: ISoapExOptions): Promise<[result: DemonstrativoRetornoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
    } : {})
  & (T['SOLICITACAO_PROCEDIMENTOS'] extends string ? {
      solicitacaoProcedimentos(params: SolicitacaoProcedimentoWs, options?: ISoapExOptions): Promise<[result: AutorizacaoProcedimentoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
    } : {});

/**
 * TISS Operations class for handling all TISS SOAP operations
 */
export class TissWebservice<T extends Partial<WsdlUrlMapping>> implements ConditionalMethods<T> {
  private wsdlUrls: T;
  private clientCache: Map<string, unknown> = new Map();

  constructor(wsdlUrls: T) {
    this.wsdlUrls = wsdlUrls;
  }

  /**
   * Get or create a SOAP client for the specified operation
   */
  private async getClient<TClient>(operationType: keyof WsdlUrlMapping): Promise<TClient> {
    const cacheKey = operationType;
    
    if (this.clientCache.has(cacheKey)) {
      return this.clientCache.get(cacheKey) as TClient;
    }

    const url = this.wsdlUrls[operationType];
    if (!url) {
      throw new Error(`WSDL URL not configured for operation: ${operationType}`);
    }

    try {
      const client = await soapCreateClientAsync(url, {}) as TClient;
      this.clientCache.set(cacheKey, client);
      return client;
    } catch (error) {
      throw new Error(`Failed to create SOAP client for ${operationType}: ${error}`);
    }
  }

  /**
   * Executes SOAP operation and returns full response tuple
   */
  private async executeOperation<TParams, TResponse>(
    operationType: keyof WsdlUrlMapping,
    operationMethod: string,
    params: TParams,
    options?: ISoapExOptions
  ): Promise<[result: TResponse, rawResponse: any, soapHeader: any, rawRequest: any]> {
    const client = await this.getClient<any>(operationType);
    
    if (!client[operationMethod]) {
      throw new Error(`Operation method ${operationMethod} not found on client`);
    }

    const response = await client[operationMethod](params, options);
    return response as [result: TResponse, rawResponse: any, soapHeader: any, rawRequest: any];
  }

  /**
   * Solicita Status de Autorização
   */
  async solicitaStatusAutorizacao(
    params: SolicitacaoStatusAutorizacaoWs,
    options?: ISoapExOptions
  ): Promise<[result: SituacaoAutorizacaoWs, rawResponse: any, soapHeader: any, rawRequest: any]> {
    return this.executeOperation<SolicitacaoStatusAutorizacaoWs, SituacaoAutorizacaoWs>(
      'SOLICITA_STATUS_AUTORIZACAO',
      'tissSolicitacaoStatusAutorizacao_OperationAsync',
      params,
      options
    );
  }

  /**
   * Solicita Status de Protocolo
   */
  async solicStatusProtocolo(
    params: SolicitacaoStatusProtocoloWs,
    options?: ISoapExOptions
  ): Promise<[result: SituacaoProtocoloWs, rawResponse: any, soapHeader: any, rawRequest: any]> {
    return this.executeOperation<SolicitacaoStatusProtocoloWs, SituacaoProtocoloWs>(
      'SOLIC_STATUS_PROTOCOLO',
      'tissSolicitacaoStatusProtocolo_OperationAsync',
      params,
      options
    );
  }

  /**
   * Solicita Status de Recurso de Glosa
   */
  async solicStatusRecursoGlosa(
    params: SolicitacaoStatusRecursoGlosaWs,
    options?: ISoapExOptions
  ): Promise<[result: SituacaoProtocoloRecursoWs, rawResponse: any, soapHeader: any, rawRequest: any]> {
    return this.executeOperation<SolicitacaoStatusRecursoGlosaWs, SituacaoProtocoloRecursoWs>(
      'SOLIC_STATUS_RECURSO_GLOSA',
      'tissSolicitacaoStatusRecursoGlosa_OperationAsync',
      params,
      options
    );
  }

  /**
   * Envio de Documento
   */
  async envioDocumento(
    params: EnvioDocumentoWs,
    options?: ISoapExOptions
  ): Promise<[result: ReciboDocumentosWs, rawResponse: any, soapHeader: any, rawRequest: any]> {
    return this.executeOperation<EnvioDocumentoWs, ReciboDocumentosWs>(
      'ENVIO_DOCUMENTO',
      'tissEnvioDocumentos_OperationAsync',
      params,
      options
    );
  }

  /**
   * Verifica Elegibilidade
   */
  async verificaElegibilidade(
    params: PedidoElegibilidadeWs,
    options?: ISoapExOptions
  ): Promise<[result: RespostaElegibilidadeWs, rawResponse: any, soapHeader: any, rawRequest: any]> {
    return this.executeOperation<PedidoElegibilidadeWs, RespostaElegibilidadeWs>(
      'VERIFICA_ELEGIBILIDADE',
      'tissVerificaElegibilidade_OperationAsync',
      params,
      options
    );
  }

  /**
   * Cancela Guia
   */
  async cancelaGuia(
    params: CancelaGuiaWs,
    options?: ISoapExOptions
  ): Promise<[result: ReciboCancelaGuiaWs, rawResponse: any, soapHeader: any, rawRequest: any]> {
    return this.executeOperation<CancelaGuiaWs, ReciboCancelaGuiaWs>(
      'CANCELA_GUIA',
      'tissCancelaGuia_OperationAsync',
      params,
      options
    );
  }

  /**
   * Comunicação com Beneficiário
   */
  async comunicacaoBeneficiario(
    params: ComunicacaoBeneficiarioWs,
    options?: ISoapExOptions
  ): Promise<[result: ReciboComunicacaoWs, rawResponse: any, soapHeader: any, rawRequest: any]> {
    return this.executeOperation<ComunicacaoBeneficiarioWs, ReciboComunicacaoWs>(
      'COMUNICACAO_BENEFICIARIO',
      'tissComunicacaoBeneficiario_OperationAsync',
      params,
      options
    );
  }

  /**
   * Envio de Anexo
   */
  async envioAnexo(
    params: LoteAnexoWs,
    options?: ISoapExOptions
  ): Promise<[result: ProtocoloRecebimentoAnexoWs, rawResponse: any, soapHeader: any, rawRequest: any]> {
    return this.executeOperation<LoteAnexoWs, ProtocoloRecebimentoAnexoWs>(
      'ENVIO_ANEXO',
      'tissLoteAnexo_OperationAsync',
      params,
      options
    );
  }

  /**
   * Envio de Lote de Guias
   */
  async envioLoteGuias(
    params: LoteGuiasWs,
    options?: ISoapExOptions
  ): Promise<[result: ProtocoloRecebimentoWs, rawResponse: any, soapHeader: any, rawRequest: any]> {
    return this.executeOperation<LoteGuiasWs, ProtocoloRecebimentoWs>(
      'ENVIO_LOTE_GUIAS',
      'tissLoteGuias_OperationAsync',
      params,
      options
    );
  }

  /**
   * Recurso de Glosa
   */
  async recursoGlosa(
    params: LoteRecursoGlosaWs,
    options?: ISoapExOptions
  ): Promise<[result: ProtocoloRecebimentoRecursoWs, rawResponse: any, soapHeader: any, rawRequest: any]> {
    return this.executeOperation<LoteRecursoGlosaWs, ProtocoloRecebimentoRecursoWs>(
      'RECURSO_GLOSA',
      'tissRecursoGlosa_OperationAsync',
      params,
      options
    );
  }

  /**
   * Solicitação de Demonstrativo de Retorno
   */
  async solicDemonstrativoRetorno(
    params: SolicitacaoDemonstrativoRetornoWs,
    options?: ISoapExOptions
  ): Promise<[result: DemonstrativoRetornoWs, rawResponse: any, soapHeader: any, rawRequest: any]> {
    return this.executeOperation<SolicitacaoDemonstrativoRetornoWs, DemonstrativoRetornoWs>(
      'SOLIC_DEMONSTRATIVO_RETORNO',
      'tissSolicitacaoDemonstrativoRetorno_OperationAsync',
      params,
      options
    );
  }

  /**
   * Solicitação de Procedimentos
   */
  async solicitacaoProcedimentos(
    params: SolicitacaoProcedimentoWs,
    options?: ISoapExOptions
  ): Promise<[result: AutorizacaoProcedimentoWs, rawResponse: any, soapHeader: any, rawRequest: any]> {
    return this.executeOperation<SolicitacaoProcedimentoWs, AutorizacaoProcedimentoWs>(
      'SOLICITACAO_PROCEDIMENTOS',
      'tissSolicitacaoProcedimento_OperationAsync',
      params,
      options
    );
  }

  /**
   * Clear client cache (useful for testing or when URLs change)
   */
  clearCache(): void {
    this.clientCache.clear();
  }

  /**
   * Update WSDL URLs configuration
   */
  updateWsdlUrls(newUrls: Partial<T>): void {
    this.wsdlUrls = { ...this.wsdlUrls, ...newUrls };
    this.clearCache(); // Clear cache since URLs changed
  }
}

import type { EnvioDocumentoWs } from '../../client/enviodocumentos/definitions/EnvioDocumentoWs';
import type { ReciboDocumentosWs } from '../../client/enviodocumentos/definitions/ReciboDocumentosWs';

export const mockPayload: EnvioDocumentoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'ENVIO_DOCUMENTO',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    },
    origem: {
      codigoOperadora: '12345',
      codigoRegistro: 'REG001'
    },
    destino: {
      codigoOperadora: '67890',
      codigoRegistro: 'REG002'
    },
    Padrao: '4.00.00',
    loginSenhaPrestador: {
      loginPrestador: 'user123',
      senhaPrestador: 'pass123'
    }
  },
  envioDocumento: {
    numeroProtocolo: 'PROT20240115001',
    numeroGuiaPrincipal: 'GP20240115001',
    numeroGuiaOperadora: 'OP20240115001',
    tipoDocumento: '1',
    nomeArquivo: 'documento.pdf',
    conteudoArquivo: 'JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCgoyIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQlQKL0YxIDEyIFRmCjEwMCA3MDAgVGQKKEhlbGxvIFdvcmxkKSBUagoKRVQKZW5kc3RyZWFtCmVuZG9iagoKNSAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTEKL0Jhc2VGb250IC9IZWx2ZXRpY2EKPj4KZW5kb2JqCgp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYKMDAwMDAwMDAwOSAwMDAwMCBuCjAwMDAwMDAwNTggMDAwMDAgbgowMDAwMDAwMTE1IDAwMDAwIG4KMDAwMDAwMDIwNCAwMDAwMCBuCjAwMDAwMDAzMDEgMDAwMDAgbgp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjM2NQolJUVPRg==',
    dataEnvio: '2024-01-15',
    observacao: 'Documento complementar da guia'
  },
  hash: 'mock_hash_value_123456789'
};

export const mockSuccessResponse: ReciboDocumentosWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'ENVIO_DOCUMENTO',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    }
  },
  reciboDocumentos: {
    numeroProtocolo: 'PROT20240115001',
    numeroGuiaPrincipal: 'GP20240115001',
    numeroGuiaOperadora: 'OP20240115001',
    statusDocumento: 'RECEBIDO',
    dataRecebimento: '2024-01-15',
    observacao: 'Documento recebido com sucesso'
  },
  hash: 'mock_response_hash_987654321'
};

export const mockSoapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ans:tissReciboDocumentos_OperationResponse xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
      <ans:reciboDocumentosWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>ENVIO_DOCUMENTO</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:reciboDocumentos>
          <ans:numeroProtocolo>PROT20240115001</ans:numeroProtocolo>
          <ans:numeroGuiaPrincipal>GP20240115001</ans:numeroGuiaPrincipal>
          <ans:numeroGuiaOperadora>OP20240115001</ans:numeroGuiaOperadora>
          <ans:statusDocumento>RECEBIDO</ans:statusDocumento>
          <ans:dataRecebimento>2024-01-15</ans:dataRecebimento>
          <ans:observacao>Documento recebido com sucesso</ans:observacao>
        </ans:reciboDocumentos>
        <ans:hash>mock_response_hash_987654321</ans:hash>
      </ans:reciboDocumentosWS>
    </ans:tissReciboDocumentos_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

export { mockPayload as Payload };

// Main entry point for the TISS Webservice Client
export { default as TISSClient, PROFESSIONAL_PROFILES, COMMON_PROCEDURES } from './lib/tiss-client.js';
export { default as TISSService, executeSolicitaProcedimento, executeVerificaElegibilidade } from './lib/tiss-service.js';

// Re-export types for convenience
export type {
  TISSCredentials,
  ProfessionalProfile,
  DadosBeneficiario,
  Procedimento,
  TISSClientOptions,
  ElegibilidadeRequest,
  SolicitacaoProcedimentoRequest,
  LoteGuiasRequest
} from './lib/tiss-client.js';

export type {
  TISSServiceOptions,
  ExecuteSolicitaProcedimentoParams,
  ExecuteResult
} from './lib/tiss-service.js';

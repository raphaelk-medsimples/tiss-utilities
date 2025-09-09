# TISS Service Workers Implementation

This repository contains Cloudflare Service Workers implementations for all ANS TISS (Troca de Informações de Saúde Suplementar) Webservice commands, following the Amil Insurer provider specification.

## Overview

Each service worker implements one specific TISS command, following the same architectural pattern as the original `api-tiss-verifica-elegibilidade` implementation. All services are designed to work with Cloudflare Workers and use the same authentication and hashing mechanisms.

## Implemented Services

| Service | URL | Description | Status |
|---------|-----|-------------|---------|
| **VERIFICA_ELEGIBILIDADE** | `https://api.servicos.grupoamil.com.br/api-tiss-verifica-elegibilidade/v4.01.00` | Verify beneficiary eligibility | ✅ Already implemented |
| **CANCELA_GUIA** | `https://api.servicos.grupoamil.com.br/api-tiss-cancela-guia/v4.01.00` | Cancel medical guide | ✅ Implemented |
| **COMUNICACAO_BENEFICIARIO** | `https://api.servicos.grupoamil.com.br/api-tiss-comunicacao-beneficiario/v4.01.00` | Beneficiary communication | ✅ Implemented |
| **ENVIO_DOCUMENTO** | `https://api.servicos.grupoamil.com.br/api-tiss-envio-documento/v4.01.00` | Document submission | ✅ Implemented |
| **ENVIO_ANEXO** | `https://api.servicos.grupoamil.com.br/api-tiss-lote-anexo/v4.01.00` | Attachment batch submission | ✅ Implemented |
| **ENVIO_LOTE_GUIAS** | `https://api.servicos.grupoamil.com.br/api-tiss-lote-guias/v4.01.00` | Guide batch submission | ✅ Implemented |
| **RECURSO_GLOSA** | `https://api.servicos.grupoamil.com.br/api-tiss-recurso-glosa/v4.01.00` | Gloss appeal | ✅ Implemented |
| **SOLIC_DEMONSTRATIVO_RETORNO** | `https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-demonstrativo-retorno/v4.01.00` | Return statement request | ✅ Implemented |
| **SOLICITACAO_PROCEDIMENTOS** | `https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-procedimento/v4.01.00` | Procedure request | ✅ Implemented |
| **SOLICITA_STATUS_AUTORIZACAO** | `https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-status-autorizacao/v4.01.00` | Authorization status request | ✅ Implemented |
| **SOLIC_STATUS_PROTOCOLO** | `https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-status-protocolo/v4.01.00` | Protocol status request | ✅ Implemented |
| **SOLIC_STATUS_RECURSO_GLOSA** | `https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-status-recurso-glosa/v4.01.00` | Gloss appeal status request | ✅ Implemented |

## Architecture

### Common Features

All service workers share the following architectural components:

1. **XML Hash Generation**: MD5 hash calculation for request integrity
2. **Authentication**: MD5-hashed password authentication with Amil provider
3. **XML to JSON Conversion**: Response parsing using HTMLRewriter
4. **Error Handling**: Comprehensive error responses
5. **Parameter Validation**: Required field validation
6. **Environment Variables**: Secure credential storage in Cloudflare KV

### Directory Structure

Each service follows this structure:
```
api-tiss-{service-name}/
├── src/
│   └── index.ts                 # Main service worker implementation
├── package.json                 # Dependencies and scripts
├── wrangler.json               # Cloudflare Workers configuration
├── tsconfig.json               # TypeScript configuration
└── worker-configuration.d.ts   # Environment types
```

### Request/Response Flow

1. **Input**: JSON payload or URL parameters
2. **Validation**: Required field validation
3. **Authentication**: Retrieve credentials from KV store
4. **XML Generation**: Build SOAP XML with proper TISS structure
5. **Hash Calculation**: Generate MD5 hash of XML content
6. **API Call**: Forward to Amil TISS endpoint
7. **Response Processing**: Convert XML response to JSON
8. **Output**: Structured JSON response with raw XML

## Service-Specific Details

### CANCELA_GUIA
**Required Parameters:**
- `numeroGuiaOperadora` - Guide number from operator
- `motivoCancelamento` - Cancellation reason

**Optional Parameters:**
- `numeroGuiaPrincipal` - Main guide number
- `observacao` - Additional observations

### COMUNICACAO_BENEFICIARIO
**Required Parameters:**
- `numeroCarteira` - Beneficiary card number
- `tipoComunicacao` - Communication type
- `mensagem` - Communication message

**Optional Parameters:**
- `nomeBeneficiario` - Beneficiary name
- `dataComunicacao` - Communication date (defaults to current date)
- `dadosComplementares` - Additional data

### ENVIO_DOCUMENTO
**Required Parameters:**
- `numeroProtocolo` - Protocol number
- `tipoDocumento` - Document type
- `nomeArquivo` - File name
- `conteudoArquivo` - Base64 encoded file content

**Optional Parameters:**
- `numeroGuiaPrincipal` - Main guide number
- `numeroGuiaOperadora` - Operator guide number
- `dataEnvio` - Submission date (defaults to current date)
- `observacao` - Observations

### ENVIO_ANEXO (Lote Anexo)
**Required Parameters:**
- `numeroLote` - Batch number

**Optional Parameters:**
- `observacoes` - Observations
- `anexos` - Attachment data

### ENVIO_LOTE_GUIAS
**Required Parameters:**
- `numeroLote` - Batch number

**Optional Parameters:**
- `observacoes` - Observations
- `guias` - Guide data

### RECURSO_GLOSA
**Required Parameters:**
- `numeroLote` - Batch number

**Optional Parameters:**
- `numeroProtocolo` - Protocol number
- `observacoes` - Observations

### SOLIC_DEMONSTRATIVO_RETORNO
**Required Parameters:**
- `numeroProtocolo` - Protocol number

**Optional Parameters:**
- `dataInicio` - Start date
- `dataFim` - End date

### SOLICITACAO_PROCEDIMENTOS
**Required Parameters:**
- `numeroCarteira` - Beneficiary card number
- `codigoProcedimento` - Procedure code

**Optional Parameters:**
- `numeroGuiaPrincipal` - Main guide number
- `nomeBeneficiario` - Beneficiary name
- `indicacaoClinica` - Clinical indication
- `observacao` - Observations

### SOLICITA_STATUS_AUTORIZACAO
**Required Parameters:**
- `numeroCarteira` - Beneficiary card number

**Optional Parameters:**
- `numeroGuiaOperadora` - Operator guide number
- `numeroGuiaPrincipal` - Main guide number
- `nomeBeneficiario` - Beneficiary name

### SOLIC_STATUS_PROTOCOLO
**Required Parameters:**
- `numeroProtocolo` - Protocol number

**Optional Parameters:**
- `registroANS` - ANS registration number

### SOLIC_STATUS_RECURSO_GLOSA
**Required Parameters:**
- `numeroProtocolo` - Protocol number

**Optional Parameters:**
- `numeroLote` - Batch number

## Environment Configuration

All services require the following environment variable:

```
HUMMANAMAIS_MAIN_LOGIN_PASSWORD
```

This should contain a JSON object with login credentials:
```json
{
  "login": "your_provider_code",
  "password": "your_password"
}
```

## Deployment

Each service can be deployed independently using Wrangler:

```bash
cd api-tiss-{service-name}
wrangler deploy
```

Or deploy all services:
```bash
for dir in api-tiss-*/; do
  cd "$dir"
  wrangler deploy
  cd ..
done
```

## Usage Examples

### POST Request
```bash
curl -X POST https://your-worker-url \
  -H "Content-Type: application/json" \
  -d '{
    "numeroCarteira": "1234567890",
    "tipoComunicacao": "INCLUSAO",
    "mensagem": "Beneficiary inclusion notification"
  }'
```

### GET Request with Query Parameters
```bash
curl "https://your-worker-url?numeroCarteira=1234567890&tipoComunicacao=INCLUSAO&mensagem=test"
```

### Response Format
```json
{
  "raw": "<xml>...</xml>",
  "json": { ... },
  "headers": { ... }
}
```

## Error Handling

All services return structured error responses:

```json
{
  "success": false,
  "errors": [
    {
      "message": "Bad Request: numeroCarteira is required"
    }
  ]
}
```

## Technical Specifications

- **TISS Version**: 4.01.00
- **Authentication**: MD5 hashed passwords
- **Hash Algorithm**: MD5 for XML content integrity
- **Default ANS Registry**: 326305 (Amil)
- **Runtime**: Cloudflare Workers
- **TypeScript**: ES2022 target

## Related Files

- `/tiss/` - Core TISS service implementations and utilities
- `/tiss-webservice/` - WSDL-generated client definitions and test fixtures
- `/api-tiss-verifica-elegibilidade/` - Original reference implementation

## Contributing

When adding new TISS commands or modifying existing ones:

1. Follow the established pattern from existing services
2. Ensure proper XML structure matches TISS specifications
3. Include comprehensive parameter validation
4. Update this README with service details
5. Add appropriate test cases

## License

This implementation follows the ANS TISS specification for healthcare data exchange in Brazil.
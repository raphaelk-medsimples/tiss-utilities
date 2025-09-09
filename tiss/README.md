# TISS Webservice Client

A comprehensive TypeScript client for interacting with TISS (Troca de Informações de Saúde Suplementar) webservices, the Brazilian health insurance communication standard.

## Features

- **Complete TISS Operations Support**: Eligibility verification, procedure authorization, batch guide submission
- **Type-Safe**: Full TypeScript support with proper type definitions
- **Flexible Architecture**: Both low-level client and high-level service interfaces
- **Automatic Logging**: Optional request/response logging for debugging
- **Hash Authentication**: Automatic MD5 hash calculation for TISS security requirements
- **Error Handling**: Comprehensive error handling and validation
- **Reusable Components**: Pre-defined professional profiles and common procedures

## Installation

```bash
npm install
```

## Quick Start

### Basic Usage

```typescript
import TISSClient, { PROFESSIONAL_PROFILES, COMMON_PROCEDURES } from '@tiss/webservice';

const client = new TISSClient({
  registroANS: "326305",
  codigoPrestador: "70434816",
  senhaPrestador: "your-password",
  versaoTISS: "4.01.00"
}, {
  enableLogging: true,
  logDirectory: './logs'
});

// Check patient eligibility
const eligibilityResult = await client.verificaElegibilidade({
  numeroCarteira: "093897586",
  tipoIdent: "03"
});

// Request procedure authorization
const procedureResult = await client.solicitaProcedimento({
  numeroGuiaPrestador: "1234567890",
  dadosBeneficiario: {
    numeroCarteira: "093897586",
    atendimentoRN: "N",
    tipoIdent: "03"
  },
  nomeContratadoSolicitante: "CLINICA EXEMPLO LTDA",
  profissionalSolicitante: PROFESSIONAL_PROFILES.felipe,
  procedimentosSolicitados: [COMMON_PROCEDURES.consulta],
  caraterAtendimento: "1",
  codigoExecutanteOperadora: "70434816",
  cnesExecutante: "2998386"
});
```

### High-Level Service Usage

```typescript
import { TISSService, executeSolicitaProcedimento } from '@tiss/webservice/service';

// Using the convenience function
const result = await executeSolicitaProcedimento({
  registroANS: "326305",
  codigoPrestador: "70434816",
  senhaPrestador: "your-password",
  
  dadosBeneficiario: {
    numeroCarteira: "093897586",
    atendimentoRN: "N",
    tipoIdent: "03"
  },
  
  nomeContratadoSolicitante: "CLINICA EXEMPLO LTDA",
  profissionalSolicitante: PROFESSIONAL_PROFILES.felipe,
  procedimentosSolicitados: [COMMON_PROCEDURES.consulta],
  caraterAtendimento: "1",
  codigoExecutanteOperadora: "70434816",
  cnesExecutante: "2998386",
  
  enableLogging: true,
  validationCodeMode: 'interactive'
});
```

### Amil-Specific Service

```typescript
import { TISSService } from '@tiss/webservice/service';

const amilService = TISSService.createAmilService({
  codigoPrestador: "70434816",
  senhaPrestador: "your-password",
  enableLogging: true
});

const result = await amilService.executeSolicitaProcedimento({
  dadosBeneficiario: {
    numeroCarteira: "093897586",
    atendimentoRN: "N",
    tipoIdent: "03"
  },
  // ... other parameters
});
```

## Development

### Build

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Run Examples

```bash
npm run example
```

### Clean Build Files

```bash
npm run clean
```

## API Reference

### TISSClient

The low-level client for direct TISS webservice communication.

#### Constructor

```typescript
new TISSClient(credentials: TISSCredentials, options?: TISSClientOptions)
```

#### Methods

- `verificaElegibilidade(request: ElegibilidadeRequest, url?: string)`: Check patient eligibility
- `solicitaProcedimento(request: SolicitacaoProcedimentoRequest, url?: string)`: Request procedure authorization
- `enviaLoteGuias(request: LoteGuiasRequest, url?: string)`: Submit batch of guides

#### Static Methods

- `createProfessionalProfile(data: Partial<ProfessionalProfile>)`: Create professional profile
- `createProcedure(data: Partial<Procedimento>)`: Create procedure definition

### TISSService

High-level service with additional features like validation code handling.

#### Constructor

```typescript
new TISSService(options?: TISSServiceOptions)
```

#### Methods

- `executeSolicitaProcedimento(params: ExecuteSolicitaProcedimentoParams)`: Execute procedure authorization with validation handling
- `executeVerificaElegibilidade(request: ElegibilidadeRequest, credentials?: Partial<TISSCredentials>)`: Execute eligibility verification

#### Static Methods

- `createAmilService(options)`: Create service with Amil-specific defaults

## Types

### TISSCredentials

```typescript
interface TISSCredentials {
  registroANS: string;
  codigoPrestador: string;
  senhaPrestador: string;
  versaoTISS?: '4.01.00' | '4.00.01' | '4.00.00' | '3.05.00';
}
```

### ProfessionalProfile

```typescript
interface ProfessionalProfile {
  nomeProfissional: string;
  conselhoProfissional: string;
  numeroConselhoProfissional: string;
  UF: string;
  CBOS: string;
}
```

### DadosBeneficiario

```typescript
interface DadosBeneficiario {
  numeroCarteira: string;
  atendimentoRN: 'S' | 'N';
  tipoIdent: string;
}
```

### Procedimento

```typescript
interface Procedimento {
  codigoTabela: string;
  codigoProcedimento: string;
  descricaoProcedimento: string;
  quantidadeSolicitada?: string;
}
```

## Pre-defined Data

### Professional Profiles

```typescript
import { PROFESSIONAL_PROFILES } from '@tiss/webservice';

// Available profiles:
PROFESSIONAL_PROFILES.felipe
PROFESSIONAL_PROFILES.guilherme
```

### Common Procedures

```typescript
import { COMMON_PROCEDURES } from '@tiss/webservice';

// Available procedures:
COMMON_PROCEDURES.consulta
```

## Configuration

### Logging

Enable logging to save request/response data for debugging:

```typescript
const client = new TISSClient(credentials, {
  enableLogging: true,
  logDirectory: './logs' // Default: './logs'
});
```

Logs are organized by operation, date, and transaction ID:
```
logs/
├── verifica-elegibilidade/
│   └── 2024-01-15/
│       └── 1234567890/
│           ├── request.xml
│           └── response.json
└── solicita-procedimento/
    └── 2024-01-15/
        └── 1234567891/
            ├── request.xml
            └── response.json
```

### Validation Code Handling

For procedure authorization requests that require validation codes:

```typescript
const result = await service.executeSolicitaProcedimento({
  // ... other parameters
  validationCodeMode: 'interactive' // 'interactive' | 'automatic' | 'skip'
});
```

- `interactive`: Prompts for manual validation code input (requires implementation)
- `automatic`: Automatically retrieves validation code (requires implementation)
- `skip`: Skips validation code step

## Error Handling

All methods return results with error handling:

```typescript
const result = await client.verificaElegibilidade(request);

if (result.error) {
  console.error('Request failed:', result.error);
} else {
  console.log('Success:', result.response);
}
```

## Examples

See `examples/example-usage.ts` for comprehensive usage examples including:

- Direct client usage
- High-level service usage
- Custom professional profiles and procedures
- Multiple operations in sequence
- Error handling patterns

## WSDL Support

The client supports all major TISS operations based on version 4.01.00 WSDL definitions:

- `tissVerificaElegibilidade`: Patient eligibility verification
- `tissSolicitacaoProcedimento`: Procedure authorization requests
- `tissLoteGuias`: Batch guide submission
- `tissCancelaGuia`: Guide cancellation
- `tissRecursoGlosa`: Gloss appeals
- And more...

## Security

- Automatic MD5 hash calculation for request authentication
- Password hashing for login credentials
- Secure SOAP envelope generation
- Request/response logging with sensitive data handling

## Dependencies

- `xml2js`: XML parsing and generation
- `node:crypto`: Hash calculation
- `node:fs`: File system operations for logging
- `node:path`: Path utilities

## License

ISC

import { BulkAsyncJobExecutionResultStatus, mapBulkAsyncJobExecutionResultStatusToToastType } from '@app/enums/bulk-async-job-result-status.enum';
import { WebsocketEventToastType, WebsocketEventTostablePort } from '@app/websocket-events/tostable.port';
import { z } from 'zod';
import { Z } from "zod-class";

// Started
const StartedSchema = z.object({
  jobRequestId: z.string(),
  jobExecutionId: z.string(),
  nTotalItems: z.number(),
  ofxFileName: z.string(),
  bankAccountName: z.string(),
});

class StartedEventDataEntity extends Z.class(StartedSchema.shape) implements WebsocketEventTostablePort {
  getType(): WebsocketEventToastType {
    return WebsocketEventToastType.default;
  }

  getTitle(attempt: number): string {
    let title = `A importação do arquivo OFX "${this.ofxFileName}" para a conta "${this.bankAccountName}" foi iniciada...`;
    if (attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    return `Serão importadas ${this.nTotalItems} transações.`;
  }

  static build(
    input: z.infer<typeof StartedSchema>,
  ) {
    return new StartedEventDataEntity(input);
  }
}

// Progress
const ProgressSchema = z.object({
  jobRequestId: z.string(),
  jobExecutionId: z.string(),
  nTotalItems: z.number(),
  ofxFileName: z.string(),
  bankAccountName: z.string(),
  nSuccessItems: z.number(),
  nFailedItems: z.number(),
  progress: z.number(),
});

class ProgressEventDataEntity extends Z.class(ProgressSchema.shape) implements WebsocketEventTostablePort {
  getType(): WebsocketEventToastType {
    return WebsocketEventToastType.loading;
  }

  getTitle(attempt: number): string {
    let title = `A importação do arquivo OFX "${this.ofxFileName}" para a conta "${this.bankAccountName}" está em progresso...`;
    if (attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    return `${Math.round(this.progress * 100)}% (${this.nSuccessItems + this.nFailedItems}/${this.nTotalItems})`;
  }

  static build(
    input: z.infer<typeof ProgressSchema>,
  ) {
    return new ProgressEventDataEntity(input);
  }
}

// Finished
const FinishedSchema = z.object({
  jobRequestId: z.string(),
  jobExecutionId: z.string(),
  nTotalItems: z.number(),
  ofxFileName: z.string(),
  bankAccountName: z.string(),
  nSuccessItems: z.number(),
  nFailedItems: z.number(),
  progress: z.number(),
  finishedAt: z.coerce.date(),
  resultStatus: z.nativeEnum(BulkAsyncJobExecutionResultStatus),
});

class FinishedEventDataEntity extends Z.class(FinishedSchema.shape) implements WebsocketEventTostablePort {
  getType(): WebsocketEventToastType {
    return mapBulkAsyncJobExecutionResultStatusToToastType(this.resultStatus);
  }

  getTitle(attempt: number): string {
    let title = `A importação do arquivo OFX "${this.ofxFileName}" para a conta "${this.bankAccountName}" foi finalizada.`;
    if (attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    switch (this.resultStatus) {
      case BulkAsyncJobExecutionResultStatus.EMPTY:
        return `Nenhuma transação foi importada do arquivo "${this.ofxFileName}".`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
        return `Do arquivo "${this.ofxFileName}", todas as ${this.nTotalItems} transações previstas foram importadas com sucesso.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
        return `Do arquivo "${this.ofxFileName}", todas as ${this.nTotalItems} transações previstas falharam ao importar.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
        return `Do arquivo "${this.ofxFileName}", ${this.nSuccessItems} de ${this.nTotalItems} transações previstas foram importadas com sucesso.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
        return `Do arquivo "${this.ofxFileName}", ${this.nFailedItems} de ${this.nTotalItems} transações previstas falharam ao importar.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
        return `Do arquivo "${this.ofxFileName}", ${this.nSuccessItems} transações foram importadas com sucesso e ${this.nFailedItems} falharam, de um total de ${this.nTotalItems} previstas.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
        return `Do arquivo "${this.ofxFileName}", ${this.nSuccessItems} transações foram importadas com sucesso e ${this.nFailedItems} falharam, de um total de ${this.nTotalItems} previstas.`;
      case BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
        return `Nenhuma transação do arquivo "${this.ofxFileName}" foi processada.`;
    }
  }

  static build(
    input: z.infer<typeof FinishedSchema>,
  ) {
    return new FinishedEventDataEntity(input);
  }
}

export const OfxImportWebsocketEvents = {
  Started: {
    eventName: 'ofx-import-started',
    EventDataSchema: StartedSchema,
    EventDataEntity: StartedEventDataEntity,
  },
  Progress: {
    eventName: 'ofx-import-progress',
    EventDataSchema: ProgressSchema,
    EventDataEntity: ProgressEventDataEntity,
  },
  Finished: {
    eventName: 'ofx-import-finished',
    EventDataSchema: FinishedSchema,
    EventDataEntity: FinishedEventDataEntity,
  },
}; 
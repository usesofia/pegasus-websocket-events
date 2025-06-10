import { BulkAsyncJobExecutionResultStatus, mapBulkAsyncJobExecutionResultStatusToToastType } from '@app/enums/bulk-async-job-result-status.enum';
import { WebsocketEventToastType, WebsocketEventTostablePort } from '@app/websocket-events/tostable.port';
import { z } from 'zod';
import { Z } from "zod-class";

// Started
const StartedSchema = z.object({
  jobRequestId: z.string(),
  jobExecutionId: z.string(),
  nTotalItems: z.number(),
  accountName: z.string(),
  accountNumber: z.string(),
});

class StartedEventDataEntity extends Z.class(StartedSchema.shape) implements WebsocketEventTostablePort {
  getType(): WebsocketEventToastType {
    return WebsocketEventToastType.default;
  }

  getTitle(attempt: number): string {
    let title = `A sincronização das transações bancárias da conta "${this.accountName}" foi iniciada...`;
    if(attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    return `Serão sincronizadas ${this.nTotalItems} transações bancárias.`;
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
  accountName: z.string(),
  accountNumber: z.string(),
  nSuccessItems: z.number(),
  nFailedItems: z.number(),
  progress: z.number(),
});

class ProgressEventDataEntity extends Z.class(ProgressSchema.shape) implements WebsocketEventTostablePort {
  getType(): WebsocketEventToastType {
    return WebsocketEventToastType.loading;
  }

  getTitle(attempt: number): string {
    let title = `A sincronização das transações bancárias da conta "${this.accountName}" está em progresso...`;
    if(attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    return `${Math.round(this.progress * 100)}% (${this.nSuccessItems + this.nFailedItems}/${this.nTotalItems}).`;
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
  accountName: z.string(),
  accountNumber: z.string(),
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
    let title = `A sincronização das transações bancárias da conta "${this.accountName}" foi finalizada`;
    if(attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    switch (this.resultStatus) {
      case BulkAsyncJobExecutionResultStatus.EMPTY:
        return `Nenhuma transação bancária foi sincronizada.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
        return `Das ${this.nTotalItems} previstas, todas foram sincronizadas com sucesso.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
        return `Das ${this.nTotalItems} previstas, todas falharam.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
        return `Das ${this.nTotalItems} previstas, ${this.nSuccessItems} foram sincronizadas com sucesso.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
        return `Das ${this.nTotalItems} previstas, ${this.nSuccessItems} foram sincronizadas com sucesso e ${this.nFailedItems} falharam.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
        return `Das ${this.nTotalItems} previstas, ${this.nSuccessItems} foram sincronizadas com sucesso e ${this.nFailedItems} falharam.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
        return `Das ${this.nTotalItems} previstas, ${this.nSuccessItems} foram sincronizadas com sucesso e ${this.nFailedItems} falharam.`;
      case BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
        return `Nenhuma transação bancária foi sincronizada.`;
    }
  }

  static build(
    input: z.infer<typeof FinishedSchema>,
  ) {
    return new FinishedEventDataEntity(input);
  }
}

export const SyncBankTransactionsWebsocketEvents = {
  Started: {
    eventName: 'sync-bank-transactions-started',
    EventDataSchema: StartedSchema,
    EventDataEntity: StartedEventDataEntity,
  },
  Progress: {
    eventName: 'sync-bank-transactions-progress',
    EventDataSchema: ProgressSchema,
    EventDataEntity: ProgressEventDataEntity,
  },
  Finished: {
    eventName: 'sync-bank-transactions-finished',
    EventDataSchema: FinishedSchema,
    EventDataEntity: FinishedEventDataEntity,
  },
};

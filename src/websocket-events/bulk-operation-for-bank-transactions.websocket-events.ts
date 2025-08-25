import {
  BulkAsyncJobExecutionResultStatus,
  mapBulkAsyncJobExecutionResultStatusToToastType,
} from "@app/enums/bulk-async-job-result-status.enum";
import { BulkBankTransactionsOperation, mapBulkBankTransactionsOperationToName } from "@app/enums/bulk-bank-transactions-operation.enum";
import {
  WebsocketEventToastType,
  WebsocketEventTostablePort,
} from "@app/websocket-events/tostable.port";
import { z } from "zod";
import { Z } from "zod-class";

// Started
const StartedSchema = z.object({
  jobRequestId: z.string(),
  jobExecutionId: z.string(),
  nTotalItems: z.number(),
  operation: z.nativeEnum(BulkBankTransactionsOperation),
});

class StartedEventDataEntity
  extends Z.class(StartedSchema.shape)
  implements WebsocketEventTostablePort
{
  getType(): WebsocketEventToastType {
    return WebsocketEventToastType.default;
  }
  
  getTitle(attempt: number): string {
    let title = `A operação em massa de "${mapBulkBankTransactionsOperationToName(this.operation)}" as transações bancárias foi iniciada...`;
    if (attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    return `Serão processadas ${this.nTotalItems} transações bancárias.`;
  }

  static build(input: z.infer<typeof StartedSchema>) {
    return new StartedEventDataEntity(input);
  }
}

// Progress
const ProgressSchema = z.object({
  jobRequestId: z.string(),
  jobExecutionId: z.string(),
  nTotalItems: z.number(),
  operation: z.nativeEnum(BulkBankTransactionsOperation),
  nSuccessItems: z.number(),
  nFailedItems: z.number(),
  progress: z.number(),
});

class ProgressEventDataEntity
  extends Z.class(ProgressSchema.shape)
  implements WebsocketEventTostablePort
{
  getType(): WebsocketEventToastType {
    return WebsocketEventToastType.loading;
  }

  getTitle(attempt: number): string {
    let title = `A operação em massa de "${mapBulkBankTransactionsOperationToName(this.operation)}" as transações bancárias está em progresso...`;
    if (attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    return `${Math.round(this.progress * 100)}% (${this.nSuccessItems + this.nFailedItems}/${this.nTotalItems})`;
  }

  static build(input: z.infer<typeof ProgressSchema>) {
    return new ProgressEventDataEntity(input);
  }
}

// Finished
const FinishedSchema = z.object({
  jobRequestId: z.string(),
  jobExecutionId: z.string(),
  nTotalItems: z.number(),
  operation: z.nativeEnum(BulkBankTransactionsOperation),
  nSuccessItems: z.number(),
  nFailedItems: z.number(),
  progress: z.number(),
  finishedAt: z.coerce.date(),
  resultStatus: z.nativeEnum(BulkAsyncJobExecutionResultStatus),
});

class FinishedEventDataEntity
  extends Z.class(FinishedSchema.shape)
  implements WebsocketEventTostablePort
{
  getType(): WebsocketEventToastType {
    return mapBulkAsyncJobExecutionResultStatusToToastType(this.resultStatus);
  }

  getTitle(attempt: number): string {
    let title = `A operação em massa de "${mapBulkBankTransactionsOperationToName(this.operation)}" as transações bancárias foi finalizada.`;
    if (attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    switch (this.resultStatus) {
      case BulkAsyncJobExecutionResultStatus.EMPTY:
        return `Nenhuma transação bancária foi processada.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
        return `Das ${this.nTotalItems} transações bancárias previstas, todas foram processadas com sucesso.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
        return `Das ${this.nTotalItems} transações bancárias previstas, todas falharam.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
        return `Das ${this.nTotalItems} transações bancárias previstas, ${this.nSuccessItems} foram processadas com sucesso.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
        return `Das ${this.nTotalItems} transações bancárias previstas, ${this.nSuccessItems} foram processadas com sucesso e ${this.nFailedItems} falharam.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
        return `Das ${this.nTotalItems} transações bancárias previstas, ${this.nSuccessItems} foram processadas com sucesso e ${this.nFailedItems} falharam.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
        return `Das ${this.nTotalItems} transações bancárias previstas, ${this.nSuccessItems} foram processadas com sucesso e ${this.nFailedItems} falharam.`;
      case BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
        return `Nenhuma transação bancária foi processada.`;
    }
  }

  static build(input: z.infer<typeof FinishedSchema>) {
    return new FinishedEventDataEntity(input);
  }
}

export const BulkOperationForBankTransactionsWebsocketEvents = {
  Started: {
    eventName: "bulk-operation-for-bank-transactions-started",
    EventDataSchema: StartedSchema,
    EventDataEntity: StartedEventDataEntity,
  },
  Progress: {
    eventName: "bulk-operation-for-bank-transactions-progress",
    EventDataSchema: ProgressSchema,
    EventDataEntity: ProgressEventDataEntity,
  },
  Finished: {
    eventName: "bulk-operation-for-bank-transactions-finished",
    EventDataSchema: FinishedSchema,
    EventDataEntity: FinishedEventDataEntity,
  },
};

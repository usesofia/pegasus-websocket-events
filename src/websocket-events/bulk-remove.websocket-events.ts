import { BulkAsyncJobExecutionResultStatus, mapBulkAsyncJobExecutionResultStatusToToastType } from '@app/enums/bulk-async-job-result-status.enum';
import { WebsocketEventToastType, WebsocketEventTostablePort } from '@app/websocket-events/tostable.port';
import { z } from 'zod';
import { Z } from "zod-class";
import { Resource, mapResourceToName } from '../enums/resource.enum';

// Started
const StartedSchema = z.object({
  jobRequestId: z.string(),
  jobExecutionId: z.string(),
  nTotalItems: z.number(),
  resource: z.nativeEnum(Resource),
});

class StartedEventDataEntity extends Z.class(StartedSchema.shape) implements WebsocketEventTostablePort {
  getType(): WebsocketEventToastType {
    return WebsocketEventToastType.default;
  }

  getTitle(attempt: number): string {
    let title = `A remoção em massa de "${mapResourceToName(this.resource)}" foi iniciada...`;
    if (attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    return `Serão removidos ${this.nTotalItems} registros.`;
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
  resource: z.nativeEnum(Resource),
  nSuccessItems: z.number(),
  nFailedItems: z.number(),
  progress: z.number(),
});

class ProgressEventDataEntity extends Z.class(ProgressSchema.shape) implements WebsocketEventTostablePort {
  getType(): WebsocketEventToastType {
    return WebsocketEventToastType.loading;
  }

  getTitle(attempt: number): string {
    let title = `A remoção em massa de "${mapResourceToName(this.resource)}" está em progresso...`;
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
  resource: z.nativeEnum(Resource),
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
    let title = `A remoção em massa de "${mapResourceToName(this.resource)}" foi finalizada.`;
    if (attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    switch (this.resultStatus) {
      case BulkAsyncJobExecutionResultStatus.EMPTY:
        return `Nenhum registro foi removido.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
        return `Dos ${this.nTotalItems} previstos, todos foram removidos com sucesso.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
        return `Dos ${this.nTotalItems} previstos, todas as remoções falharam.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
        return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram removidos com sucesso.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
        return `Dos ${this.nTotalItems} previstos, ${this.nFailedItems} remoções falharam.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
        return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram removidos com sucesso e ${this.nFailedItems} falharam.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
        return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram removidos com sucesso e ${this.nFailedItems} falharam.`;
      case BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
        return `Nenhum registro foi processado para remoção.`;
    }
  }

  static build(
    input: z.infer<typeof FinishedSchema>,
  ) {
    return new FinishedEventDataEntity(input);
  }
}

export const BulkRemoveWebsocketEvents = {
  Started: {
    eventName: 'bulk-remove-started',
    EventDataSchema: StartedSchema,
    EventDataEntity: StartedEventDataEntity,
  },
  Progress: {
    eventName: 'bulk-remove-progress',
    EventDataSchema: ProgressSchema,
    EventDataEntity: ProgressEventDataEntity,
  },
  Finished: {
    eventName: 'bulk-remove-finished',
    EventDataSchema: FinishedSchema,
    EventDataEntity: FinishedEventDataEntity,
  },
};

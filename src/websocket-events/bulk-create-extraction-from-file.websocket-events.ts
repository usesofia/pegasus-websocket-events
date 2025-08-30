import {
  BulkAsyncJobExecutionResultStatus,
  mapBulkAsyncJobExecutionResultStatusToToastType,
} from "@app/enums/bulk-async-job-result-status.enum";
import {
  WebsocketEventToastType,
  WebsocketEventTostablePort,
} from "@app/websocket-events/tostable.port";
import { z } from "zod";
import { Z } from "zod-class";
import { Resource, mapResourceToName } from "../enums/resource.enum";

// Started
const StartedSchema = z.object({
  jobRequestId: z.string(),
  url: z.string(),
  signedUrl: z.string(),
  fileName: z.string(),
  fileType: z.enum(["pdf", "image", "audio", "csv", "excel"]),
  nTotalItems: z.number(),
  resource: z.nativeEnum(Resource),
});

class StartedEventDataEntity
  extends Z.class(StartedSchema.shape)
  implements WebsocketEventTostablePort
{
  getType(): WebsocketEventToastType {
    return WebsocketEventToastType.default;
  }

  getTitle(attempt: number): string {
    let title = `A extração de "${mapResourceToName(this.resource)}" do arquivo "${this.fileName}" foi iniciada...`;
    if (attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    return `Serão extraídos ${this.nTotalItems} registros.`;
  }

  static build(input: z.infer<typeof StartedSchema>) {
    return new StartedEventDataEntity(input);
  }
}

// Progress
const ProgressSchema = z.object({
  jobRequestId: z.string(),
  url: z.string(),
  signedUrl: z.string(),
  fileName: z.string(),
  fileType: z.enum(["pdf", "image", "audio", "csv", "excel"]),
  nTotalItems: z.number(),
  resource: z.nativeEnum(Resource),
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
    let title = `A extração de "${mapResourceToName(this.resource)}" do arquivo "${this.fileName}" está em progresso...`;
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
  url: z.string(),
  signedUrl: z.string(),
  fileName: z.string(),
  fileType: z.enum(["pdf", "image", "audio", "csv", "excel"]),
  nTotalItems: z.number(),
  resource: z.nativeEnum(Resource),
  nSuccessItems: z.number(),
  nFailedItems: z.number(),
  progress: z.number(),
  finishedAt: z.coerce.date(),
  resultStatus: z.nativeEnum(BulkAsyncJobExecutionResultStatus),
  csvFileSignedUrl: z.string(),
  fileId: z.string(),
});

class FinishedEventDataEntity
  extends Z.class(FinishedSchema.shape)
  implements WebsocketEventTostablePort
{
  getType(): WebsocketEventToastType {
    return mapBulkAsyncJobExecutionResultStatusToToastType(this.resultStatus);
  }

  getTitle(attempt: number): string {
    let title = `A extração de "${mapResourceToName(this.resource)}" do arquivo "${this.fileName}" foi finalizada.`;
    if (attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    switch (this.resultStatus) {
      case BulkAsyncJobExecutionResultStatus.EMPTY:
        return `Nenhum registro foi extraído.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
        return `Dos ${this.nTotalItems} registros previstos, todos foram extraídos com sucesso.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
        return `Dos ${this.nTotalItems} registros previstos, todas as extrações falharam.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
        return `Dos ${this.nTotalItems} registros previstos, ${this.nSuccessItems} foram extraídos com sucesso.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
        return `Dos ${this.nTotalItems} registros previstos, ${this.nFailedItems} extrações falharam.`; // Corrected message
      case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
        return `Dos ${this.nTotalItems} registros previstos, ${this.nSuccessItems} foram extraídos com sucesso e ${this.nFailedItems} falharam.`;
      case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
        return `Dos ${this.nTotalItems} registros previstos, ${this.nSuccessItems} foram extraídos com sucesso e ${this.nFailedItems} falharam.`;
      case BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
        return `Nenhum registro foi processado para extração.`;
    }
  }

  static build(input: z.infer<typeof FinishedSchema>) {
    return new FinishedEventDataEntity(input);
  }
}

// Failed
const FailedSchema = z.object({
  jobRequestId: z.string(),
  url: z.string(),
  signedUrl: z.string(),
  fileName: z.string(),
  fileType: z.enum(["pdf", "image", "audio", "csv", "excel"]),
  resource: z.nativeEnum(Resource),
  errorMessage: z.string(),
});

class FailedEventDataEntity
  extends Z.class(FailedSchema.shape)
  implements WebsocketEventTostablePort
{
  getType(): WebsocketEventToastType {
    return WebsocketEventToastType.error;
  }

  getTitle(attempt: number): string {
    let title = `A extração de "${mapResourceToName(this.resource)}" do arquivo "${this.fileName}" falhou`;
    if (attempt > 1) {
      title += ` (tentativa ${attempt})`;
    }
    return title;
  }

  getDescription(): string | undefined {
    return `${this.errorMessage}`;
  }

  static build(input: z.infer<typeof FailedSchema>) {
    return new FailedEventDataEntity(input);
  }
}

export const BulkCreateExtractionFromFileWebsocketEvents = {
  Started: {
    eventName: "bulk-create-extraction-from-file-started",
    EventDataSchema: StartedSchema,
    EventDataEntity: StartedEventDataEntity,
  },
  Progress: {
    eventName: "bulk-create-extraction-from-file-progress",
    EventDataSchema: ProgressSchema,
    EventDataEntity: ProgressEventDataEntity,
  },
  Finished: {
    eventName: "bulk-create-extraction-from-file-finished",
    EventDataSchema: FinishedSchema,
    EventDataEntity: FinishedEventDataEntity,
  },
  Failed: {
    eventName: "bulk-create-extraction-from-file-failed",
    EventDataSchema: FailedSchema,
    EventDataEntity: FailedEventDataEntity,
  },
};

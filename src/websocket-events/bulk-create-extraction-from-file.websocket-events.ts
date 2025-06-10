import { BulkAsyncJobExecutionResultStatus, mapBulkAsyncJobExecutionResultStatusToToastType } from '@app/enums/bulk-async-job-result-status.enum';
import { safeInstantiateEntity } from '@app/utils/entity.utils';
import { WebsocketEventToastType, WebsocketEventTostablePort } from '@app/websocket-events/tostable.port';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { Resource, mapResourceToName } from '../enums/resource.enum';

export class BulkCreateExtractionFromFileWebsocketEvents {
  static Started = class {
    static readonly eventName = 'bulk-create-extraction-from-file-started';
    static readonly EventDataSchema = z.object({
      jobRequestId: z.string(),
      url: z.string(),
      signedUrl: z.string(),
      fileName: z.string(),
      fileType: z.enum(['pdf', 'image', 'audio', 'csv', 'excel']),
      nTotalItems: z.number(),
      resource: z.nativeEnum(Resource),
    });
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
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

      static build(
        input: z.infer<
          typeof BulkCreateExtractionFromFileWebsocketEvents.Started.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          BulkCreateExtractionFromFileWebsocketEvents.Started.EventDataEntity,
          input,
        );
      }
    };
  };

  static Progress = class {
    static readonly eventName = 'bulk-create-extraction-from-file-progress';
    static readonly EventDataSchema = z.object({
      jobRequestId: z.string(),
      url: z.string(),
      signedUrl: z.string(),
      fileName: z.string(),
      fileType: z.enum(['pdf', 'image', 'audio', 'csv', 'excel']),
      nTotalItems: z.number(),
      resource: z.nativeEnum(Resource),
      nSuccessItems: z.number(),
      nFailedItems: z.number(),
      progress: z.number(),
    });
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
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

      static build(
        input: z.infer<
          typeof BulkCreateExtractionFromFileWebsocketEvents.Progress.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          BulkCreateExtractionFromFileWebsocketEvents.Progress.EventDataEntity,
          input,
        );
      }
    };
  };

  static Finished = class {
    static readonly eventName = 'bulk-create-extraction-from-file-finished';
    static readonly EventDataSchema = z.object({
      jobRequestId: z.string(),
      url: z.string(),
      signedUrl: z.string(),
      fileName: z.string(),
      fileType: z.enum(['pdf', 'image', 'audio', 'csv', 'excel']),
      nTotalItems: z.number(),
      resource: z.nativeEnum(Resource),
      nSuccessItems: z.number(),
      nFailedItems: z.number(),
      progress: z.number(),
      finishedAt: z.coerce.date(),
      resultStatus: z.nativeEnum(BulkAsyncJobExecutionResultStatus),
    });
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
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
            return `Dos ${this.nTotalItems} previstos, todos foram extraídos com sucesso.`;
          case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
            return `Dos ${this.nTotalItems} previstos, todas as extrações falharam.`;
          case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
            return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram extraídos com sucesso.`;
          case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
            return `Dos ${this.nTotalItems} previstos, ${this.nFailedItems} extrações falharam.`; // Corrected message
          case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
            return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram extraídos com sucesso e ${this.nFailedItems} falharam.`;
          case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
            return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram extraídos com sucesso e ${this.nFailedItems} falharam.`;
          case BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
            return `Nenhum registro foi processado para extração.`;
        }
      }

      static build(
        input: z.infer<
          typeof BulkCreateExtractionFromFileWebsocketEvents.Finished.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          BulkCreateExtractionFromFileWebsocketEvents.Finished.EventDataEntity,
          input,
        );
      }
    };
  };

  static Failed = class {
    static readonly eventName = 'bulk-create-extraction-from-file-failed';
    static readonly EventDataSchema = z.object({
      jobRequestId: z.string(),
      url: z.string(),
      signedUrl: z.string(),
      fileName: z.string(),
      fileType: z.enum(['pdf', 'image', 'audio', 'csv', 'excel']),
      resource: z.nativeEnum(Resource),
      errorMessage: z.string(),
    });
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
      getType(): WebsocketEventToastType {
        return WebsocketEventToastType.default;
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

      static build(
        input: z.infer<
          typeof BulkCreateExtractionFromFileWebsocketEvents.Failed.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          BulkCreateExtractionFromFileWebsocketEvents.Failed.EventDataEntity,
          input,
        );
      }
    };
  };
}

import { BulkAsyncJobExecutionResultStatus, mapBulkAsyncJobExecutionResultStatusToToastType } from '@app/enums/bulk-async-job-result-status.enum';
import { safeInstantiateEntity } from '@app/utils/entity.utils';
import { WebsocketEventToastType, WebsocketEventTostablePort } from '@app/websocket-events/tostable.port';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { ExportFileType, mapExportFileTypeToName } from '../enums/export-file-type.enum';
import { ExportResource, mapExportResourceToName } from '../enums/export-resource.enum';

export default class ExportRecordsWebsocketEvents {
  static Started = class {
    static readonly eventName = 'export-records-started';
    static readonly EventDataSchema = z.object({
      jobRequestId: z.string(),
      jobExecutionId: z.string(),
      nTotalItems: z.number(),
      resource: z.nativeEnum(ExportResource),
      fileType: z.nativeEnum(ExportFileType),
    });
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
      getType(): WebsocketEventToastType {
        return WebsocketEventToastType.default;
      }

      getTitle(attempt: number): string {
        let title = `A exportação de "${mapExportResourceToName(this.resource)}" para um arquivo ${mapExportFileTypeToName(this.fileType)} foi iniciada...`;
        if(attempt > 1) {
          title += ` (tentativa ${attempt})`;
        }
        return title;
      }

      getDescription(): string | undefined {
        return `Serão exportados ${this.nTotalItems} registros para um arquivo ${this.fileType}.`;
      }

      static build(
        input: z.infer<
          typeof ExportRecordsWebsocketEvents.Started.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          ExportRecordsWebsocketEvents.Started.EventDataEntity,
          input,
        );
      }
    };
  };

  static Progress = class {
    static readonly eventName = 'export-records-progress';
    static readonly EventDataSchema = z.object({
      jobRequestId: z.string(),
      jobExecutionId: z.string(),
      nTotalItems: z.number(),
      resource: z.nativeEnum(ExportResource),
      fileType: z.nativeEnum(ExportFileType),
      nSuccessItems: z.number(),
      nFailedItems: z.number(),
      progress: z.number(),
    });
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
      getType(): WebsocketEventToastType {
        return WebsocketEventToastType.loading;
      }

      getTitle(attempt: number): string {
        let title = `A exportação de "${mapExportResourceToName(this.resource)}" para um arquivo ${mapExportFileTypeToName(this.fileType)} está em progresso...`;
        if(attempt > 1) {
          title += ` (tentativa ${attempt})`;
        }
        return title;
      }

      getDescription(): string | undefined {
        return `${Math.round(this.progress * 100)}% (${this.nSuccessItems + this.nFailedItems}/${this.nTotalItems})`;
      }

      static build(
        input: z.infer<
          typeof ExportRecordsWebsocketEvents.Progress.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          ExportRecordsWebsocketEvents.Progress.EventDataEntity,
          input,
        );
      }
    };
  };

  static Finished = class {
    static readonly eventName = 'export-records-finished';
    static readonly EventDataSchema = z.object({
      jobRequestId: z.string(),
      jobExecutionId: z.string(),
      nTotalItems: z.number(),
      resource: z.nativeEnum(ExportResource),
      fileType: z.nativeEnum(ExportFileType),
      nSuccessItems: z.number(),
      nFailedItems: z.number(),
      progress: z.number(),
      finishedAt: z.coerce.date(),
      resultStatus: z.nativeEnum(BulkAsyncJobExecutionResultStatus),
      signedUrl: z.string().nullish(),
    });
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
      getType(): WebsocketEventToastType {
        return mapBulkAsyncJobExecutionResultStatusToToastType(this.resultStatus);
      }

      getTitle(attempt: number): string {
        let title = `A exportação de "${mapExportResourceToName(this.resource)}" para um arquivo ${mapExportFileTypeToName(this.fileType)} foi finalizada.`;
        if(attempt > 1) {
          title += ` (tentativa ${attempt})`;
        }
        return title;
      }

      getDescription(): string | undefined {
        switch (this.resultStatus) {
          case BulkAsyncJobExecutionResultStatus.EMPTY:
            return `Nenhum registro foi exportado.`;
          case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
            return `Dos ${this.nTotalItems} previstos, todos foram exportados com sucesso.`;
          case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
            return `Dos ${this.nTotalItems} previstos, todas as exportações falharam.`;
          case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
            return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram exportados com sucesso.`;
          case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
            return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram exportados com sucesso e ${this.nFailedItems} falharam.`;
          case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
            return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram exportados com sucesso e ${this.nFailedItems} falharam.`;
          case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
            return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram exportados com sucesso e ${this.nFailedItems} falharam.`;
          case BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
            return `Nenhum registro foi exportado.`;
        }
      }

      static build(
        input: z.infer<
          typeof ExportRecordsWebsocketEvents.Finished.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          ExportRecordsWebsocketEvents.Finished.EventDataEntity,
          input,
        );
      }
    };
  };
}

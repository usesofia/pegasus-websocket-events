import { BulkAsyncJobExecutionResultStatus, mapBulkAsyncJobExecutionResultStatusToToastType } from '@app/enums/bulk-async-job-result-status.enum';
import { safeInstantiateEntity } from '@app/utils/entity.utils';
import { WebsocketEventToastType, WebsocketEventTostablePort } from '@app/websocket-events/tostable.port';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export class OfxImportWebsocketEvents {
  static Started = class {
    static readonly eventName = 'ofx-import-started';
    static readonly EventDataSchema = z.object({
      jobRequestId: z.string(),
      jobExecutionId: z.string(),
      nTotalItems: z.number(),
      ofxFileName: z.string(),
      bankAccountName: z.string(),
    });
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
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
        input: z.infer<
          typeof OfxImportWebsocketEvents.Started.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          OfxImportWebsocketEvents.Started.EventDataEntity,
          input,
        );
      }
    };
  };

  static Progress = class {
    static readonly eventName = 'ofx-import-progress';
    static readonly EventDataSchema = z.object({
      jobRequestId: z.string(),
      jobExecutionId: z.string(),
      nTotalItems: z.number(),
      ofxFileName: z.string(),
      bankAccountName: z.string(),
      nSuccessItems: z.number(),
      nFailedItems: z.number(),
      progress: z.number(),
    });
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
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
        input: z.infer<
          typeof OfxImportWebsocketEvents.Progress.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          OfxImportWebsocketEvents.Progress.EventDataEntity,
          input,
        );
      }
    };
  };

  static Finished = class {
    static readonly eventName = 'ofx-import-finished';
    static readonly EventDataSchema = z.object({
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
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
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
        input: z.infer<
          typeof OfxImportWebsocketEvents.Finished.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          OfxImportWebsocketEvents.Finished.EventDataEntity,
          input,
        );
      }
    };
  };
} 
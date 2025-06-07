import { safeInstantiateEntity } from '@app/utils/entity.utils';
import { BulkAsyncJobExecutionResultStatus, mapBulkAsyncJobExecutionResultStatusToToastType } from '@app/websocket-events/bulk-async-job-result-status.enum';
import { WebsocketEventToastType, WebsocketEventTostablePort } from '@app/websocket-events/tostable.port';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export default class SyncBankTransactionsWebsocketEvents {
  static Started = class {
    static readonly eventName =
      'sync-bank-transactions-started';
    static readonly EventDataSchema = z.object({
      jobRequestId: z.string(),
      jobExecutionId: z.string(),
      nTotalItems: z.number(),
      accountName: z.string(),
      accountNumber: z.string(),
    });
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
      getType(): WebsocketEventToastType {
        return WebsocketEventToastType.default;
      }

      getTitle(): string {
        return `A sincronização das transações bancárias da conta "${this.accountName}" foi iniciada...`;
      }

      getDescription(): string | undefined {
        return `Serão sincronizadas ${this.nTotalItems} transações bancárias.`;
      }

      static build(
        input: z.infer<
          typeof SyncBankTransactionsWebsocketEvents.Started.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          SyncBankTransactionsWebsocketEvents.Started.EventDataEntity,
          input,
        );
      }
    };
  };

  static Progress = class {
    static readonly eventName =
      'sync-bank-transactions-progress';
    static readonly EventDataSchema = z.object({
      jobRequestId: z.string(),
      jobExecutionId: z.string(),
      nTotalItems: z.number(),
      accountName: z.string(),
      accountNumber: z.string(),
      nSuccessItems: z.number(),
      nFailedItems: z.number(),
      progress: z.number(),
    });
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
      getType(): WebsocketEventToastType {
        return WebsocketEventToastType.loading;
      }

      getTitle(): string {
        return `A sincronização das transações bancárias da conta "${this.accountName}" está em progresso...`;
      }

      getDescription(): string | undefined {
        return `${Math.round(this.progress * 100)}% (${this.nSuccessItems + this.nFailedItems}/${this.nTotalItems})`;
      }

      static build(
        input: z.infer<
          typeof SyncBankTransactionsWebsocketEvents.Progress.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          SyncBankTransactionsWebsocketEvents.Progress.EventDataEntity,
          input,
        );
      }
    };
  };

  static Finished = class {
    static readonly eventName =
      'sync-bank-transactions-finished';
    static readonly EventDataSchema = z.object({
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
    static EventDataEntity = class extends createZodDto(this.EventDataSchema) implements WebsocketEventTostablePort {
      getType(): WebsocketEventToastType {
        return mapBulkAsyncJobExecutionResultStatusToToastType(this.resultStatus);
      }

      getTitle(): string {
        return `A sincronização das transações bancárias da conta "${this.accountName}" foi finalizada.`;
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
        input: z.infer<
          typeof SyncBankTransactionsWebsocketEvents.Finished.EventDataSchema
        >,
      ) {
        return safeInstantiateEntity(
          SyncBankTransactionsWebsocketEvents.Finished.EventDataEntity,
          input,
        );
      }
    };
  };
}

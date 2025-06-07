import { WebsocketEventToastType } from "@app/websocket-events/tostable.port";

export enum BulkAsyncJobExecutionResultStatus {
  EMPTY = 'EMPTY',
  PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED = 'PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED',
  PROCESSED_ALL_ITEMS_AND_ALL_FAILED = 'PROCESSED_ALL_ITEMS_AND_ALL_FAILED',
  PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED = 'PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED',
  PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED = 'PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED',
  PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED = 'PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED',
  PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED = 'PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED',
  NO_ITEMS_PROCESSED = 'NO_ITEMS_PROCESSED',
}

export function mapBulkAsyncJobExecutionResultStatusToToastType(resultStatus: BulkAsyncJobExecutionResultStatus): WebsocketEventToastType {
  switch (resultStatus) {
    case BulkAsyncJobExecutionResultStatus.EMPTY:
      return WebsocketEventToastType.default;
    case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
      return WebsocketEventToastType.success;
    case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
      return WebsocketEventToastType.error;
    case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
      return WebsocketEventToastType.warning;
    case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
      return WebsocketEventToastType.error;
    case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
      return WebsocketEventToastType.warning;
    case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
      return WebsocketEventToastType.warning;
    case BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
      return WebsocketEventToastType.error;
  }
}

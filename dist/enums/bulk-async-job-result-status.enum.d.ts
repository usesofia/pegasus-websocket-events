import { WebsocketEventToastType } from "../websocket-events/tostable.port";
export declare enum BulkAsyncJobExecutionResultStatus {
    EMPTY = "EMPTY",
    PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED = "PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED",
    PROCESSED_ALL_ITEMS_AND_ALL_FAILED = "PROCESSED_ALL_ITEMS_AND_ALL_FAILED",
    PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED = "PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED",
    PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED = "PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED",
    PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED = "PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED",
    PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED = "PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED",
    NO_ITEMS_PROCESSED = "NO_ITEMS_PROCESSED"
}
export declare function mapBulkAsyncJobExecutionResultStatusToToastType(resultStatus: BulkAsyncJobExecutionResultStatus): WebsocketEventToastType;
export declare function buildBulkAsyncJobExecutionResultStatus({ nTotalItems, nSuccessItems, nFailedItems, }: {
    nTotalItems: number;
    nSuccessItems: number;
    nFailedItems: number;
}): BulkAsyncJobExecutionResultStatus;

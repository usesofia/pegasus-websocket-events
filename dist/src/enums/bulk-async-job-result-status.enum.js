"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkAsyncJobExecutionResultStatus = void 0;
exports.mapBulkAsyncJobExecutionResultStatusToToastType = mapBulkAsyncJobExecutionResultStatusToToastType;
const tostable_port_1 = require("../websocket-events/tostable.port");
var BulkAsyncJobExecutionResultStatus;
(function (BulkAsyncJobExecutionResultStatus) {
    BulkAsyncJobExecutionResultStatus["EMPTY"] = "EMPTY";
    BulkAsyncJobExecutionResultStatus["PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED"] = "PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED";
    BulkAsyncJobExecutionResultStatus["PROCESSED_ALL_ITEMS_AND_ALL_FAILED"] = "PROCESSED_ALL_ITEMS_AND_ALL_FAILED";
    BulkAsyncJobExecutionResultStatus["PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED"] = "PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED";
    BulkAsyncJobExecutionResultStatus["PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED"] = "PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED";
    BulkAsyncJobExecutionResultStatus["PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED"] = "PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED";
    BulkAsyncJobExecutionResultStatus["PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED"] = "PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED";
    BulkAsyncJobExecutionResultStatus["NO_ITEMS_PROCESSED"] = "NO_ITEMS_PROCESSED";
})(BulkAsyncJobExecutionResultStatus || (exports.BulkAsyncJobExecutionResultStatus = BulkAsyncJobExecutionResultStatus = {}));
function mapBulkAsyncJobExecutionResultStatusToToastType(resultStatus) {
    switch (resultStatus) {
        case BulkAsyncJobExecutionResultStatus.EMPTY:
            return tostable_port_1.WebsocketEventToastType.default;
        case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
            return tostable_port_1.WebsocketEventToastType.success;
        case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
            return tostable_port_1.WebsocketEventToastType.error;
        case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
            return tostable_port_1.WebsocketEventToastType.warning;
        case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
            return tostable_port_1.WebsocketEventToastType.error;
        case BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
            return tostable_port_1.WebsocketEventToastType.warning;
        case BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
            return tostable_port_1.WebsocketEventToastType.warning;
        case BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
            return tostable_port_1.WebsocketEventToastType.error;
    }
}
//# sourceMappingURL=bulk-async-job-result-status.enum.js.map
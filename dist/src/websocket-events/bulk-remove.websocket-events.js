"use strict";
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const bulk_async_job_result_status_enum_1 = require("../enums/bulk-async-job-result-status.enum");
const entity_utils_1 = require("../utils/entity.utils");
const tostable_port_1 = require("../websocket-events/tostable.port");
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
const resource_enum_1 = require("../enums/resource.enum");
class BulkRemoveWebsocketEvents {
}
BulkRemoveWebsocketEvents.Started = (_a = class {
    },
    __setFunctionName(_a, "Started"),
    _a.eventName = 'bulk-remove-started',
    _a.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        nTotalItems: zod_1.z.number(),
        resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
    }),
    _a.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_a.EventDataSchema) {
        getType() {
            return tostable_port_1.WebsocketEventToastType.default;
        }
        getTitle(attempt) {
            let title = `A remoção em massa de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" foi iniciada...`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            return `Serão removidos ${this.nTotalItems} registros.`;
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(BulkRemoveWebsocketEvents.Started.EventDataEntity, input);
        }
    },
    _a);
BulkRemoveWebsocketEvents.Progress = (_b = class {
    },
    __setFunctionName(_b, "Progress"),
    _b.eventName = 'bulk-remove-progress',
    _b.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        nTotalItems: zod_1.z.number(),
        resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
        nSuccessItems: zod_1.z.number(),
        nFailedItems: zod_1.z.number(),
        progress: zod_1.z.number(),
    }),
    _b.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_b.EventDataSchema) {
        getType() {
            return tostable_port_1.WebsocketEventToastType.loading;
        }
        getTitle(attempt) {
            let title = `A remoção em massa de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" está em progresso...`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            return `${Math.round(this.progress * 100)}% (${this.nSuccessItems + this.nFailedItems}/${this.nTotalItems})`;
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(BulkRemoveWebsocketEvents.Progress.EventDataEntity, input);
        }
    },
    _b);
BulkRemoveWebsocketEvents.Finished = (_c = class {
    },
    __setFunctionName(_c, "Finished"),
    _c.eventName = 'bulk-remove-finished',
    _c.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        nTotalItems: zod_1.z.number(),
        resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
        nSuccessItems: zod_1.z.number(),
        nFailedItems: zod_1.z.number(),
        progress: zod_1.z.number(),
        finishedAt: zod_1.z.coerce.date(),
        resultStatus: zod_1.z.nativeEnum(bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus),
    }),
    _c.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_c.EventDataSchema) {
        getType() {
            return (0, bulk_async_job_result_status_enum_1.mapBulkAsyncJobExecutionResultStatusToToastType)(this.resultStatus);
        }
        getTitle(attempt) {
            let title = `A remoção em massa de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" foi finalizada.`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            switch (this.resultStatus) {
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.EMPTY:
                    return `Nenhum registro foi removido.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
                    return `Dos ${this.nTotalItems} previstos, todos foram removidos com sucesso.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
                    return `Dos ${this.nTotalItems} previstos, todas as remoções falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram removidos com sucesso.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nFailedItems} remoções falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram removidos com sucesso e ${this.nFailedItems} falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram removidos com sucesso e ${this.nFailedItems} falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
                    return `Nenhum registro foi processado para remoção.`;
            }
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(BulkRemoveWebsocketEvents.Finished.EventDataEntity, input);
        }
    },
    _c);
exports.default = BulkRemoveWebsocketEvents;
//# sourceMappingURL=bulk-remove.websocket-events.js.map
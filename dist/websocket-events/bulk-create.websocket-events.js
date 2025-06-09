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
class BulkCreateWebsocketEvents {
}
BulkCreateWebsocketEvents.Started = (_a = class {
    },
    __setFunctionName(_a, "Started"),
    _a.eventName = 'bulk-create-started',
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
            let title = `A criação em massa de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" foi iniciada...`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            return `Serão criados ${this.nTotalItems} registros.`;
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(BulkCreateWebsocketEvents.Started.EventDataEntity, input);
        }
    },
    _a);
BulkCreateWebsocketEvents.Progress = (_b = class {
    },
    __setFunctionName(_b, "Progress"),
    _b.eventName = 'bulk-create-progress',
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
            let title = `A criação em massa de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" está em progresso...`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            return `${Math.round(this.progress * 100)}% (${this.nSuccessItems + this.nFailedItems}/${this.nTotalItems})`;
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(BulkCreateWebsocketEvents.Progress.EventDataEntity, input);
        }
    },
    _b);
BulkCreateWebsocketEvents.Finished = (_c = class {
    },
    __setFunctionName(_c, "Finished"),
    _c.eventName = 'bulk-create-finished',
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
            let title = `A criação em massa de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" foi finalizada.`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            switch (this.resultStatus) {
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.EMPTY:
                    return `Nenhum registro foi criado.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
                    return `Dos ${this.nTotalItems} previstos, todos foram criados com sucesso.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
                    return `Dos ${this.nTotalItems} previstos, todas as criações falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram criados com sucesso.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nFailedItems} criações falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram criados com sucesso e ${this.nFailedItems} falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram criados com sucesso e ${this.nFailedItems} falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
                    return `Nenhum registro foi processado para criação.`;
            }
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(BulkCreateWebsocketEvents.Finished.EventDataEntity, input);
        }
    },
    _c);
exports.default = BulkCreateWebsocketEvents;
//# sourceMappingURL=bulk-create.websocket-events.js.map
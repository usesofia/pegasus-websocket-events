"use strict";
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkCreateExtractionFromFileWebsocketEvents = void 0;
const bulk_async_job_result_status_enum_1 = require("../enums/bulk-async-job-result-status.enum");
const entity_utils_1 = require("../utils/entity.utils");
const tostable_port_1 = require("../websocket-events/tostable.port");
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
const resource_enum_1 = require("../enums/resource.enum");
class BulkCreateExtractionFromFileWebsocketEvents {
}
exports.BulkCreateExtractionFromFileWebsocketEvents = BulkCreateExtractionFromFileWebsocketEvents;
BulkCreateExtractionFromFileWebsocketEvents.Started = (_a = class {
    },
    __setFunctionName(_a, "Started"),
    _a.eventName = 'bulk-create-extraction-from-file-started',
    _a.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        url: zod_1.z.string(),
        signedUrl: zod_1.z.string(),
        fileName: zod_1.z.string(),
        fileType: zod_1.z.enum(['pdf', 'image', 'audio', 'csv', 'excel']),
        nTotalItems: zod_1.z.number(),
        resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
    }),
    _a.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_a.EventDataSchema) {
        getType() {
            return tostable_port_1.WebsocketEventToastType.default;
        }
        getTitle(attempt) {
            let title = `A extração de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" do arquivo "${this.fileName}" foi iniciada...`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            return `Serão extraídos ${this.nTotalItems} registros.`;
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(BulkCreateExtractionFromFileWebsocketEvents.Started.EventDataEntity, input);
        }
    },
    _a);
BulkCreateExtractionFromFileWebsocketEvents.Progress = (_b = class {
    },
    __setFunctionName(_b, "Progress"),
    _b.eventName = 'bulk-create-extraction-from-file-progress',
    _b.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        url: zod_1.z.string(),
        signedUrl: zod_1.z.string(),
        fileName: zod_1.z.string(),
        fileType: zod_1.z.enum(['pdf', 'image', 'audio', 'csv', 'excel']),
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
            let title = `A extração de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" do arquivo "${this.fileName}" está em progresso...`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            return `${Math.round(this.progress * 100)}% (${this.nSuccessItems + this.nFailedItems}/${this.nTotalItems})`;
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(BulkCreateExtractionFromFileWebsocketEvents.Progress.EventDataEntity, input);
        }
    },
    _b);
BulkCreateExtractionFromFileWebsocketEvents.Finished = (_c = class {
    },
    __setFunctionName(_c, "Finished"),
    _c.eventName = 'bulk-create-extraction-from-file-finished',
    _c.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        url: zod_1.z.string(),
        signedUrl: zod_1.z.string(),
        fileName: zod_1.z.string(),
        fileType: zod_1.z.enum(['pdf', 'image', 'audio', 'csv', 'excel']),
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
            let title = `A extração de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" do arquivo "${this.fileName}" foi finalizada.`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            switch (this.resultStatus) {
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.EMPTY:
                    return `Nenhum registro foi extraído.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
                    return `Dos ${this.nTotalItems} previstos, todos foram extraídos com sucesso.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
                    return `Dos ${this.nTotalItems} previstos, todas as extrações falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram extraídos com sucesso.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nFailedItems} extrações falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram extraídos com sucesso e ${this.nFailedItems} falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram extraídos com sucesso e ${this.nFailedItems} falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
                    return `Nenhum registro foi processado para extração.`;
            }
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(BulkCreateExtractionFromFileWebsocketEvents.Finished.EventDataEntity, input);
        }
    },
    _c);
BulkCreateExtractionFromFileWebsocketEvents.Failed = (_d = class {
    },
    __setFunctionName(_d, "Failed"),
    _d.eventName = 'bulk-create-extraction-from-file-failed',
    _d.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        url: zod_1.z.string(),
        signedUrl: zod_1.z.string(),
        fileName: zod_1.z.string(),
        fileType: zod_1.z.enum(['pdf', 'image', 'audio', 'csv', 'excel']),
        resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
        errorMessage: zod_1.z.string(),
    }),
    _d.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_d.EventDataSchema) {
        getType() {
            return tostable_port_1.WebsocketEventToastType.default;
        }
        getTitle(attempt) {
            let title = `A extração de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" do arquivo "${this.fileName}" falhou`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            return `${this.errorMessage}`;
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(BulkCreateExtractionFromFileWebsocketEvents.Failed.EventDataEntity, input);
        }
    },
    _d);
//# sourceMappingURL=bulk-create-extraction-from-file.websocket-events.js.map
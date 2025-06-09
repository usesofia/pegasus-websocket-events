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
const file_type_enum_1 = require("../enums/file-type.enum");
const resource_enum_1 = require("../enums/resource.enum");
class ExportRecordsWebsocketEvents {
}
ExportRecordsWebsocketEvents.Started = (_a = class {
    },
    __setFunctionName(_a, "Started"),
    _a.eventName = 'export-records-started',
    _a.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        nTotalItems: zod_1.z.number(),
        resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
        fileType: zod_1.z.nativeEnum(file_type_enum_1.FileType),
    }),
    _a.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_a.EventDataSchema) {
        getType() {
            return tostable_port_1.WebsocketEventToastType.default;
        }
        getTitle(attempt) {
            let title = `A exportação de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" para um arquivo ${(0, file_type_enum_1.mapFileTypeToName)(this.fileType)} foi iniciada...`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            return `Serão exportados ${this.nTotalItems} registros para um arquivo ${this.fileType}.`;
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(ExportRecordsWebsocketEvents.Started.EventDataEntity, input);
        }
    },
    _a);
ExportRecordsWebsocketEvents.Progress = (_b = class {
    },
    __setFunctionName(_b, "Progress"),
    _b.eventName = 'export-records-progress',
    _b.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        nTotalItems: zod_1.z.number(),
        resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
        fileType: zod_1.z.nativeEnum(file_type_enum_1.FileType),
        nSuccessItems: zod_1.z.number(),
        nFailedItems: zod_1.z.number(),
        progress: zod_1.z.number(),
    }),
    _b.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_b.EventDataSchema) {
        getType() {
            return tostable_port_1.WebsocketEventToastType.loading;
        }
        getTitle(attempt) {
            let title = `A exportação de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" para um arquivo ${(0, file_type_enum_1.mapFileTypeToName)(this.fileType)} está em progresso...`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            return `${Math.round(this.progress * 100)}% (${this.nSuccessItems + this.nFailedItems}/${this.nTotalItems})`;
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(ExportRecordsWebsocketEvents.Progress.EventDataEntity, input);
        }
    },
    _b);
ExportRecordsWebsocketEvents.Finished = (_c = class {
    },
    __setFunctionName(_c, "Finished"),
    _c.eventName = 'export-records-finished',
    _c.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        nTotalItems: zod_1.z.number(),
        resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
        fileType: zod_1.z.nativeEnum(file_type_enum_1.FileType),
        nSuccessItems: zod_1.z.number(),
        nFailedItems: zod_1.z.number(),
        progress: zod_1.z.number(),
        finishedAt: zod_1.z.coerce.date(),
        resultStatus: zod_1.z.nativeEnum(bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus),
        signedUrl: zod_1.z.string().nullish(),
    }),
    _c.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_c.EventDataSchema) {
        getType() {
            return (0, bulk_async_job_result_status_enum_1.mapBulkAsyncJobExecutionResultStatusToToastType)(this.resultStatus);
        }
        getTitle(attempt) {
            let title = `A exportação de "${(0, resource_enum_1.mapResourceToName)(this.resource)}" para um arquivo ${(0, file_type_enum_1.mapFileTypeToName)(this.fileType)} foi finalizada.`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            switch (this.resultStatus) {
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.EMPTY:
                    return `Nenhum registro foi exportado.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
                    return `Dos ${this.nTotalItems} previstos, todos foram exportados com sucesso.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
                    return `Dos ${this.nTotalItems} previstos, todas as exportações falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram exportados com sucesso.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram exportados com sucesso e ${this.nFailedItems} falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram exportados com sucesso e ${this.nFailedItems} falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
                    return `Dos ${this.nTotalItems} previstos, ${this.nSuccessItems} foram exportados com sucesso e ${this.nFailedItems} falharam.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
                    return `Nenhum registro foi exportado.`;
            }
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(ExportRecordsWebsocketEvents.Finished.EventDataEntity, input);
        }
    },
    _c);
exports.default = ExportRecordsWebsocketEvents;
//# sourceMappingURL=export-records.websocket-events.js.map
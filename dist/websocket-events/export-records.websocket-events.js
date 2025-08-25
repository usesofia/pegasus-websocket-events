"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportRecordsWebsocketEvents = void 0;
const bulk_async_job_result_status_enum_1 = require("../enums/bulk-async-job-result-status.enum");
const tostable_port_1 = require("../websocket-events/tostable.port");
const zod_1 = require("zod");
const zod_class_1 = require("zod-class");
const file_type_enum_1 = require("../enums/file-type.enum");
const resource_enum_1 = require("../enums/resource.enum");
const StartedSchema = zod_1.z.object({
    jobRequestId: zod_1.z.string(),
    jobExecutionId: zod_1.z.string(),
    nTotalItems: zod_1.z.number(),
    resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
    fileType: zod_1.z.nativeEnum(file_type_enum_1.FileType),
});
class StartedEventDataEntity extends zod_class_1.Z.class(StartedSchema.shape) {
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
        return new StartedEventDataEntity(input);
    }
}
const ProgressSchema = zod_1.z.object({
    jobRequestId: zod_1.z.string(),
    jobExecutionId: zod_1.z.string(),
    nTotalItems: zod_1.z.number(),
    resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
    fileType: zod_1.z.nativeEnum(file_type_enum_1.FileType),
    nSuccessItems: zod_1.z.number(),
    nFailedItems: zod_1.z.number(),
    progress: zod_1.z.number(),
});
class ProgressEventDataEntity extends zod_class_1.Z.class(ProgressSchema.shape) {
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
        return new ProgressEventDataEntity(input);
    }
}
const FinishedSchema = zod_1.z.object({
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
});
class FinishedEventDataEntity extends zod_class_1.Z.class(FinishedSchema.shape) {
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
                return `Dos ${this.nTotalItems} registros previstos, todos foram exportados com sucesso.`;
            case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
                return `Dos ${this.nTotalItems} registros previstos, todas as exportações falharam.`;
            case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
                return `Dos ${this.nTotalItems} registros previstos, ${this.nSuccessItems} foram exportados com sucesso.`;
            case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
                return `Dos ${this.nTotalItems} registros previstos, ${this.nSuccessItems} foram exportados com sucesso e ${this.nFailedItems} falharam.`;
            case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
                return `Dos ${this.nTotalItems} registros previstos, ${this.nSuccessItems} foram exportados com sucesso e ${this.nFailedItems} falharam.`;
            case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
                return `Dos ${this.nTotalItems} registros previstos, ${this.nSuccessItems} foram exportados com sucesso e ${this.nFailedItems} falharam.`;
            case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
                return `Nenhum registro foi exportado.`;
        }
    }
    static build(input) {
        return new FinishedEventDataEntity(input);
    }
}
exports.ExportRecordsWebsocketEvents = {
    Started: {
        eventName: "export-records-started",
        EventDataSchema: StartedSchema,
        EventDataEntity: StartedEventDataEntity,
    },
    Progress: {
        eventName: "export-records-progress",
        EventDataSchema: ProgressSchema,
        EventDataEntity: ProgressEventDataEntity,
    },
    Finished: {
        eventName: "export-records-finished",
        EventDataSchema: FinishedSchema,
        EventDataEntity: FinishedEventDataEntity,
    },
};
//# sourceMappingURL=export-records.websocket-events.js.map
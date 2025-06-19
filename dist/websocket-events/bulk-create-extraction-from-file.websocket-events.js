"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkCreateExtractionFromFileWebsocketEvents = void 0;
const bulk_async_job_result_status_enum_1 = require("../enums/bulk-async-job-result-status.enum");
const tostable_port_1 = require("../websocket-events/tostable.port");
const zod_1 = require("zod");
const zod_class_1 = require("zod-class");
const resource_enum_1 = require("../enums/resource.enum");
const StartedSchema = zod_1.z.object({
    jobRequestId: zod_1.z.string(),
    url: zod_1.z.string(),
    signedUrl: zod_1.z.string(),
    fileName: zod_1.z.string(),
    fileType: zod_1.z.enum(['pdf', 'image', 'audio', 'csv', 'excel']),
    nTotalItems: zod_1.z.number(),
    resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
});
class StartedEventDataEntity extends zod_class_1.Z.class(StartedSchema.shape) {
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
        return new StartedEventDataEntity(input);
    }
}
const ProgressSchema = zod_1.z.object({
    jobRequestId: zod_1.z.string(),
    url: zod_1.z.string(),
    signedUrl: zod_1.z.string(),
    fileName: zod_1.z.string(),
    fileType: zod_1.z.enum(['pdf', 'image', 'audio', 'csv', 'excel']),
    nTotalItems: zod_1.z.number(),
    resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
    nSuccessItems: zod_1.z.number(),
    nFailedItems: zod_1.z.number(),
    progress: zod_1.z.number(),
});
class ProgressEventDataEntity extends zod_class_1.Z.class(ProgressSchema.shape) {
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
        return new ProgressEventDataEntity(input);
    }
}
const FinishedSchema = zod_1.z.object({
    jobRequestId: zod_1.z.string(),
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
    csvFileSignedUrl: zod_1.z.string(),
    fileId: zod_1.z.string(),
});
class FinishedEventDataEntity extends zod_class_1.Z.class(FinishedSchema.shape) {
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
        return new FinishedEventDataEntity(input);
    }
}
const FailedSchema = zod_1.z.object({
    jobRequestId: zod_1.z.string(),
    url: zod_1.z.string(),
    signedUrl: zod_1.z.string(),
    fileName: zod_1.z.string(),
    fileType: zod_1.z.enum(['pdf', 'image', 'audio', 'csv', 'excel']),
    resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
    errorMessage: zod_1.z.string(),
});
class FailedEventDataEntity extends zod_class_1.Z.class(FailedSchema.shape) {
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
        return new FailedEventDataEntity(input);
    }
}
exports.BulkCreateExtractionFromFileWebsocketEvents = {
    Started: {
        eventName: 'bulk-create-extraction-from-file-started',
        EventDataSchema: StartedSchema,
        EventDataEntity: StartedEventDataEntity,
    },
    Progress: {
        eventName: 'bulk-create-extraction-from-file-progress',
        EventDataSchema: ProgressSchema,
        EventDataEntity: ProgressEventDataEntity,
    },
    Finished: {
        eventName: 'bulk-create-extraction-from-file-finished',
        EventDataSchema: FinishedSchema,
        EventDataEntity: FinishedEventDataEntity,
    },
    Failed: {
        eventName: 'bulk-create-extraction-from-file-failed',
        EventDataSchema: FailedSchema,
        EventDataEntity: FailedEventDataEntity,
    },
};
//# sourceMappingURL=bulk-create-extraction-from-file.websocket-events.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkCreateWebsocketEvents = void 0;
const bulk_async_job_result_status_enum_1 = require("../enums/bulk-async-job-result-status.enum");
const tostable_port_1 = require("../websocket-events/tostable.port");
const zod_1 = require("zod");
const zod_class_1 = require("zod-class");
const resource_enum_1 = require("../enums/resource.enum");
const StartedSchema = zod_1.z.object({
    jobRequestId: zod_1.z.string(),
    jobExecutionId: zod_1.z.string(),
    nTotalItems: zod_1.z.number(),
    resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
});
class StartedEventDataEntity extends zod_class_1.Z.class(StartedSchema.shape) {
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
        return new StartedEventDataEntity(input);
    }
}
const ProgressSchema = zod_1.z.object({
    jobRequestId: zod_1.z.string(),
    jobExecutionId: zod_1.z.string(),
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
        return new ProgressEventDataEntity(input);
    }
}
const FinishedSchema = zod_1.z.object({
    jobRequestId: zod_1.z.string(),
    jobExecutionId: zod_1.z.string(),
    nTotalItems: zod_1.z.number(),
    resource: zod_1.z.nativeEnum(resource_enum_1.Resource),
    nSuccessItems: zod_1.z.number(),
    nFailedItems: zod_1.z.number(),
    progress: zod_1.z.number(),
    finishedAt: zod_1.z.coerce.date(),
    resultStatus: zod_1.z.nativeEnum(bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus),
});
class FinishedEventDataEntity extends zod_class_1.Z.class(FinishedSchema.shape) {
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
        return new FinishedEventDataEntity(input);
    }
}
exports.BulkCreateWebsocketEvents = {
    Started: {
        eventName: "bulk-create-started",
        EventDataSchema: StartedSchema,
        EventDataEntity: StartedEventDataEntity,
    },
    Progress: {
        eventName: "bulk-create-progress",
        EventDataSchema: ProgressSchema,
        EventDataEntity: ProgressEventDataEntity,
    },
    Finished: {
        eventName: "bulk-create-finished",
        EventDataSchema: FinishedSchema,
        EventDataEntity: FinishedEventDataEntity,
    },
};
//# sourceMappingURL=bulk-create.websocket-events.js.map
"use strict";
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfxImportWebsocketEvents = void 0;
const bulk_async_job_result_status_enum_1 = require("../enums/bulk-async-job-result-status.enum");
const entity_utils_1 = require("../utils/entity.utils");
const tostable_port_1 = require("../websocket-events/tostable.port");
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
class OfxImportWebsocketEvents {
}
exports.OfxImportWebsocketEvents = OfxImportWebsocketEvents;
OfxImportWebsocketEvents.Started = (_a = class {
    },
    __setFunctionName(_a, "Started"),
    _a.eventName = 'ofx-import-started',
    _a.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        nTotalItems: zod_1.z.number(),
        ofxFileName: zod_1.z.string(),
        bankAccountName: zod_1.z.string(),
    }),
    _a.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_a.EventDataSchema) {
        getType() {
            return tostable_port_1.WebsocketEventToastType.default;
        }
        getTitle(attempt) {
            let title = `A importação do arquivo OFX "${this.ofxFileName}" para a conta "${this.bankAccountName}" foi iniciada...`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            return `Serão importadas ${this.nTotalItems} transações.`;
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(OfxImportWebsocketEvents.Started.EventDataEntity, input);
        }
    },
    _a);
OfxImportWebsocketEvents.Progress = (_b = class {
    },
    __setFunctionName(_b, "Progress"),
    _b.eventName = 'ofx-import-progress',
    _b.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        nTotalItems: zod_1.z.number(),
        ofxFileName: zod_1.z.string(),
        bankAccountName: zod_1.z.string(),
        nSuccessItems: zod_1.z.number(),
        nFailedItems: zod_1.z.number(),
        progress: zod_1.z.number(),
    }),
    _b.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_b.EventDataSchema) {
        getType() {
            return tostable_port_1.WebsocketEventToastType.loading;
        }
        getTitle(attempt) {
            let title = `A importação do arquivo OFX "${this.ofxFileName}" para a conta "${this.bankAccountName}" está em progresso...`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            return `${Math.round(this.progress * 100)}% (${this.nSuccessItems + this.nFailedItems}/${this.nTotalItems})`;
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(OfxImportWebsocketEvents.Progress.EventDataEntity, input);
        }
    },
    _b);
OfxImportWebsocketEvents.Finished = (_c = class {
    },
    __setFunctionName(_c, "Finished"),
    _c.eventName = 'ofx-import-finished',
    _c.EventDataSchema = zod_1.z.object({
        jobRequestId: zod_1.z.string(),
        jobExecutionId: zod_1.z.string(),
        nTotalItems: zod_1.z.number(),
        ofxFileName: zod_1.z.string(),
        bankAccountName: zod_1.z.string(),
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
            let title = `A importação do arquivo OFX "${this.ofxFileName}" para a conta "${this.bankAccountName}" foi finalizada.`;
            if (attempt > 1) {
                title += ` (tentativa ${attempt})`;
            }
            return title;
        }
        getDescription() {
            switch (this.resultStatus) {
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.EMPTY:
                    return `Nenhuma transação foi importada do arquivo "${this.ofxFileName}".`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_SUCCESSED:
                    return `Do arquivo "${this.ofxFileName}", todas as ${this.nTotalItems} transações previstas foram importadas com sucesso.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_ALL_FAILED:
                    return `Do arquivo "${this.ofxFileName}", todas as ${this.nTotalItems} transações previstas falharam ao importar.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_SUCCESSED:
                    return `Do arquivo "${this.ofxFileName}", ${this.nSuccessItems} de ${this.nTotalItems} transações previstas foram importadas com sucesso.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_ALL_OF_THEM_FAILED:
                    return `Do arquivo "${this.ofxFileName}", ${this.nFailedItems} de ${this.nTotalItems} transações previstas falharam ao importar.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_ALL_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
                    return `Do arquivo "${this.ofxFileName}", ${this.nSuccessItems} transações foram importadas com sucesso e ${this.nFailedItems} falharam, de um total de ${this.nTotalItems} previstas.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.PROCESSED_PART_OF_THE_ITEMS_AND_SOME_SUCCESSED_AND_SOME_FAILED:
                    return `Do arquivo "${this.ofxFileName}", ${this.nSuccessItems} transações foram importadas com sucesso e ${this.nFailedItems} falharam, de um total de ${this.nTotalItems} previstas.`;
                case bulk_async_job_result_status_enum_1.BulkAsyncJobExecutionResultStatus.NO_ITEMS_PROCESSED:
                    return `Nenhuma transação do arquivo "${this.ofxFileName}" foi processada.`;
            }
        }
        static build(input) {
            return (0, entity_utils_1.safeInstantiateEntity)(OfxImportWebsocketEvents.Finished.EventDataEntity, input);
        }
    },
    _c);
//# sourceMappingURL=ofx-import.websocket-events.js.map
"use strict";
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
const entity_utils_1 = require("../src/utils/entity.utils");
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
class ContactsWebsocketEvents {
}
ContactsWebsocketEvents.BulkCreateExtractionForWebApp = (_a = class {
    },
    __setFunctionName(_a, "BulkCreateExtractionForWebApp"),
    _a.InvalidFileIntent = (_b = class {
        },
        __setFunctionName(_b, "InvalidFileIntent"),
        _b.eventName = 'contacts-bulk-create-extraction-for-web-app-invalid-file-intent',
        _b.EventDataSchema = zod_1.z.object({
            jobRequestId: zod_1.z.string(),
            ordinalConfidenceScore: zod_1.z.string(),
            reason: zod_1.z.string(),
        }),
        _b.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_b.EventDataSchema) {
            static build(input) {
                return (0, entity_utils_1.safeInstantiateEntity)(ContactsWebsocketEvents.BulkCreateExtractionForWebApp.InvalidFileIntent.EventDataEntity, input);
            }
        },
        _b),
    _a.Failed = (_c = class {
        },
        __setFunctionName(_c, "Failed"),
        _c.eventName = 'contacts-bulk-create-extraction-for-web-app-failed',
        _c.EventDataSchema = zod_1.z.object({
            jobRequestId: zod_1.z.string(),
            message: zod_1.z.string(),
        }),
        _c.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_c.EventDataSchema) {
            static build(input) {
                return (0, entity_utils_1.safeInstantiateEntity)(ContactsWebsocketEvents.BulkCreateExtractionForWebApp.Failed.EventDataEntity, input);
            }
        },
        _c),
    _a.StartProcessing = (_d = class {
        },
        __setFunctionName(_d, "StartProcessing"),
        _d.eventName = 'contacts-bulk-create-extraction-for-web-app-start-processing',
        _d.EventDataSchema = zod_1.z.object({
            jobRequestId: zod_1.z.string(),
            nContacts: zod_1.z.number(),
        }),
        _d.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_d.EventDataSchema) {
            static build(input) {
                return (0, entity_utils_1.safeInstantiateEntity)(ContactsWebsocketEvents.BulkCreateExtractionForWebApp.StartProcessing.EventDataEntity, input);
            }
        },
        _d),
    _a.Processing = (_e = class {
        },
        __setFunctionName(_e, "Processing"),
        _e.eventName = 'contacts-bulk-create-extraction-for-web-app-processing',
        _e.EventDataSchema = zod_1.z.object({
            jobRequestId: zod_1.z.string(),
            nProcessedContacts: zod_1.z.number(),
            nContacts: zod_1.z.number(),
        }),
        _e.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_e.EventDataSchema) {
            static build(input) {
                return (0, entity_utils_1.safeInstantiateEntity)(ContactsWebsocketEvents.BulkCreateExtractionForWebApp.Processing.EventDataEntity, input);
            }
        },
        _e),
    _a.Finished = (_f = class {
        },
        __setFunctionName(_f, "Finished"),
        _f.eventName = 'contacts-bulk-create-extraction-for-web-app-finished',
        _f.EventDataSchema = zod_1.z.object({
            jobRequestId: zod_1.z.string(),
            nProcessedContacts: zod_1.z.number(),
            nContacts: zod_1.z.number(),
            csvFileSignedUrl: zod_1.z.string(),
        }),
        _f.EventDataEntity = class extends (0, nestjs_zod_1.createZodDto)(_f.EventDataSchema) {
            static build(input) {
                return (0, entity_utils_1.safeInstantiateEntity)(ContactsWebsocketEvents.BulkCreateExtractionForWebApp.Finished.EventDataEntity, input);
            }
        },
        _f),
    _a);
exports.default = ContactsWebsocketEvents;
//# sourceMappingURL=contacts.websocket-events.js.map
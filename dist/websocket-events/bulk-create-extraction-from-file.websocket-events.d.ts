import { BulkAsyncJobExecutionResultStatus } from '../enums/bulk-async-job-result-status.enum';
import { WebsocketEventToastType, WebsocketEventTostablePort } from '../websocket-events/tostable.port';
import { z } from 'zod';
import { Z } from "zod-class";
import { Resource } from '../enums/resource.enum';
declare const StartedSchema: z.ZodObject<{
    jobRequestId: z.ZodString;
    url: z.ZodString;
    signedUrl: z.ZodString;
    fileName: z.ZodString;
    fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
}, "strip", z.ZodTypeAny, {
    jobRequestId: string;
    nTotalItems: number;
    resource: Resource;
    fileType: "pdf" | "image" | "audio" | "csv" | "excel";
    signedUrl: string;
    url: string;
    fileName: string;
}, {
    jobRequestId: string;
    nTotalItems: number;
    resource: Resource;
    fileType: "pdf" | "image" | "audio" | "csv" | "excel";
    signedUrl: string;
    url: string;
    fileName: string;
}>;
declare const StartedEventDataEntity_base: Z.Class<{
    jobRequestId: z.ZodString;
    url: z.ZodString;
    signedUrl: z.ZodString;
    fileName: z.ZodString;
    fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
}>;
declare class StartedEventDataEntity extends StartedEventDataEntity_base implements WebsocketEventTostablePort {
    getType(): WebsocketEventToastType;
    getTitle(attempt: number): string;
    getDescription(): string | undefined;
    static build(input: z.infer<typeof StartedSchema>): StartedEventDataEntity;
}
declare const ProgressSchema: z.ZodObject<{
    jobRequestId: z.ZodString;
    url: z.ZodString;
    signedUrl: z.ZodString;
    fileName: z.ZodString;
    fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    nSuccessItems: z.ZodNumber;
    nFailedItems: z.ZodNumber;
    progress: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    jobRequestId: string;
    nTotalItems: number;
    nSuccessItems: number;
    nFailedItems: number;
    progress: number;
    resource: Resource;
    fileType: "pdf" | "image" | "audio" | "csv" | "excel";
    signedUrl: string;
    url: string;
    fileName: string;
}, {
    jobRequestId: string;
    nTotalItems: number;
    nSuccessItems: number;
    nFailedItems: number;
    progress: number;
    resource: Resource;
    fileType: "pdf" | "image" | "audio" | "csv" | "excel";
    signedUrl: string;
    url: string;
    fileName: string;
}>;
declare const ProgressEventDataEntity_base: Z.Class<{
    jobRequestId: z.ZodString;
    url: z.ZodString;
    signedUrl: z.ZodString;
    fileName: z.ZodString;
    fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    nSuccessItems: z.ZodNumber;
    nFailedItems: z.ZodNumber;
    progress: z.ZodNumber;
}>;
declare class ProgressEventDataEntity extends ProgressEventDataEntity_base implements WebsocketEventTostablePort {
    getType(): WebsocketEventToastType;
    getTitle(attempt: number): string;
    getDescription(): string | undefined;
    static build(input: z.infer<typeof ProgressSchema>): ProgressEventDataEntity;
}
declare const FinishedSchema: z.ZodObject<{
    jobRequestId: z.ZodString;
    url: z.ZodString;
    signedUrl: z.ZodString;
    fileName: z.ZodString;
    fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    nSuccessItems: z.ZodNumber;
    nFailedItems: z.ZodNumber;
    progress: z.ZodNumber;
    finishedAt: z.ZodDate;
    resultStatus: z.ZodNativeEnum<typeof BulkAsyncJobExecutionResultStatus>;
    csvFileSignedUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jobRequestId: string;
    nTotalItems: number;
    nSuccessItems: number;
    nFailedItems: number;
    progress: number;
    finishedAt: Date;
    resultStatus: BulkAsyncJobExecutionResultStatus;
    resource: Resource;
    fileType: "pdf" | "image" | "audio" | "csv" | "excel";
    signedUrl: string;
    url: string;
    fileName: string;
    csvFileSignedUrl: string;
}, {
    jobRequestId: string;
    nTotalItems: number;
    nSuccessItems: number;
    nFailedItems: number;
    progress: number;
    finishedAt: Date;
    resultStatus: BulkAsyncJobExecutionResultStatus;
    resource: Resource;
    fileType: "pdf" | "image" | "audio" | "csv" | "excel";
    signedUrl: string;
    url: string;
    fileName: string;
    csvFileSignedUrl: string;
}>;
declare const FinishedEventDataEntity_base: Z.Class<{
    jobRequestId: z.ZodString;
    url: z.ZodString;
    signedUrl: z.ZodString;
    fileName: z.ZodString;
    fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    nSuccessItems: z.ZodNumber;
    nFailedItems: z.ZodNumber;
    progress: z.ZodNumber;
    finishedAt: z.ZodDate;
    resultStatus: z.ZodNativeEnum<typeof BulkAsyncJobExecutionResultStatus>;
    csvFileSignedUrl: z.ZodString;
}>;
declare class FinishedEventDataEntity extends FinishedEventDataEntity_base implements WebsocketEventTostablePort {
    getType(): WebsocketEventToastType;
    getTitle(attempt: number): string;
    getDescription(): string | undefined;
    static build(input: z.infer<typeof FinishedSchema>): FinishedEventDataEntity;
}
declare const FailedSchema: z.ZodObject<{
    jobRequestId: z.ZodString;
    url: z.ZodString;
    signedUrl: z.ZodString;
    fileName: z.ZodString;
    fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
    resource: z.ZodNativeEnum<typeof Resource>;
    errorMessage: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jobRequestId: string;
    resource: Resource;
    fileType: "pdf" | "image" | "audio" | "csv" | "excel";
    signedUrl: string;
    url: string;
    fileName: string;
    errorMessage: string;
}, {
    jobRequestId: string;
    resource: Resource;
    fileType: "pdf" | "image" | "audio" | "csv" | "excel";
    signedUrl: string;
    url: string;
    fileName: string;
    errorMessage: string;
}>;
declare const FailedEventDataEntity_base: Z.Class<{
    jobRequestId: z.ZodString;
    url: z.ZodString;
    signedUrl: z.ZodString;
    fileName: z.ZodString;
    fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
    resource: z.ZodNativeEnum<typeof Resource>;
    errorMessage: z.ZodString;
}>;
declare class FailedEventDataEntity extends FailedEventDataEntity_base implements WebsocketEventTostablePort {
    getType(): WebsocketEventToastType;
    getTitle(attempt: number): string;
    getDescription(): string | undefined;
    static build(input: z.infer<typeof FailedSchema>): FailedEventDataEntity;
}
export declare const BulkCreateExtractionFromFileWebsocketEvents: {
    Started: {
        eventName: string;
        EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            url: z.ZodString;
            signedUrl: z.ZodString;
            fileName: z.ZodString;
            fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
            nTotalItems: z.ZodNumber;
            resource: z.ZodNativeEnum<typeof Resource>;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            nTotalItems: number;
            resource: Resource;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            signedUrl: string;
            url: string;
            fileName: string;
        }, {
            jobRequestId: string;
            nTotalItems: number;
            resource: Resource;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            signedUrl: string;
            url: string;
            fileName: string;
        }>;
        EventDataEntity: typeof StartedEventDataEntity;
    };
    Progress: {
        eventName: string;
        EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            url: z.ZodString;
            signedUrl: z.ZodString;
            fileName: z.ZodString;
            fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
            nTotalItems: z.ZodNumber;
            resource: z.ZodNativeEnum<typeof Resource>;
            nSuccessItems: z.ZodNumber;
            nFailedItems: z.ZodNumber;
            progress: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            resource: Resource;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            signedUrl: string;
            url: string;
            fileName: string;
        }, {
            jobRequestId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            resource: Resource;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            signedUrl: string;
            url: string;
            fileName: string;
        }>;
        EventDataEntity: typeof ProgressEventDataEntity;
    };
    Finished: {
        eventName: string;
        EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            url: z.ZodString;
            signedUrl: z.ZodString;
            fileName: z.ZodString;
            fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
            nTotalItems: z.ZodNumber;
            resource: z.ZodNativeEnum<typeof Resource>;
            nSuccessItems: z.ZodNumber;
            nFailedItems: z.ZodNumber;
            progress: z.ZodNumber;
            finishedAt: z.ZodDate;
            resultStatus: z.ZodNativeEnum<typeof BulkAsyncJobExecutionResultStatus>;
            csvFileSignedUrl: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
            resource: Resource;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            signedUrl: string;
            url: string;
            fileName: string;
            csvFileSignedUrl: string;
        }, {
            jobRequestId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
            resource: Resource;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            signedUrl: string;
            url: string;
            fileName: string;
            csvFileSignedUrl: string;
        }>;
        EventDataEntity: typeof FinishedEventDataEntity;
    };
    Failed: {
        eventName: string;
        EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            url: z.ZodString;
            signedUrl: z.ZodString;
            fileName: z.ZodString;
            fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
            resource: z.ZodNativeEnum<typeof Resource>;
            errorMessage: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            resource: Resource;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            signedUrl: string;
            url: string;
            fileName: string;
            errorMessage: string;
        }, {
            jobRequestId: string;
            resource: Resource;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            signedUrl: string;
            url: string;
            fileName: string;
            errorMessage: string;
        }>;
        EventDataEntity: typeof FailedEventDataEntity;
    };
};
export {};

import { BulkAsyncJobExecutionResultStatus } from '../enums/bulk-async-job-result-status.enum';
import { WebsocketEventToastType, WebsocketEventTostablePort } from '../websocket-events/tostable.port';
import { z } from 'zod';
import { Z } from "zod-class";
import { FileType } from '../enums/file-type.enum';
import { Resource } from '../enums/resource.enum';
declare const StartedSchema: z.ZodObject<{
    jobRequestId: z.ZodString;
    jobExecutionId: z.ZodString;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    fileType: z.ZodNativeEnum<typeof FileType>;
}, "strip", z.ZodTypeAny, {
    jobRequestId: string;
    jobExecutionId: string;
    nTotalItems: number;
    resource: Resource;
    fileType: FileType;
}, {
    jobRequestId: string;
    jobExecutionId: string;
    nTotalItems: number;
    resource: Resource;
    fileType: FileType;
}>;
declare const StartedEventDataEntity_base: Z.Class<{
    jobRequestId: z.ZodString;
    jobExecutionId: z.ZodString;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    fileType: z.ZodNativeEnum<typeof FileType>;
}>;
declare class StartedEventDataEntity extends StartedEventDataEntity_base implements WebsocketEventTostablePort {
    getType(): WebsocketEventToastType;
    getTitle(attempt: number): string;
    getDescription(): string | undefined;
    static build(input: z.infer<typeof StartedSchema>): StartedEventDataEntity;
}
declare const ProgressSchema: z.ZodObject<{
    jobRequestId: z.ZodString;
    jobExecutionId: z.ZodString;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    fileType: z.ZodNativeEnum<typeof FileType>;
    nSuccessItems: z.ZodNumber;
    nFailedItems: z.ZodNumber;
    progress: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    jobRequestId: string;
    jobExecutionId: string;
    nTotalItems: number;
    nSuccessItems: number;
    nFailedItems: number;
    progress: number;
    resource: Resource;
    fileType: FileType;
}, {
    jobRequestId: string;
    jobExecutionId: string;
    nTotalItems: number;
    nSuccessItems: number;
    nFailedItems: number;
    progress: number;
    resource: Resource;
    fileType: FileType;
}>;
declare const ProgressEventDataEntity_base: Z.Class<{
    jobRequestId: z.ZodString;
    jobExecutionId: z.ZodString;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    fileType: z.ZodNativeEnum<typeof FileType>;
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
    jobExecutionId: z.ZodString;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    fileType: z.ZodNativeEnum<typeof FileType>;
    nSuccessItems: z.ZodNumber;
    nFailedItems: z.ZodNumber;
    progress: z.ZodNumber;
    finishedAt: z.ZodDate;
    resultStatus: z.ZodNativeEnum<typeof BulkAsyncJobExecutionResultStatus>;
    signedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    jobRequestId: string;
    jobExecutionId: string;
    nTotalItems: number;
    nSuccessItems: number;
    nFailedItems: number;
    progress: number;
    finishedAt: Date;
    resultStatus: BulkAsyncJobExecutionResultStatus;
    resource: Resource;
    fileType: FileType;
    signedUrl?: string | null | undefined;
}, {
    jobRequestId: string;
    jobExecutionId: string;
    nTotalItems: number;
    nSuccessItems: number;
    nFailedItems: number;
    progress: number;
    finishedAt: Date;
    resultStatus: BulkAsyncJobExecutionResultStatus;
    resource: Resource;
    fileType: FileType;
    signedUrl?: string | null | undefined;
}>;
declare const FinishedEventDataEntity_base: Z.Class<{
    jobRequestId: z.ZodString;
    jobExecutionId: z.ZodString;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    fileType: z.ZodNativeEnum<typeof FileType>;
    nSuccessItems: z.ZodNumber;
    nFailedItems: z.ZodNumber;
    progress: z.ZodNumber;
    finishedAt: z.ZodDate;
    resultStatus: z.ZodNativeEnum<typeof BulkAsyncJobExecutionResultStatus>;
    signedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>;
declare class FinishedEventDataEntity extends FinishedEventDataEntity_base implements WebsocketEventTostablePort {
    getType(): WebsocketEventToastType;
    getTitle(attempt: number): string;
    getDescription(): string | undefined;
    static build(input: z.infer<typeof FinishedSchema>): FinishedEventDataEntity;
}
export declare const ExportRecordsWebsocketEvents: {
    Started: {
        eventName: string;
        EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            jobExecutionId: z.ZodString;
            nTotalItems: z.ZodNumber;
            resource: z.ZodNativeEnum<typeof Resource>;
            fileType: z.ZodNativeEnum<typeof FileType>;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            resource: Resource;
            fileType: FileType;
        }, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            resource: Resource;
            fileType: FileType;
        }>;
        EventDataEntity: typeof StartedEventDataEntity;
    };
    Progress: {
        eventName: string;
        EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            jobExecutionId: z.ZodString;
            nTotalItems: z.ZodNumber;
            resource: z.ZodNativeEnum<typeof Resource>;
            fileType: z.ZodNativeEnum<typeof FileType>;
            nSuccessItems: z.ZodNumber;
            nFailedItems: z.ZodNumber;
            progress: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            resource: Resource;
            fileType: FileType;
        }, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            resource: Resource;
            fileType: FileType;
        }>;
        EventDataEntity: typeof ProgressEventDataEntity;
    };
    Finished: {
        eventName: string;
        EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            jobExecutionId: z.ZodString;
            nTotalItems: z.ZodNumber;
            resource: z.ZodNativeEnum<typeof Resource>;
            fileType: z.ZodNativeEnum<typeof FileType>;
            nSuccessItems: z.ZodNumber;
            nFailedItems: z.ZodNumber;
            progress: z.ZodNumber;
            finishedAt: z.ZodDate;
            resultStatus: z.ZodNativeEnum<typeof BulkAsyncJobExecutionResultStatus>;
            signedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
            resource: Resource;
            fileType: FileType;
            signedUrl?: string | null | undefined;
        }, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
            resource: Resource;
            fileType: FileType;
            signedUrl?: string | null | undefined;
        }>;
        EventDataEntity: typeof FinishedEventDataEntity;
    };
};
export {};

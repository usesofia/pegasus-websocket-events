import { BulkAsyncJobExecutionResultStatus } from "../enums/bulk-async-job-result-status.enum";
import { WebsocketEventToastType, WebsocketEventTostablePort } from "../websocket-events/tostable.port";
import { z } from "zod";
import { Z } from "zod-class";
import { Resource } from "../enums/resource.enum";
declare const StartedSchema: z.ZodObject<{
    jobRequestId: z.ZodString;
    jobExecutionId: z.ZodString;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
}, "strip", z.ZodTypeAny, {
    jobRequestId: string;
    nTotalItems: number;
    resource: Resource;
    jobExecutionId: string;
}, {
    jobRequestId: string;
    nTotalItems: number;
    resource: Resource;
    jobExecutionId: string;
}>;
declare const StartedEventDataEntity_base: Z.Class<{
    jobRequestId: z.ZodString;
    jobExecutionId: z.ZodString;
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
    jobExecutionId: z.ZodString;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    nSuccessItems: z.ZodNumber;
    nFailedItems: z.ZodNumber;
    progress: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    jobRequestId: string;
    nTotalItems: number;
    resource: Resource;
    nSuccessItems: number;
    nFailedItems: number;
    progress: number;
    jobExecutionId: string;
}, {
    jobRequestId: string;
    nTotalItems: number;
    resource: Resource;
    nSuccessItems: number;
    nFailedItems: number;
    progress: number;
    jobExecutionId: string;
}>;
declare const ProgressEventDataEntity_base: Z.Class<{
    jobRequestId: z.ZodString;
    jobExecutionId: z.ZodString;
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
    jobExecutionId: z.ZodString;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    nSuccessItems: z.ZodNumber;
    nFailedItems: z.ZodNumber;
    progress: z.ZodNumber;
    finishedAt: z.ZodDate;
    resultStatus: z.ZodNativeEnum<typeof BulkAsyncJobExecutionResultStatus>;
}, "strip", z.ZodTypeAny, {
    jobRequestId: string;
    nTotalItems: number;
    resource: Resource;
    nSuccessItems: number;
    nFailedItems: number;
    progress: number;
    finishedAt: Date;
    resultStatus: BulkAsyncJobExecutionResultStatus;
    jobExecutionId: string;
}, {
    jobRequestId: string;
    nTotalItems: number;
    resource: Resource;
    nSuccessItems: number;
    nFailedItems: number;
    progress: number;
    finishedAt: Date;
    resultStatus: BulkAsyncJobExecutionResultStatus;
    jobExecutionId: string;
}>;
declare const FinishedEventDataEntity_base: Z.Class<{
    jobRequestId: z.ZodString;
    jobExecutionId: z.ZodString;
    nTotalItems: z.ZodNumber;
    resource: z.ZodNativeEnum<typeof Resource>;
    nSuccessItems: z.ZodNumber;
    nFailedItems: z.ZodNumber;
    progress: z.ZodNumber;
    finishedAt: z.ZodDate;
    resultStatus: z.ZodNativeEnum<typeof BulkAsyncJobExecutionResultStatus>;
}>;
declare class FinishedEventDataEntity extends FinishedEventDataEntity_base implements WebsocketEventTostablePort {
    getType(): WebsocketEventToastType;
    getTitle(attempt: number): string;
    getDescription(): string | undefined;
    static build(input: z.infer<typeof FinishedSchema>): FinishedEventDataEntity;
}
export declare const BulkRemoveWebsocketEvents: {
    Started: {
        eventName: string;
        EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            jobExecutionId: z.ZodString;
            nTotalItems: z.ZodNumber;
            resource: z.ZodNativeEnum<typeof Resource>;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            nTotalItems: number;
            resource: Resource;
            jobExecutionId: string;
        }, {
            jobRequestId: string;
            nTotalItems: number;
            resource: Resource;
            jobExecutionId: string;
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
            nSuccessItems: z.ZodNumber;
            nFailedItems: z.ZodNumber;
            progress: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            nTotalItems: number;
            resource: Resource;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            jobExecutionId: string;
        }, {
            jobRequestId: string;
            nTotalItems: number;
            resource: Resource;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            jobExecutionId: string;
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
            nSuccessItems: z.ZodNumber;
            nFailedItems: z.ZodNumber;
            progress: z.ZodNumber;
            finishedAt: z.ZodDate;
            resultStatus: z.ZodNativeEnum<typeof BulkAsyncJobExecutionResultStatus>;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            nTotalItems: number;
            resource: Resource;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
            jobExecutionId: string;
        }, {
            jobRequestId: string;
            nTotalItems: number;
            resource: Resource;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
            jobExecutionId: string;
        }>;
        EventDataEntity: typeof FinishedEventDataEntity;
    };
};
export {};

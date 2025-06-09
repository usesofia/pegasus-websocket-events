import { BulkAsyncJobExecutionResultStatus } from '../enums/bulk-async-job-result-status.enum';
import { WebsocketEventToastType } from '../websocket-events/tostable.port';
import { z } from 'zod';
import { Resource } from '../enums/resource.enum';
export default class BulkCreateWebsocketEvents {
    static Started: {
        new (): {};
        readonly eventName: "bulk-create-started";
        readonly EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            jobExecutionId: z.ZodString;
            nTotalItems: z.ZodNumber;
            resource: z.ZodNativeEnum<typeof Resource>;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            resource: Resource;
        }, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            resource: Resource;
        }>;
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
            };
            build(input: z.infer<typeof BulkCreateWebsocketEvents.Started.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                jobExecutionId: z.ZodString;
                nTotalItems: z.ZodNumber;
                resource: z.ZodNativeEnum<typeof Resource>;
            }, "strip", z.ZodTypeAny>, {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
            };
        };
    };
    static Progress: {
        new (): {};
        readonly eventName: "bulk-create-progress";
        readonly EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            jobExecutionId: z.ZodString;
            nTotalItems: z.ZodNumber;
            resource: z.ZodNativeEnum<typeof Resource>;
            nSuccessItems: z.ZodNumber;
            nFailedItems: z.ZodNumber;
            progress: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            resource: Resource;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
        }, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            resource: Resource;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
        }>;
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
            };
            build(input: z.infer<typeof BulkCreateWebsocketEvents.Progress.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                jobExecutionId: z.ZodString;
                nTotalItems: z.ZodNumber;
                resource: z.ZodNativeEnum<typeof Resource>;
                nSuccessItems: z.ZodNumber;
                nFailedItems: z.ZodNumber;
                progress: z.ZodNumber;
            }, "strip", z.ZodTypeAny>, {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
            };
        };
    };
    static Finished: {
        new (): {};
        readonly eventName: "bulk-create-finished";
        readonly EventDataSchema: z.ZodObject<{
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
            jobExecutionId: string;
            nTotalItems: number;
            resource: Resource;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
        }, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            resource: Resource;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
        }>;
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                finishedAt: Date;
                resultStatus: BulkAsyncJobExecutionResultStatus;
            };
            build(input: z.infer<typeof BulkCreateWebsocketEvents.Finished.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                finishedAt: Date;
                resultStatus: BulkAsyncJobExecutionResultStatus;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                finishedAt: Date;
                resultStatus: BulkAsyncJobExecutionResultStatus;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                jobExecutionId: z.ZodString;
                nTotalItems: z.ZodNumber;
                resource: z.ZodNativeEnum<typeof Resource>;
                nSuccessItems: z.ZodNumber;
                nFailedItems: z.ZodNumber;
                progress: z.ZodNumber;
                finishedAt: z.ZodDate;
                resultStatus: z.ZodNativeEnum<typeof BulkAsyncJobExecutionResultStatus>;
            }, "strip", z.ZodTypeAny>, {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                finishedAt: Date;
                resultStatus: BulkAsyncJobExecutionResultStatus;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                finishedAt: Date;
                resultStatus: BulkAsyncJobExecutionResultStatus;
            };
        };
    };
}

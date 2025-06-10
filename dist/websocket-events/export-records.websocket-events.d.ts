import { BulkAsyncJobExecutionResultStatus } from '../enums/bulk-async-job-result-status.enum';
import { WebsocketEventToastType } from '../websocket-events/tostable.port';
import { z } from 'zod';
import { FileType } from '../enums/file-type.enum';
import { Resource } from '../enums/resource.enum';
export declare class ExportRecordsWebsocketEvents {
    static Started: {
        new (): {};
        readonly eventName: "export-records-started";
        readonly EventDataSchema: z.ZodObject<{
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
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                fileType: FileType;
            };
            build(input: z.infer<typeof ExportRecordsWebsocketEvents.Started.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                fileType: FileType;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                fileType: FileType;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                jobExecutionId: z.ZodString;
                nTotalItems: z.ZodNumber;
                resource: z.ZodNativeEnum<typeof Resource>;
                fileType: z.ZodNativeEnum<typeof FileType>;
            }, "strip", z.ZodTypeAny>, {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                fileType: FileType;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                resource: Resource;
                fileType: FileType;
            };
        };
    };
    static Progress: {
        new (): {};
        readonly eventName: "export-records-progress";
        readonly EventDataSchema: z.ZodObject<{
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
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                resource: Resource;
                fileType: FileType;
            };
            build(input: z.infer<typeof ExportRecordsWebsocketEvents.Progress.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                resource: Resource;
                fileType: FileType;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                resource: Resource;
                fileType: FileType;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                jobExecutionId: z.ZodString;
                nTotalItems: z.ZodNumber;
                resource: z.ZodNativeEnum<typeof Resource>;
                fileType: z.ZodNativeEnum<typeof FileType>;
                nSuccessItems: z.ZodNumber;
                nFailedItems: z.ZodNumber;
                progress: z.ZodNumber;
            }, "strip", z.ZodTypeAny>, {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                resource: Resource;
                fileType: FileType;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                resource: Resource;
                fileType: FileType;
            };
        };
    };
    static Finished: {
        new (): {};
        readonly eventName: "export-records-finished";
        readonly EventDataSchema: z.ZodObject<{
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
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
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
            };
            build(input: z.infer<typeof ExportRecordsWebsocketEvents.Finished.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
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
            };
            isZodDto: true;
            schema: z.ZodType<{
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
            }, z.ZodObjectDef<{
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
            }, "strip", z.ZodTypeAny>, {
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
            create(input: unknown): {
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
            };
        };
    };
}

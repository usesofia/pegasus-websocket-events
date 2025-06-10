import { BulkAsyncJobExecutionResultStatus } from '../enums/bulk-async-job-result-status.enum';
import { WebsocketEventToastType } from '../websocket-events/tostable.port';
import { z } from 'zod';
import { Resource } from '../enums/resource.enum';
export declare class BulkCreateExtractionFromFileWebsocketEvents {
    static Started: {
        new (): {};
        readonly eventName: "bulk-create-extraction-from-file-started";
        readonly EventDataSchema: z.ZodObject<{
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
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                nTotalItems: number;
                resource: Resource;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                signedUrl: string;
                url: string;
                fileName: string;
            };
            build(input: z.infer<typeof BulkCreateExtractionFromFileWebsocketEvents.Started.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                nTotalItems: number;
                resource: Resource;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                signedUrl: string;
                url: string;
                fileName: string;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                nTotalItems: number;
                resource: Resource;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                signedUrl: string;
                url: string;
                fileName: string;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                url: z.ZodString;
                signedUrl: z.ZodString;
                fileName: z.ZodString;
                fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
                nTotalItems: z.ZodNumber;
                resource: z.ZodNativeEnum<typeof Resource>;
            }, "strip", z.ZodTypeAny>, {
                jobRequestId: string;
                nTotalItems: number;
                resource: Resource;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                signedUrl: string;
                url: string;
                fileName: string;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                nTotalItems: number;
                resource: Resource;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                signedUrl: string;
                url: string;
                fileName: string;
            };
        };
    };
    static Progress: {
        new (): {};
        readonly eventName: "bulk-create-extraction-from-file-progress";
        readonly EventDataSchema: z.ZodObject<{
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
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
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
            };
            build(input: z.infer<typeof BulkCreateExtractionFromFileWebsocketEvents.Progress.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
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
            };
            isZodDto: true;
            schema: z.ZodType<{
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
            }, z.ZodObjectDef<{
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
            }, "strip", z.ZodTypeAny>, {
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
            create(input: unknown): {
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
            };
        };
    };
    static Finished: {
        new (): {};
        readonly eventName: "bulk-create-extraction-from-file-finished";
        readonly EventDataSchema: z.ZodObject<{
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
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
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
            };
            build(input: z.infer<typeof BulkCreateExtractionFromFileWebsocketEvents.Finished.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
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
            };
            isZodDto: true;
            schema: z.ZodType<{
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
            }, z.ZodObjectDef<{
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
            }, "strip", z.ZodTypeAny>, {
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
            create(input: unknown): {
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
            };
        };
    };
    static Failed: {
        new (): {};
        readonly eventName: "bulk-create-extraction-from-file-failed";
        readonly EventDataSchema: z.ZodObject<{
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
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                resource: Resource;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                signedUrl: string;
                url: string;
                fileName: string;
                errorMessage: string;
            };
            build(input: z.infer<typeof BulkCreateExtractionFromFileWebsocketEvents.Failed.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                resource: Resource;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                signedUrl: string;
                url: string;
                fileName: string;
                errorMessage: string;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                resource: Resource;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                signedUrl: string;
                url: string;
                fileName: string;
                errorMessage: string;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                url: z.ZodString;
                signedUrl: z.ZodString;
                fileName: z.ZodString;
                fileType: z.ZodEnum<["pdf", "image", "audio", "csv", "excel"]>;
                resource: z.ZodNativeEnum<typeof Resource>;
                errorMessage: z.ZodString;
            }, "strip", z.ZodTypeAny>, {
                jobRequestId: string;
                resource: Resource;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                signedUrl: string;
                url: string;
                fileName: string;
                errorMessage: string;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                resource: Resource;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                signedUrl: string;
                url: string;
                fileName: string;
                errorMessage: string;
            };
        };
    };
}

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
            url: string;
            signedUrl: string;
            fileName: string;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            nTotalItems: number;
            resource: Resource;
        }, {
            jobRequestId: string;
            url: string;
            signedUrl: string;
            fileName: string;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            nTotalItems: number;
            resource: Resource;
        }>;
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
            };
            build(input: z.infer<typeof BulkCreateExtractionFromFileWebsocketEvents.Started.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
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
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
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
            url: string;
            signedUrl: string;
            fileName: string;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            nTotalItems: number;
            resource: Resource;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
        }, {
            jobRequestId: string;
            url: string;
            signedUrl: string;
            fileName: string;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
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
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
            };
            build(input: z.infer<typeof BulkCreateExtractionFromFileWebsocketEvents.Progress.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
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
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
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
            url: string;
            signedUrl: string;
            fileName: string;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            nTotalItems: number;
            resource: Resource;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
            csvFileSignedUrl: string;
        }, {
            jobRequestId: string;
            url: string;
            signedUrl: string;
            fileName: string;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            nTotalItems: number;
            resource: Resource;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
            csvFileSignedUrl: string;
        }>;
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                finishedAt: Date;
                resultStatus: BulkAsyncJobExecutionResultStatus;
                csvFileSignedUrl: string;
            };
            build(input: z.infer<typeof BulkCreateExtractionFromFileWebsocketEvents.Finished.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                finishedAt: Date;
                resultStatus: BulkAsyncJobExecutionResultStatus;
                csvFileSignedUrl: string;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                finishedAt: Date;
                resultStatus: BulkAsyncJobExecutionResultStatus;
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
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                finishedAt: Date;
                resultStatus: BulkAsyncJobExecutionResultStatus;
                csvFileSignedUrl: string;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                nTotalItems: number;
                resource: Resource;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                finishedAt: Date;
                resultStatus: BulkAsyncJobExecutionResultStatus;
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
            url: string;
            signedUrl: string;
            fileName: string;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            resource: Resource;
            errorMessage: string;
        }, {
            jobRequestId: string;
            url: string;
            signedUrl: string;
            fileName: string;
            fileType: "pdf" | "image" | "audio" | "csv" | "excel";
            resource: Resource;
            errorMessage: string;
        }>;
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                resource: Resource;
                errorMessage: string;
            };
            build(input: z.infer<typeof BulkCreateExtractionFromFileWebsocketEvents.Failed.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                resource: Resource;
                errorMessage: string;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                resource: Resource;
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
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                resource: Resource;
                errorMessage: string;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                url: string;
                signedUrl: string;
                fileName: string;
                fileType: "pdf" | "image" | "audio" | "csv" | "excel";
                resource: Resource;
                errorMessage: string;
            };
        };
    };
}

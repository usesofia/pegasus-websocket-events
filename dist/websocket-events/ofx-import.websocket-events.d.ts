import { BulkAsyncJobExecutionResultStatus } from '../enums/bulk-async-job-result-status.enum';
import { WebsocketEventToastType } from '../websocket-events/tostable.port';
import { z } from 'zod';
export declare class OfxImportWebsocketEvents {
    static Started: {
        new (): {};
        readonly eventName: "ofx-import-started";
        readonly EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            jobExecutionId: z.ZodString;
            nTotalItems: z.ZodNumber;
            ofxFileName: z.ZodString;
            bankAccountName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            ofxFileName: string;
            bankAccountName: string;
        }, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            ofxFileName: string;
            bankAccountName: string;
        }>;
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                ofxFileName: string;
                bankAccountName: string;
            };
            build(input: z.infer<typeof OfxImportWebsocketEvents.Started.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                ofxFileName: string;
                bankAccountName: string;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                ofxFileName: string;
                bankAccountName: string;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                jobExecutionId: z.ZodString;
                nTotalItems: z.ZodNumber;
                ofxFileName: z.ZodString;
                bankAccountName: z.ZodString;
            }, "strip", z.ZodTypeAny>, {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                ofxFileName: string;
                bankAccountName: string;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                ofxFileName: string;
                bankAccountName: string;
            };
        };
    };
    static Progress: {
        new (): {};
        readonly eventName: "ofx-import-progress";
        readonly EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            jobExecutionId: z.ZodString;
            nTotalItems: z.ZodNumber;
            ofxFileName: z.ZodString;
            bankAccountName: z.ZodString;
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
            ofxFileName: string;
            bankAccountName: string;
        }, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            ofxFileName: string;
            bankAccountName: string;
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
                ofxFileName: string;
                bankAccountName: string;
            };
            build(input: z.infer<typeof OfxImportWebsocketEvents.Progress.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                ofxFileName: string;
                bankAccountName: string;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                ofxFileName: string;
                bankAccountName: string;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                jobExecutionId: z.ZodString;
                nTotalItems: z.ZodNumber;
                ofxFileName: z.ZodString;
                bankAccountName: z.ZodString;
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
                ofxFileName: string;
                bankAccountName: string;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                ofxFileName: string;
                bankAccountName: string;
            };
        };
    };
    static Finished: {
        new (): {};
        readonly eventName: "ofx-import-finished";
        readonly EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            jobExecutionId: z.ZodString;
            nTotalItems: z.ZodNumber;
            ofxFileName: z.ZodString;
            bankAccountName: z.ZodString;
            nSuccessItems: z.ZodNumber;
            nFailedItems: z.ZodNumber;
            progress: z.ZodNumber;
            finishedAt: z.ZodDate;
            resultStatus: z.ZodNativeEnum<typeof BulkAsyncJobExecutionResultStatus>;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
            ofxFileName: string;
            bankAccountName: string;
        }, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
            ofxFileName: string;
            bankAccountName: string;
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
                ofxFileName: string;
                bankAccountName: string;
            };
            build(input: z.infer<typeof OfxImportWebsocketEvents.Finished.EventDataSchema>): {
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
                ofxFileName: string;
                bankAccountName: string;
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
                ofxFileName: string;
                bankAccountName: string;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                jobExecutionId: z.ZodString;
                nTotalItems: z.ZodNumber;
                ofxFileName: z.ZodString;
                bankAccountName: z.ZodString;
                nSuccessItems: z.ZodNumber;
                nFailedItems: z.ZodNumber;
                progress: z.ZodNumber;
                finishedAt: z.ZodDate;
                resultStatus: z.ZodNativeEnum<typeof BulkAsyncJobExecutionResultStatus>;
            }, "strip", z.ZodTypeAny>, {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                finishedAt: Date;
                resultStatus: BulkAsyncJobExecutionResultStatus;
                ofxFileName: string;
                bankAccountName: string;
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
                ofxFileName: string;
                bankAccountName: string;
            };
        };
    };
}

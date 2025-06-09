import { BulkAsyncJobExecutionResultStatus } from '../enums/bulk-async-job-result-status.enum';
import { WebsocketEventToastType } from '../websocket-events/tostable.port';
import { z } from 'zod';
export default class SyncBankTransactionsWebsocketEvents {
    static Started: {
        new (): {};
        readonly eventName: "sync-bank-transactions-started";
        readonly EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            jobExecutionId: z.ZodString;
            nTotalItems: z.ZodNumber;
            accountName: z.ZodString;
            accountNumber: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            accountName: string;
            accountNumber: string;
        }, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            accountName: string;
            accountNumber: string;
        }>;
        EventDataEntity: {
            new (): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                accountName: string;
                accountNumber: string;
            };
            build(input: z.infer<typeof SyncBankTransactionsWebsocketEvents.Started.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                accountName: string;
                accountNumber: string;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                accountName: string;
                accountNumber: string;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                jobExecutionId: z.ZodString;
                nTotalItems: z.ZodNumber;
                accountName: z.ZodString;
                accountNumber: z.ZodString;
            }, "strip", z.ZodTypeAny>, {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                accountName: string;
                accountNumber: string;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                accountName: string;
                accountNumber: string;
            };
        };
    };
    static Progress: {
        new (): {};
        readonly eventName: "sync-bank-transactions-progress";
        readonly EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            jobExecutionId: z.ZodString;
            nTotalItems: z.ZodNumber;
            accountName: z.ZodString;
            accountNumber: z.ZodString;
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
            accountName: string;
            accountNumber: string;
        }, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            accountName: string;
            accountNumber: string;
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
                accountName: string;
                accountNumber: string;
            };
            build(input: z.infer<typeof SyncBankTransactionsWebsocketEvents.Progress.EventDataSchema>): {
                getType(): WebsocketEventToastType;
                getTitle(attempt: number): string;
                getDescription(): string | undefined;
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                accountName: string;
                accountNumber: string;
            };
            isZodDto: true;
            schema: z.ZodType<{
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                accountName: string;
                accountNumber: string;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                jobExecutionId: z.ZodString;
                nTotalItems: z.ZodNumber;
                accountName: z.ZodString;
                accountNumber: z.ZodString;
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
                accountName: string;
                accountNumber: string;
            }>;
            create(input: unknown): {
                jobRequestId: string;
                jobExecutionId: string;
                nTotalItems: number;
                nSuccessItems: number;
                nFailedItems: number;
                progress: number;
                accountName: string;
                accountNumber: string;
            };
        };
    };
    static Finished: {
        new (): {};
        readonly eventName: "sync-bank-transactions-finished";
        readonly EventDataSchema: z.ZodObject<{
            jobRequestId: z.ZodString;
            jobExecutionId: z.ZodString;
            nTotalItems: z.ZodNumber;
            accountName: z.ZodString;
            accountNumber: z.ZodString;
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
            accountName: string;
            accountNumber: string;
        }, {
            jobRequestId: string;
            jobExecutionId: string;
            nTotalItems: number;
            nSuccessItems: number;
            nFailedItems: number;
            progress: number;
            finishedAt: Date;
            resultStatus: BulkAsyncJobExecutionResultStatus;
            accountName: string;
            accountNumber: string;
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
                accountName: string;
                accountNumber: string;
            };
            build(input: z.infer<typeof SyncBankTransactionsWebsocketEvents.Finished.EventDataSchema>): {
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
                accountName: string;
                accountNumber: string;
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
                accountName: string;
                accountNumber: string;
            }, z.ZodObjectDef<{
                jobRequestId: z.ZodString;
                jobExecutionId: z.ZodString;
                nTotalItems: z.ZodNumber;
                accountName: z.ZodString;
                accountNumber: z.ZodString;
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
                accountName: string;
                accountNumber: string;
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
                accountName: string;
                accountNumber: string;
            };
        };
    };
}

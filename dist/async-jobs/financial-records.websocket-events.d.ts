import { z } from "zod";
export default class FinancialRecordsWebsocketEvents {
    static BulkCreateExtractionForWebApp: {
        new (): {};
        InvalidFileIntent: {
            new (): {};
            readonly eventName: "financial-records-bulk-create-extraction-for-web-app-invalid-file-intent";
            readonly EventDataSchema: z.ZodObject<{
                jobRequestId: z.ZodString;
                ordinalConfidenceScore: z.ZodString;
                reason: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                jobRequestId: string;
                ordinalConfidenceScore: string;
                reason: string;
            }, {
                jobRequestId: string;
                ordinalConfidenceScore: string;
                reason: string;
            }>;
            EventDataEntity: {
                new (): {
                    jobRequestId: string;
                    ordinalConfidenceScore: string;
                    reason: string;
                };
                build(input: z.infer<typeof FinancialRecordsWebsocketEvents.BulkCreateExtractionForWebApp.InvalidFileIntent.EventDataSchema>): {
                    jobRequestId: string;
                    ordinalConfidenceScore: string;
                    reason: string;
                };
                isZodDto: true;
                schema: z.ZodType<{
                    jobRequestId: string;
                    ordinalConfidenceScore: string;
                    reason: string;
                }, z.ZodObjectDef<{
                    jobRequestId: z.ZodString;
                    ordinalConfidenceScore: z.ZodString;
                    reason: z.ZodString;
                }, "strip", z.ZodTypeAny>, {
                    jobRequestId: string;
                    ordinalConfidenceScore: string;
                    reason: string;
                }>;
                create(input: unknown): {
                    jobRequestId: string;
                    ordinalConfidenceScore: string;
                    reason: string;
                };
            };
        };
        Failed: {
            new (): {};
            readonly eventName: "financial-records-bulk-create-extraction-for-web-app-failed";
            readonly EventDataSchema: z.ZodObject<{
                jobRequestId: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                jobRequestId: string;
                message: string;
            }, {
                jobRequestId: string;
                message: string;
            }>;
            EventDataEntity: {
                new (): {
                    jobRequestId: string;
                    message: string;
                };
                build(input: z.infer<typeof FinancialRecordsWebsocketEvents.BulkCreateExtractionForWebApp.Failed.EventDataSchema>): {
                    jobRequestId: string;
                    message: string;
                };
                isZodDto: true;
                schema: z.ZodType<{
                    jobRequestId: string;
                    message: string;
                }, z.ZodObjectDef<{
                    jobRequestId: z.ZodString;
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny>, {
                    jobRequestId: string;
                    message: string;
                }>;
                create(input: unknown): {
                    jobRequestId: string;
                    message: string;
                };
            };
        };
        StartProcessing: {
            new (): {};
            readonly eventName: "financial-records-bulk-create-extraction-for-web-app-start-processing";
            readonly EventDataSchema: z.ZodObject<{
                jobRequestId: z.ZodString;
                nFinancialRecords: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                jobRequestId: string;
                nFinancialRecords: number;
            }, {
                jobRequestId: string;
                nFinancialRecords: number;
            }>;
            EventDataEntity: {
                new (): {
                    jobRequestId: string;
                    nFinancialRecords: number;
                };
                build(input: z.infer<typeof FinancialRecordsWebsocketEvents.BulkCreateExtractionForWebApp.StartProcessing.EventDataSchema>): {
                    jobRequestId: string;
                    nFinancialRecords: number;
                };
                isZodDto: true;
                schema: z.ZodType<{
                    jobRequestId: string;
                    nFinancialRecords: number;
                }, z.ZodObjectDef<{
                    jobRequestId: z.ZodString;
                    nFinancialRecords: z.ZodNumber;
                }, "strip", z.ZodTypeAny>, {
                    jobRequestId: string;
                    nFinancialRecords: number;
                }>;
                create(input: unknown): {
                    jobRequestId: string;
                    nFinancialRecords: number;
                };
            };
        };
        Processing: {
            new (): {};
            readonly eventName: "financial-records-bulk-create-extraction-for-web-app-processing";
            readonly EventDataSchema: z.ZodObject<{
                jobRequestId: z.ZodString;
                nProcessedFinancialRecords: z.ZodNumber;
                nFinancialRecords: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                jobRequestId: string;
                nFinancialRecords: number;
                nProcessedFinancialRecords: number;
            }, {
                jobRequestId: string;
                nFinancialRecords: number;
                nProcessedFinancialRecords: number;
            }>;
            EventDataEntity: {
                new (): {
                    jobRequestId: string;
                    nFinancialRecords: number;
                    nProcessedFinancialRecords: number;
                };
                build(input: z.infer<typeof FinancialRecordsWebsocketEvents.BulkCreateExtractionForWebApp.Processing.EventDataSchema>): {
                    jobRequestId: string;
                    nFinancialRecords: number;
                    nProcessedFinancialRecords: number;
                };
                isZodDto: true;
                schema: z.ZodType<{
                    jobRequestId: string;
                    nFinancialRecords: number;
                    nProcessedFinancialRecords: number;
                }, z.ZodObjectDef<{
                    jobRequestId: z.ZodString;
                    nProcessedFinancialRecords: z.ZodNumber;
                    nFinancialRecords: z.ZodNumber;
                }, "strip", z.ZodTypeAny>, {
                    jobRequestId: string;
                    nFinancialRecords: number;
                    nProcessedFinancialRecords: number;
                }>;
                create(input: unknown): {
                    jobRequestId: string;
                    nFinancialRecords: number;
                    nProcessedFinancialRecords: number;
                };
            };
        };
        Finished: {
            new (): {};
            readonly eventName: "financial-records-bulk-create-extraction-for-web-app-finished";
            readonly EventDataSchema: z.ZodObject<{
                jobRequestId: z.ZodString;
                nProcessedFinancialRecords: z.ZodNumber;
                nFinancialRecords: z.ZodNumber;
                csvFileSignedUrl: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                jobRequestId: string;
                nFinancialRecords: number;
                nProcessedFinancialRecords: number;
                csvFileSignedUrl: string;
            }, {
                jobRequestId: string;
                nFinancialRecords: number;
                nProcessedFinancialRecords: number;
                csvFileSignedUrl: string;
            }>;
            EventDataEntity: {
                new (): {
                    jobRequestId: string;
                    nFinancialRecords: number;
                    nProcessedFinancialRecords: number;
                    csvFileSignedUrl: string;
                };
                build(input: z.infer<typeof FinancialRecordsWebsocketEvents.BulkCreateExtractionForWebApp.Finished.EventDataSchema>): {
                    jobRequestId: string;
                    nFinancialRecords: number;
                    nProcessedFinancialRecords: number;
                    csvFileSignedUrl: string;
                };
                isZodDto: true;
                schema: z.ZodType<{
                    jobRequestId: string;
                    nFinancialRecords: number;
                    nProcessedFinancialRecords: number;
                    csvFileSignedUrl: string;
                }, z.ZodObjectDef<{
                    jobRequestId: z.ZodString;
                    nProcessedFinancialRecords: z.ZodNumber;
                    nFinancialRecords: z.ZodNumber;
                    csvFileSignedUrl: z.ZodString;
                }, "strip", z.ZodTypeAny>, {
                    jobRequestId: string;
                    nFinancialRecords: number;
                    nProcessedFinancialRecords: number;
                    csvFileSignedUrl: string;
                }>;
                create(input: unknown): {
                    jobRequestId: string;
                    nFinancialRecords: number;
                    nProcessedFinancialRecords: number;
                    csvFileSignedUrl: string;
                };
            };
        };
    };
}

import { z } from "zod";
export default class ContactsWebsocketEvents {
    static BulkCreateExtractionForWebApp: {
        new (): {};
        InvalidFileIntent: {
            new (): {};
            readonly eventName: "contacts-bulk-create-extraction-for-web-app-invalid-file-intent";
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
                build(input: z.infer<typeof ContactsWebsocketEvents.BulkCreateExtractionForWebApp.InvalidFileIntent.EventDataSchema>): {
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
            readonly eventName: "contacts-bulk-create-extraction-for-web-app-failed";
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
                build(input: z.infer<typeof ContactsWebsocketEvents.BulkCreateExtractionForWebApp.Failed.EventDataSchema>): {
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
            readonly eventName: "contacts-bulk-create-extraction-for-web-app-start-processing";
            readonly EventDataSchema: z.ZodObject<{
                jobRequestId: z.ZodString;
                nContacts: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                jobRequestId: string;
                nContacts: number;
            }, {
                jobRequestId: string;
                nContacts: number;
            }>;
            EventDataEntity: {
                new (): {
                    jobRequestId: string;
                    nContacts: number;
                };
                build(input: z.infer<typeof ContactsWebsocketEvents.BulkCreateExtractionForWebApp.StartProcessing.EventDataSchema>): {
                    jobRequestId: string;
                    nContacts: number;
                };
                isZodDto: true;
                schema: z.ZodType<{
                    jobRequestId: string;
                    nContacts: number;
                }, z.ZodObjectDef<{
                    jobRequestId: z.ZodString;
                    nContacts: z.ZodNumber;
                }, "strip", z.ZodTypeAny>, {
                    jobRequestId: string;
                    nContacts: number;
                }>;
                create(input: unknown): {
                    jobRequestId: string;
                    nContacts: number;
                };
            };
        };
        Processing: {
            new (): {};
            readonly eventName: "contacts-bulk-create-extraction-for-web-app-processing";
            readonly EventDataSchema: z.ZodObject<{
                jobRequestId: z.ZodString;
                nProcessedContacts: z.ZodNumber;
                nContacts: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                jobRequestId: string;
                nContacts: number;
                nProcessedContacts: number;
            }, {
                jobRequestId: string;
                nContacts: number;
                nProcessedContacts: number;
            }>;
            EventDataEntity: {
                new (): {
                    jobRequestId: string;
                    nContacts: number;
                    nProcessedContacts: number;
                };
                build(input: z.infer<typeof ContactsWebsocketEvents.BulkCreateExtractionForWebApp.Processing.EventDataSchema>): {
                    jobRequestId: string;
                    nContacts: number;
                    nProcessedContacts: number;
                };
                isZodDto: true;
                schema: z.ZodType<{
                    jobRequestId: string;
                    nContacts: number;
                    nProcessedContacts: number;
                }, z.ZodObjectDef<{
                    jobRequestId: z.ZodString;
                    nProcessedContacts: z.ZodNumber;
                    nContacts: z.ZodNumber;
                }, "strip", z.ZodTypeAny>, {
                    jobRequestId: string;
                    nContacts: number;
                    nProcessedContacts: number;
                }>;
                create(input: unknown): {
                    jobRequestId: string;
                    nContacts: number;
                    nProcessedContacts: number;
                };
            };
        };
        Finished: {
            new (): {};
            readonly eventName: "contacts-bulk-create-extraction-for-web-app-finished";
            readonly EventDataSchema: z.ZodObject<{
                jobRequestId: z.ZodString;
                nProcessedContacts: z.ZodNumber;
                nContacts: z.ZodNumber;
                csvFileSignedUrl: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                jobRequestId: string;
                csvFileSignedUrl: string;
                nContacts: number;
                nProcessedContacts: number;
            }, {
                jobRequestId: string;
                csvFileSignedUrl: string;
                nContacts: number;
                nProcessedContacts: number;
            }>;
            EventDataEntity: {
                new (): {
                    jobRequestId: string;
                    csvFileSignedUrl: string;
                    nContacts: number;
                    nProcessedContacts: number;
                };
                build(input: z.infer<typeof ContactsWebsocketEvents.BulkCreateExtractionForWebApp.Finished.EventDataSchema>): {
                    jobRequestId: string;
                    csvFileSignedUrl: string;
                    nContacts: number;
                    nProcessedContacts: number;
                };
                isZodDto: true;
                schema: z.ZodType<{
                    jobRequestId: string;
                    csvFileSignedUrl: string;
                    nContacts: number;
                    nProcessedContacts: number;
                }, z.ZodObjectDef<{
                    jobRequestId: z.ZodString;
                    nProcessedContacts: z.ZodNumber;
                    nContacts: z.ZodNumber;
                    csvFileSignedUrl: z.ZodString;
                }, "strip", z.ZodTypeAny>, {
                    jobRequestId: string;
                    csvFileSignedUrl: string;
                    nContacts: number;
                    nProcessedContacts: number;
                }>;
                create(input: unknown): {
                    jobRequestId: string;
                    csvFileSignedUrl: string;
                    nContacts: number;
                    nProcessedContacts: number;
                };
            };
        };
    };
}

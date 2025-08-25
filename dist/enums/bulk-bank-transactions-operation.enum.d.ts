export declare enum BulkBankTransactionsOperation {
    ARCHIVE = "ARCHIVE",
    UNARCHIVE = "UNARCHIVE",
    UNRECONCILE = "UNRECONCILE",
    REQUEST_AI_SUGGESTION = "REQUEST_AI_SUGGESTION",
    CREATE_FROM_AI_SUGGESTION = "CREATE_FROM_AI_SUGGESTION",
    RECONCILE_FROM_AI_SUGGESTION = "RECONCILE_FROM_AI_SUGGESTION"
}
export declare function mapBulkBankTransactionsOperationToName(operation: BulkBankTransactionsOperation): string;

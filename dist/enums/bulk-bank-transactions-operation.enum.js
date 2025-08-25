"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkBankTransactionsOperation = void 0;
exports.mapBulkBankTransactionsOperationToName = mapBulkBankTransactionsOperationToName;
var BulkBankTransactionsOperation;
(function (BulkBankTransactionsOperation) {
    BulkBankTransactionsOperation["ARCHIVE"] = "ARCHIVE";
    BulkBankTransactionsOperation["UNARCHIVE"] = "UNARCHIVE";
    BulkBankTransactionsOperation["UNRECONCILE"] = "UNRECONCILE";
    BulkBankTransactionsOperation["REQUEST_AI_SUGGESTION"] = "REQUEST_AI_SUGGESTION";
    BulkBankTransactionsOperation["CREATE_FROM_AI_SUGGESTION"] = "CREATE_FROM_AI_SUGGESTION";
    BulkBankTransactionsOperation["RECONCILE_FROM_AI_SUGGESTION"] = "RECONCILE_FROM_AI_SUGGESTION";
})(BulkBankTransactionsOperation || (exports.BulkBankTransactionsOperation = BulkBankTransactionsOperation = {}));
function mapBulkBankTransactionsOperationToName(operation) {
    switch (operation) {
        case BulkBankTransactionsOperation.ARCHIVE:
            return "Arquivar";
        case BulkBankTransactionsOperation.UNARCHIVE:
            return "Desarquivar";
        case BulkBankTransactionsOperation.UNRECONCILE:
            return "Desconciliar";
        case BulkBankTransactionsOperation.REQUEST_AI_SUGGESTION:
            return "Solicitar sugestão da IA";
        case BulkBankTransactionsOperation.CREATE_FROM_AI_SUGGESTION:
            return "Criar novo lançamento (a partir da sugestão da IA)";
        case BulkBankTransactionsOperation.RECONCILE_FROM_AI_SUGGESTION:
            return "Conciliar com lançamento (a partir da sugestão da IA)";
    }
}
//# sourceMappingURL=bulk-bank-transactions-operation.enum.js.map
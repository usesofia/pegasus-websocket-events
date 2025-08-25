export enum BulkBankTransactionsOperation {
  ARCHIVE = 'ARCHIVE',
  UNARCHIVE = 'UNARCHIVE',
  UNRECONCILE = 'UNRECONCILE',
  REQUEST_AI_SUGGESTION = 'REQUEST_AI_SUGGESTION',
  CREATE_FROM_AI_SUGGESTION = 'CREATE_FROM_AI_SUGGESTION',
  RECONCILE_FROM_AI_SUGGESTION = 'RECONCILE_FROM_AI_SUGGESTION',
}

export function mapBulkBankTransactionsOperationToName(operation: BulkBankTransactionsOperation): string {
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

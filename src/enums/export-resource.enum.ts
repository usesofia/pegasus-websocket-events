export enum ExportResource {
  FINANCIAL_RECORDS = 'FINANCIAL_RECORDS',
  CONTACTS = 'CONTACTS',
  BANK_ACCOUNTS = 'BANK_ACCOUNTS',
  BANK_TRANSACTIONS = 'BANK_TRANSACTIONS',
  INSTALLMENT_FINANCIAL_RECORDS = 'INSTALLMENT_FINANCIAL_RECORDS',
  RECURRING_FINANCIAL_RECORDS = 'RECURRING_FINANCIAL_RECORDS',
  TAGS = 'TAGS',
  SUBCATEGORIES = 'SUBCATEGORIES',
} 

export function mapExportResourceToName(resource: ExportResource): string {
  switch (resource) {
    case ExportResource.FINANCIAL_RECORDS:
      return 'Lançamentos';
    case ExportResource.CONTACTS:
      return 'Contatos';
    case ExportResource.BANK_ACCOUNTS:
      return 'Contas Bancárias';
    case ExportResource.BANK_TRANSACTIONS:
      return 'Transações Bancárias';
    case ExportResource.INSTALLMENT_FINANCIAL_RECORDS:
      return 'Parcelamentos';
    case ExportResource.RECURRING_FINANCIAL_RECORDS:
      return 'Recorrências';
    case ExportResource.TAGS:
      return 'Tags';
    case ExportResource.SUBCATEGORIES:
      return 'Categorias';
  }
}

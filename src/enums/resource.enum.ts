export enum Resource {
  FINANCIAL_RECORDS = "FINANCIAL_RECORDS",
  CONTACTS = "CONTACTS",
  BANK_ACCOUNTS = "BANK_ACCOUNTS",
  BANK_TRANSACTIONS = "BANK_TRANSACTIONS",
  INSTALLMENT_FINANCIAL_RECORDS = "INSTALLMENT_FINANCIAL_RECORDS",
  RECURRING_FINANCIAL_RECORDS = "RECURRING_FINANCIAL_RECORDS",
  TAGS = "TAGS",
  SUBCATEGORIES = "SUBCATEGORIES",
}

export function mapResourceToName(resource: Resource): string {
  switch (resource) {
    case Resource.FINANCIAL_RECORDS:
      return "Lançamentos";
    case Resource.CONTACTS:
      return "Contatos";
    case Resource.BANK_ACCOUNTS:
      return "Contas Bancárias";
    case Resource.BANK_TRANSACTIONS:
      return "Transações Bancárias";
    case Resource.INSTALLMENT_FINANCIAL_RECORDS:
      return "Parcelamentos";
    case Resource.RECURRING_FINANCIAL_RECORDS:
      return "Recorrências";
    case Resource.TAGS:
      return "Tags";
    case Resource.SUBCATEGORIES:
      return "Categorias";
  }
}

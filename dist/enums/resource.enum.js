"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
exports.mapResourceToName = mapResourceToName;
var Resource;
(function (Resource) {
    Resource["FINANCIAL_RECORDS"] = "FINANCIAL_RECORDS";
    Resource["CONTACTS"] = "CONTACTS";
    Resource["BANK_ACCOUNTS"] = "BANK_ACCOUNTS";
    Resource["BANK_TRANSACTIONS"] = "BANK_TRANSACTIONS";
    Resource["INSTALLMENT_FINANCIAL_RECORDS"] = "INSTALLMENT_FINANCIAL_RECORDS";
    Resource["RECURRING_FINANCIAL_RECORDS"] = "RECURRING_FINANCIAL_RECORDS";
    Resource["TAGS"] = "TAGS";
    Resource["SUBCATEGORIES"] = "SUBCATEGORIES";
})(Resource || (exports.Resource = Resource = {}));
function mapResourceToName(resource) {
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
//# sourceMappingURL=resource.enum.js.map
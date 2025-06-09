"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileType = void 0;
exports.mapFileTypeToName = mapFileTypeToName;
var FileType;
(function (FileType) {
    FileType["CSV"] = "CSV";
    FileType["EXCEL"] = "EXCEL";
})(FileType || (exports.FileType = FileType = {}));
function mapFileTypeToName(fileType) {
    switch (fileType) {
        case FileType.CSV:
            return 'csv';
        case FileType.EXCEL:
            return 'excel';
    }
}
//# sourceMappingURL=file-type.enum.js.map
export enum ExportFileType {
  CSV = 'CSV',
  EXCEL = 'EXCEL',
} 

export function mapExportFileTypeToName(fileType: ExportFileType): string {
  switch (fileType) {
    case ExportFileType.CSV:
      return 'csv';
    case ExportFileType.EXCEL:
      return 'excel';
  }
}

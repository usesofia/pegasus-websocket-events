export enum FileType {
  CSV = "CSV",
  EXCEL = "EXCEL",
}

export function mapFileTypeToName(fileType: FileType): string {
  switch (fileType) {
    case FileType.CSV:
      return "csv";
    case FileType.EXCEL:
      return "excel";
  }
}

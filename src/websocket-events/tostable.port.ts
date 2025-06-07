export enum WebsocketEventToastType {
  default = "default",
  info = "info",
  warning = "warning",
  error = "error",
  success = "success",
  loading = "loading",
}

export interface WebsocketEventTostablePort {
  getType(): WebsocketEventToastType;
  getTitle(attempt: number): string; // Attempt 1 significa primeira tentativa, Attempt 2 significa segunda tentativa, etc.
  getDescription(attempt: number): string | undefined; // Attempt 1 significa primeira tentativa, Attempt 2 significa segunda tentativa, etc.
}

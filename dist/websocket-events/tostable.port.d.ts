export declare enum WebsocketEventToastType {
    default = "default",
    info = "info",
    warning = "warning",
    error = "error",
    success = "success",
    loading = "loading"
}
export interface WebsocketEventTostablePort {
    getType(): WebsocketEventToastType;
    getTitle(attempt: number): string;
    getDescription(attempt: number): string | undefined;
}

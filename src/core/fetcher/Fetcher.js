"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetcher = void 0;
const form_data_1 = __importDefault(require("form-data"));
const qs_1 = __importDefault(require("qs"));
const INITIAL_RETRY_DELAY = 1;
const MAX_RETRY_DELAY = 60;
const DEFAULT_MAX_RETRIES = 2;
async function fetcherImpl(args) {
    const headers = {};
    if (args.body !== undefined && args.contentType != null) {
        headers["Content-Type"] = args.contentType;
    }
    if (args.headers != null) {
        for (const [key, value] of Object.entries(args.headers)) {
            if (value != null) {
                headers[key] = value;
            }
        }
    }
    const url = Object.keys(args.queryParameters ?? {}).length > 0
        ? `${args.url}?${qs_1.default.stringify(args.queryParameters, { arrayFormat: "repeat" })}`
        : args.url;
    let body = undefined;
    if (args.body instanceof form_data_1.default) {
        // @ts-expect-error
        body = args.body;
    }
    else {
        body = JSON.stringify(args.body);
    }
    const fetchFn = typeof fetch == "function" ? fetch : require("node-fetch");
    const makeRequest = async () => {
        const controller = new AbortController();
        let abortId = undefined;
        if (args.timeoutMs != null) {
            abortId = setTimeout(() => controller.abort(), args.timeoutMs);
        }
        const response = await fetchFn(url, {
            method: args.method,
            headers,
            body,
            signal: controller.signal,
            credentials: args.withCredentials ? "include" : undefined,
        });
        if (abortId != null) {
            clearTimeout(abortId);
        }
        return response;
    };
    try {
        let response = await makeRequest();
        for (let i = 0; i < (args.maxRetries ?? DEFAULT_MAX_RETRIES); ++i) {
            if (response.status === 408 ||
                response.status === 409 ||
                response.status === 429 ||
                response.status >= 500) {
                const delay = Math.min(INITIAL_RETRY_DELAY * Math.pow(i, 2), MAX_RETRY_DELAY);
                await new Promise((resolve) => setTimeout(resolve, delay));
                response = await makeRequest();
            }
            else {
                break;
            }
        }
        let body;
        if (response.body != null && args.responseType === "blob") {
            body = await response.blob();
        }
        else if (response.body != null && args.responseType === "streaming") {
            body = response.body;
        }
        else {
            const text = await response.text();
            if (text.length > 0) {
                try {
                    body = JSON.parse(text);
                }
                catch (err) {
                    return {
                        ok: false,
                        error: {
                            reason: "non-json",
                            statusCode: response.status,
                            rawBody: text,
                        },
                    };
                }
            }
        }
        if (response.status >= 200 && response.status < 400) {
            return {
                ok: true,
                body: body,
                headers: response.headers,
            };
        }
        else {
            return {
                ok: false,
                error: {
                    reason: "status-code",
                    statusCode: response.status,
                    body,
                },
            };
        }
    }
    catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
            return {
                ok: false,
                error: {
                    reason: "timeout",
                },
            };
        }
        else if (error instanceof Error) {
            return {
                ok: false,
                error: {
                    reason: "unknown",
                    errorMessage: error.message,
                },
            };
        }
        return {
            ok: false,
            error: {
                reason: "unknown",
                errorMessage: JSON.stringify(error),
            },
        };
    }
}
exports.fetcher = fetcherImpl;

"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrevianApiError = void 0;
class BrevianApiError extends Error {
    statusCode;
    body;
    constructor({ message, statusCode, body }) {
        super(buildMessage({ message, statusCode, body }));
        Object.setPrototypeOf(this, BrevianApiError.prototype);
        if (statusCode != null) {
            this.statusCode = statusCode;
        }
        if (body !== undefined) {
            this.body = body;
        }
    }
}
exports.BrevianApiError = BrevianApiError;
function buildMessage({ message, statusCode, body, }) {
    let lines = [];
    if (message != null) {
        lines.push(message);
    }
    if (statusCode != null) {
        lines.push(`Status code: ${statusCode.toString()}`);
    }
    if (body != null) {
        lines.push(`Body: ${JSON.stringify(body, undefined, 2)}`);
    }
    return lines.join("\n");
}

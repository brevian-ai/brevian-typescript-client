/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import * as BrevianApi from "./api";
import urlJoin from "url-join";
import * as errors from "./errors";

export declare namespace BrevianApiClient {
    interface Options {
        environment: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class BrevianApiClient {
    constructor(protected readonly _options: BrevianApiClient.Options) {}

    /**
     * @throws {@link BrevianApi.ForbiddenError}
     * @throws {@link BrevianApi.TooManyRequestsError}
     * @throws {@link BrevianApi.InternalServerError}
     *
     * @example
     *     await brevianApi.postChat({
     *         messages: [{
     *                 role: BrevianApi.PostChatRequestMessagesItemRole.User,
     *                 content: "content"
     *             }]
     *     })
     */
    public async postChat(
        request: BrevianApi.PostChatRequest,
        requestOptions?: BrevianApiClient.RequestOptions
    ): Promise<BrevianApi.PostChatResponse> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "chat"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as BrevianApi.PostChatResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 403:
                    throw new BrevianApi.ForbiddenError(_response.error.body as BrevianApi.ForbiddenErrorBody);
                case 429:
                    throw new BrevianApi.TooManyRequestsError(
                        _response.error.body as BrevianApi.TooManyRequestsErrorBody
                    );
                case 500:
                    throw new BrevianApi.InternalServerError(
                        _response.error.body as BrevianApi.InternalServerErrorBody
                    );
                default:
                    throw new errors.BrevianApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BrevianApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BrevianApiTimeoutError();
            case "unknown":
                throw new errors.BrevianApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link BrevianApi.BadRequestError}
     * @throws {@link BrevianApi.NotFoundError}
     *
     * @example
     *     await brevianApi.getCitation("chatId", "messageId")
     */
    public async getCitation(
        chatId: string,
        messageId: string,
        requestOptions?: BrevianApiClient.RequestOptions
    ): Promise<BrevianApi.SubQueryMetadata[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `chat/${chatId}/messages/${messageId}/citations`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as BrevianApi.SubQueryMetadata[];
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new BrevianApi.BadRequestError(_response.error.body as BrevianApi.ErrorResponse);
                case 404:
                    throw new BrevianApi.NotFoundError(_response.error.body as BrevianApi.ErrorResponse);
                default:
                    throw new errors.BrevianApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BrevianApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BrevianApiTimeoutError();
            case "unknown":
                throw new errors.BrevianApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}

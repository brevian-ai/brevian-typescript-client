/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "./core";
import * as BrevianApi from "./api";
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
export declare class BrevianApiClient {
    protected readonly _options: BrevianApiClient.Options;
    constructor(_options: BrevianApiClient.Options);
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
    postChat(request: BrevianApi.PostChatRequest, requestOptions?: BrevianApiClient.RequestOptions): Promise<BrevianApi.PostChatResponse>;
    protected _getAuthorizationHeader(): Promise<string>;
}

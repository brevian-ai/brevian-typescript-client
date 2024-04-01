/* tslint:disable */
/* eslint-disable */
/**
 * BREVIAN API
 * API Interface for interacting with BREVIAN AI Platform.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface ChatRequest
 */
export interface ChatRequest {
    /**
     * 
     * @type {Array<PostChat200ResponseChoicesInnerMessage>}
     * @memberof ChatRequest
     */
    'messages': Array<PostChat200ResponseChoicesInnerMessage>;
    /**
     * 
     * @type {string}
     * @memberof ChatRequest
     */
    'agentId'?: string;
}
/**
 * 
 * @export
 * @interface Choice
 */
export interface Choice {
    /**
     * 
     * @type {number}
     * @memberof Choice
     */
    'index': number;
    /**
     * 
     * @type {string}
     * @memberof Choice
     */
    'finish_reason': string;
    /**
     * 
     * @type {PostChat200ResponseChoicesInnerMessage}
     * @memberof Choice
     */
    'message': PostChat200ResponseChoicesInnerMessage;
}
/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'error': string;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'path'?: string;
    /**
     * 
     * @type {number}
     * @memberof ErrorResponse
     */
    'status'?: number;
}
/**
 * 
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * 
     * @type {MessageRoleEnum}
     * @memberof Message
     */
    'role': MessageRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    'content': string;
}


/**
 * 
 * @export
 * @enum {string}
 */

export const MessageRoleEnum = {
    User: 'user',
    Assistant: 'assistant'
} as const;

export type MessageRoleEnum = typeof MessageRoleEnum[keyof typeof MessageRoleEnum];


/**
 * 
 * @export
 * @interface PostChat200Response
 */
export interface PostChat200Response {
    /**
     * 
     * @type {string}
     * @memberof PostChat200Response
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof PostChat200Response
     */
    'conversation_id': string;
    /**
     * 
     * @type {string}
     * @memberof PostChat200Response
     */
    'created': string;
    /**
     * 
     * @type {string}
     * @memberof PostChat200Response
     */
    'model': string;
    /**
     * 
     * @type {Array<PostChat200ResponseChoicesInner>}
     * @memberof PostChat200Response
     */
    'choices': Array<PostChat200ResponseChoicesInner>;
    /**
     * 
     * @type {PostChat200ResponseUsage}
     * @memberof PostChat200Response
     */
    'usage': PostChat200ResponseUsage;
}
/**
 * 
 * @export
 * @interface PostChat200ResponseChoicesInner
 */
export interface PostChat200ResponseChoicesInner {
    /**
     * 
     * @type {number}
     * @memberof PostChat200ResponseChoicesInner
     */
    'index': number;
    /**
     * 
     * @type {string}
     * @memberof PostChat200ResponseChoicesInner
     */
    'finish_reason': string;
    /**
     * 
     * @type {PostChat200ResponseChoicesInnerMessage}
     * @memberof PostChat200ResponseChoicesInner
     */
    'message': PostChat200ResponseChoicesInnerMessage;
}
/**
 * 
 * @export
 * @interface PostChat200ResponseChoicesInnerMessage
 */
export interface PostChat200ResponseChoicesInnerMessage {
    /**
     * 
     * @type {MessageRoleEnum}
     * @memberof PostChat200ResponseChoicesInnerMessage
     */
    'role': MessageRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof PostChat200ResponseChoicesInnerMessage
     */
    'content': string;
}


/**
 * 
 * @export
 * @interface PostChat200ResponseUsage
 */
export interface PostChat200ResponseUsage {
    /**
     * 
     * @type {number}
     * @memberof PostChat200ResponseUsage
     */
    'prompt_tokens': number;
    /**
     * 
     * @type {number}
     * @memberof PostChat200ResponseUsage
     */
    'completion_tokens': number;
    /**
     * 
     * @type {number}
     * @memberof PostChat200ResponseUsage
     */
    'total_tokens': number;
}
/**
 * 
 * @export
 * @interface PostChat403Response
 */
export interface PostChat403Response {
    /**
     * 
     * @type {string}
     * @memberof PostChat403Response
     */
    'error': string;
    /**
     * 
     * @type {string}
     * @memberof PostChat403Response
     */
    'path'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostChat403Response
     */
    'status'?: number;
}
/**
 * 
 * @export
 * @interface PostChatRequest
 */
export interface PostChatRequest {
    /**
     * 
     * @type {Array<PostChatRequestMessagesInner>}
     * @memberof PostChatRequest
     */
    'messages': Array<PostChatRequestMessagesInner>;
    /**
     * 
     * @type {string}
     * @memberof PostChatRequest
     */
    'agentId'?: string;
}
/**
 * 
 * @export
 * @interface PostChatRequestMessagesInner
 */
export interface PostChatRequestMessagesInner {
    /**
     * 
     * @type {string}
     * @memberof PostChatRequestMessagesInner
     */
    'role': PostChatRequestMessagesInnerRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof PostChatRequestMessagesInner
     */
    'content': string;
}

export const PostChatRequestMessagesInnerRoleEnum = {
    User: 'user',
    Assistant: 'assistant'
} as const;

export type PostChatRequestMessagesInnerRoleEnum = typeof PostChatRequestMessagesInnerRoleEnum[keyof typeof PostChatRequestMessagesInnerRoleEnum];

/**
 * 
 * @export
 * @interface SubQueryMetadata
 */
export interface SubQueryMetadata {
    /**
     * 
     * @type {string}
     * @memberof SubQueryMetadata
     */
    'message_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubQueryMetadata
     */
    'conversation_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubQueryMetadata
     */
    'sub_question'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubQueryMetadata
     */
    'retrieval_type'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubQueryMetadata
     */
    'sub_answer'?: string;
    /**
     * 
     * @type {Array<UnifiedCitation>}
     * @memberof SubQueryMetadata
     */
    'citations'?: Array<UnifiedCitation>;
}
/**
 * 
 * @export
 * @interface UnifiedCitation
 */
export interface UnifiedCitation {
    /**
     * 
     * @type {object}
     * @memberof UnifiedCitation
     */
    'structured_response'?: object;
    /**
     * 
     * @type {string}
     * @memberof UnifiedCitation
     */
    'sql_query'?: string;
    /**
     * 
     * @type {string}
     * @memberof UnifiedCitation
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof UnifiedCitation
     */
    'url'?: string;
    /**
     * 
     * @type {number}
     * @memberof UnifiedCitation
     */
    'source_index'?: number;
    /**
     * 
     * @type {string}
     * @memberof UnifiedCitation
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UnifiedCitation
     */
    'page_content'?: string;
}
/**
 * 
 * @export
 * @interface Usage
 */
export interface Usage {
    /**
     * 
     * @type {number}
     * @memberof Usage
     */
    'promptTokens': number;
    /**
     * 
     * @type {number}
     * @memberof Usage
     */
    'completionTokens': number;
    /**
     * 
     * @type {number}
     * @memberof Usage
     */
    'totalTokens': number;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get citations for a message
         * @param {string} chatId The ID of the chat
         * @param {string} messageId The ID of the message to retrieve citations for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCitation: async (chatId: string, messageId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatId' is not null or undefined
            assertParamExists('getCitation', 'chatId', chatId)
            // verify required parameter 'messageId' is not null or undefined
            assertParamExists('getCitation', 'messageId', messageId)
            const localVarPath = `/chat/{chatId}/messages/{messageId}/citations`
                .replace(`{${"chatId"}}`, encodeURIComponent(String(chatId)))
                .replace(`{${"messageId"}}`, encodeURIComponent(String(messageId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Handle a chat request
         * @param {PostChatRequest} postChatRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postChat: async (postChatRequest: PostChatRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'postChatRequest' is not null or undefined
            assertParamExists('postChat', 'postChatRequest', postChatRequest)
            const localVarPath = `/chat`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postChatRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get citations for a message
         * @param {string} chatId The ID of the chat
         * @param {string} messageId The ID of the message to retrieve citations for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCitation(chatId: string, messageId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SubQueryMetadata>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCitation(chatId, messageId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.getCitation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Handle a chat request
         * @param {PostChatRequest} postChatRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postChat(postChatRequest: PostChatRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostChat200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postChat(postChatRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.postChat']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Get citations for a message
         * @param {string} chatId The ID of the chat
         * @param {string} messageId The ID of the message to retrieve citations for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCitation(chatId: string, messageId: string, options?: any): AxiosPromise<Array<SubQueryMetadata>> {
            return localVarFp.getCitation(chatId, messageId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Handle a chat request
         * @param {PostChatRequest} postChatRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postChat(postChatRequest: PostChatRequest, options?: any): AxiosPromise<PostChat200Response> {
            return localVarFp.postChat(postChatRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get citations for a message
     * @param {string} chatId The ID of the chat
     * @param {string} messageId The ID of the message to retrieve citations for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getCitation(chatId: string, messageId: string, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getCitation(chatId, messageId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Handle a chat request
     * @param {PostChatRequest} postChatRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postChat(postChatRequest: PostChatRequest, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).postChat(postChatRequest, options).then((request) => request(this.axios, this.basePath));
    }
}




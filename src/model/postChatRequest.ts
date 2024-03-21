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

import { RequestFile } from './models';
import { PostChatRequestMessagesInner } from './postChatRequestMessagesInner';

export class PostChatRequest {
    'messages': Array<PostChatRequestMessagesInner>;
    'agentId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<PostChatRequestMessagesInner>"
        },
        {
            "name": "agentId",
            "baseName": "agentId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PostChatRequest.attributeTypeMap;
    }
}


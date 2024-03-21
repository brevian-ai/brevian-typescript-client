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

export class Message {
    'role': Message.RoleEnum;
    'content': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "role",
            "baseName": "role",
            "type": "Message.RoleEnum"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Message.attributeTypeMap;
    }
}

export namespace Message {
    export enum RoleEnum {
        User = <any> 'user',
        Assistant = <any> 'assistant'
    }
}

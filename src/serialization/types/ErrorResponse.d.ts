/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as BrevianApi from "../../api";
import * as core from "../../core";
export declare const ErrorResponse: core.serialization.ObjectSchema<serializers.ErrorResponse.Raw, BrevianApi.ErrorResponse>;
export declare namespace ErrorResponse {
    interface Raw {
        error: string;
        path?: string | null;
        status?: number | null;
    }
}

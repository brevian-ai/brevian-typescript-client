/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as BrevianApi from "../../api";
import * as core from "../../core";
export declare const PostChatRequestMessagesItemRole: core.serialization.Schema<serializers.PostChatRequestMessagesItemRole.Raw, BrevianApi.PostChatRequestMessagesItemRole>;
export declare namespace PostChatRequestMessagesItemRole {
    type Raw = "user" | "assistant";
}

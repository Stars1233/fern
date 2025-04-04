/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const RuntimeError: core.serialization.ObjectSchema<serializers.RuntimeError.Raw, SeedTrace.RuntimeError> =
    core.serialization.object({
        message: core.serialization.string(),
    });

export declare namespace RuntimeError {
    export interface Raw {
        message: string;
    }
}

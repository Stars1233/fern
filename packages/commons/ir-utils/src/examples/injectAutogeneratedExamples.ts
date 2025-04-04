import { IntermediateRepresentation } from "@fern-api/ir-sdk";

import { generateEndpointExample } from "./generator/generateSuccessEndpointExample";
import { generateWebSocketExample } from "./generator/generateWebSocketExample";

export interface ExampleGenerationArgs {
    disabled: boolean;
    includeOptionalRequestPropertyExamples?: boolean;
    skipAutogenerationIfManualExamplesExist?: boolean;
}

export function injectAutogeneratedExamples({
    ir,
    exampleGeneration
}: {
    ir: Omit<IntermediateRepresentation, "sdkConfig" | "subpackages" | "rootPackage">;
    exampleGeneration: ExampleGenerationArgs;
}): Omit<IntermediateRepresentation, "sdkConfig" | "subpackages" | "rootPackage"> {
    for (const [_, service] of Object.entries(ir.services)) {
        for (const endpoint of service.endpoints) {
            if (
                endpoint.userSpecifiedExamples.length > 0 &&
                exampleGeneration?.skipAutogenerationIfManualExamplesExist === true
            ) {
                continue;
            }
            const generatedExample = generateEndpointExample({
                ir,
                service,
                endpoint,
                typeDeclarations: ir.types,
                skipOptionalRequestProperties: exampleGeneration?.includeOptionalRequestPropertyExamples ? false : true,
                generationResponse: { type: "success" }
            });
            if (generatedExample.type === "failure") {
                continue;
            }
            const { example } = generatedExample;
            endpoint.autogeneratedExamples = [{ example }];
        }
    }
    for (const [_, channel] of Object.entries(ir.websocketChannels ?? {})) {
        if (channel.examples.length > 0 && exampleGeneration?.skipAutogenerationIfManualExamplesExist === true) {
            continue;
        }
        const generatedExample = generateWebSocketExample({
            ir,
            channel,
            typeDeclarations: ir.types,
            skipOptionalRequestProperties: exampleGeneration?.includeOptionalRequestPropertyExamples ? false : true
        });
        if (generatedExample.type === "failure") {
            continue;
        }
        const { example } = generatedExample;
        channel.examples = [...channel.examples, example];
    }
    return ir;
}

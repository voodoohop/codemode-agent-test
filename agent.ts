import { stepCountIs } from "ai";

// Staging test for codemode(): the model gets one tool that runs JavaScript
// calling the Pollinations MCP tools.
export default async function ({ model, respond, mcp, codemode }) {
    return respond({
        model: model("openai"),
        instructions:
            "Answer questions about Pollinations models. Use the code tool to call the tools and compute the answer in one step.",
        tools: { code: await codemode(await mcp.tools("pollinations")) },
        stopWhen: stepCountIs(4),
    });
}

// import OpenAI from "openai";
const OpenAI=require('openai');

const openai = new OpenAI({
    apiKey:"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"
});

const main=async()=>{
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: "Say this is a test" }],
        model: "gpt-3.5-turbo",
    });
}

main();
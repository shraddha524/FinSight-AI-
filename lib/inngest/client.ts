import { Inngest} from "inngest";

export const inngest = new Inngest({
    id: 'finsight-ai',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! }}
})

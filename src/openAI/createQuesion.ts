import {ChatOpenAI} from "@langchain/openai"
import {HumanMessage} from "@langchain/core/messages"
import "dotenv/config"

const test = async () => {
	const response = await fetch("http://localhost:3000/proxy", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			model: "gpt-3.5-turbo",
			messages: [{role: "user", content: "司馬遼太郎の代表作は何ですか？"}],
		}),
	})

	if (!response.ok) {
		throw new Error("Network response was not ok")
	}

	const data = await response.json()
	return data
}

export const run = async () => {
	try {
		const result = await test()
		console.log("Model Result:", result)
	} catch (error) {
		console.error("Error:", error)
	}
}

run()

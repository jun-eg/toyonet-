import express from "express"
import request from "request"
import dotenv from "dotenv"
const app = express()
const PORT = 3000

dotenv.config()

app.use(express.json())

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
})

app.post("/proxy", (req, res) => {
	const url = process.env.BASE_URL

	const options = {
		url: url,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
		},
		body: JSON.stringify(req.body),
	}

	request(options, (error, response, body) => {
		if (error) {
			return res.status(500).json({error: error.toString()})
		}
		res.status(response.statusCode).json(JSON.parse(body))
	})
})

app.listen(PORT, () => {
	console.log(`Proxy server is running on http://localhost:${PORT}`)
})

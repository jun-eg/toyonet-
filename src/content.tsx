import type {PlasmoCSConfig, PlasmoGetOverlayAnchor} from "plasmo"
import {run} from "./openAI/createQuesion.js"
import {ChatOpenAI} from "@langchain/openai"
import {HumanMessage} from "@langchain/core/messages"

export const config: PlasmoCSConfig = {
	matches: ["https://www.ace.toyo.ac.jp/ct/*"],
}

let element: HTMLElement = null

window.addEventListener("load", () => {
	element = document.querySelector(".articletext.querypaper") as HTMLElement
})

const copy = () => {
	navigator.clipboard.writeText(element.innerText)
}
console.log("test", run())

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
	document.querySelector("#queryinnerframe > div.queryv4 > table > tbody > tr.title > th")

const CustomButton = () => {
	return (
		<button type="button" onClick={copy}>
			copy
		</button>
	)
}
export default CustomButton

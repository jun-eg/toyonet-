import type {PlasmoCSConfig, PlasmoGetOverlayAnchor} from "plasmo"

export const config: PlasmoCSConfig = {
	matches: ["https://www.ace.toyo.ac.jp/ct/*"],
}

let element: HTMLElement = null

window.addEventListener("load", () => {
	element = document.querySelector(".articletext.querypaper") as HTMLElement
	console.log(element.innerText)
})

const copy = () => {
	navigator.clipboard.writeText(element.innerText)
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
	document.querySelector("#queryinnerframe > div.queryv4.query-drill > table > tbody > tr:nth-child(2) > td")

const CustomButton = () => {
	return <button type="button">copy</button>
}
export default CustomButton

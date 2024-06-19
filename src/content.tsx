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
	document.querySelector(
		"#container > div.pagebody > div:nth-child(1) > div.pageheader-course.pageheader-courseV2.pageheader-course-s.pageheader-course-sV2 > div > div.course-menu.course-menuV2",
	)

const CustomButton = () => {
	return (
		<button type="button" onClick={copy}>
			copy
		</button>
	)
}
export default CustomButton

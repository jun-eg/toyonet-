import type {PlasmoCSConfig} from "plasmo"

export const config: PlasmoCSConfig = {
	matches: ["https://www.ace.toyo.ac.jp/ct/*"],
}

window.addEventListener("load", () => {
	const element = document.querySelector(".articletext.querypaper") as HTMLElement
	element.style.backgroundColor = "yellow"
	console.log(element)

	const textContent = getElement(element)
	console.log(textContent)
})

function getElement(element) {
	const result = {
		tag: element.tagName,
		text:
			element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE
				? element.textContent.trim()
				: "",
		children: [],
	}

	element.childNodes.forEach((child) => {
		if (child.nodeType === Node.ELEMENT_NODE) {
			result.children.push(getElement(child))
		} else if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== "") {
			result.children.push({
				tag: "#text",
				text: child.textContent.trim(),
				children: [],
			})
		}
	})

	return result
}

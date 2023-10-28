import { parse, type, prompt, input } from "./io.js";
import pause from "./pause.js";
import alert from "./alert.js";
import say from "./speak.js";
import { intro, outro} from '../commands/fallout/index.mjs'

const FAST = {
	wait: 15,
	initialWait: 100
};


function addStylesheet(href) {
	let head = document.getElementsByTagName("HEAD")[0];

	// Create new link Element
	let link = document.createElement("link");

	// set the attributes for link element
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = href;

	// Append link element to HTML head
	head.appendChild(link);
}


/** Boot screen */
export async function boot() {

main()
}

/** Login screen */
export async function login() {
	
}


export async function main() {
  let command = await input();
  try {
    if (command == "VOLTAR") {
      addStylesheet(`commands/fallout/fallout.css`);
      loadTemplates(`commands/fallout/fallout.html`);
      outro();
    } else {
      // Send the command to ChatGPT and get a response
      const response = await requestToChatGPT(command);
      await type(response);
    }
  } catch (e) {
    if (e.message) await type(e.message);
  }
  main();
}

// Function to make a request to ChatGPT
async function requestToChatGPT(inputText) {
  // You should replace 'YOUR_API_KEY' and 'YOUR_CHATGPT_ENDPOINT' with your actual API key and endpoint
  const apiKey = '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';
  const endpoint = 'https://api.openai.com/v1/chat/completions';
  
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ text: inputText }),
  });
  console.log("respons" + response)

  const result = await response.json();
  return result.choices[0].text
  
  
}
export function addClasses(el, ...cls) {
	let list = [...cls].filter(Boolean);
	el.classList.add(...list);
}

export function getScreen(...cls) {
	let div = document.createElement("div");
	addClasses(div, "fullscreen", ...cls);
	document.querySelector("#crt").appendChild(div);
	return div;
}

export function toggleFullscreen(isFullscreen) {
	document.body.classList.toggle("fullscreen", isFullscreen);
}

/** Attempts to load template HTML from the given path and includes them in the <head>. */
export async function loadTemplates(path) {
	let txt = await fetch(path).then((res) => res.text());
	let html = new DOMParser().parseFromString(txt, "text/html");
	let templates = html.querySelectorAll("template");

	templates.forEach((template) => {
		document.head.appendChild(template);
	});
}

/** Clones the template and adds it to the container. */
export async function addTemplate(id, container, options = {}) {
	let template = document.querySelector(`template#${id}`);
	if (!template) {
		throw Error("Template not found");
	}
	// Clone is the document fragment of the template
	let clone = document.importNode(template.content, true);

	if (template.dataset.type) {
		await type(clone.textContent, options, container);
	} else {
		container.appendChild(clone);
	}

	// We cannot return clone here
	// https://stackoverflow.com/questions/27945721/how-to-clone-and-modify-from-html5-template-tag
	return container.childNodes;
}

/** Creates a new screen and loads the given template into it. */
export async function showTemplateScreen(id) {
	let screen = getScreen(id);
	await addTemplate(id, screen);
	return screen;
}

/**
 * Creates an element and adds it to the given container (or terminal screen if undefined).
 * @param {String} type The type of element to create.
 * @param {Element} container The container to add the created element to.
 * @param {String} cls The class to apply to the created element.
 * @param {Object} attrs Extra attributes to set on the element.
 */
export function el(
	type,
	container = document.querySelector(".terminal"),
	cls = "",
	attrs
) {
	let el = document.createElement(type);
	addClasses(el, cls);

	container.appendChild(el);

	if (attrs) {
		Object.entries(attrs).forEach(([key, value]) => {
			el.setAttribute(key, value);
		});
	}
	return el;
}

/**
 * Creates a <div> and adds it to the screen.
 * @param {Element} container The container to add the created element to.
 * @param {String} cls The class to apply to the created element.
 */
export function div(...args) {
	return el("div", ...args);
}

export function clear(screen = document.querySelector(".terminal")) {
	screen.innerHTML = "";
}

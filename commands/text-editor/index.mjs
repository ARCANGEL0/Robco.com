import { clear, el } from "util/screens.js";
import { moveCaretToEnd } from "util/io.js";
import { typeSound } from "sound";
import debounce from 'util/debounce.js';

const output = "Press CTRL+C to exit";

const KEY_TEXT_EDITOR = 'text-editor';

const debouncedSave = debounce((value) => {
    localStorage.setItem(KEY_TEXT_EDITOR, value)
}, 100);

async function textEditor() {

	return new Promise(resolve => {
        let previous = localStorage.getItem(KEY_TEXT_EDITOR) || '';

		clear();

        let typer = el('span');
        typer.innerHTML = previous;

        const onKeyDown = async event => {
			typeSound();
			if (event.key === 'c' && event.ctrlKey) {
                event.preventDefault();
				// Ctrl+C => exit
				clear();
                resolve();
            } else {
                debouncedSave(typer.innerHTML);
            }
		}
		const onClick = () => {
			moveCaretToEnd(typer);
		}
		typer.classList.add("typer", "active");
		typer.setAttribute("contenteditable", true);
		typer.addEventListener("click", onClick);
		typer.addEventListener("keydown", onKeyDown);
		typer.focus();
	});
}

export { output };

export default textEditor;

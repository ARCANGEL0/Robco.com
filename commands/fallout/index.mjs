// Inspiration:
// - https://youtu.be/jDJHtLCHuAg
// - http://aramor.epizy.com/fallout-terminal/password?diff=1
import { getScreen, clear } from "../../util/screens.js";
import {parse, type } from "../../util/io.js";
import Game from './Game.mjs';
import pause from "../../util/pause.js";

// Fast config for the typer
const FAST = {
	wait: 15,
	initialWait: 100
};

// The main function, shows intro screen and the game screen
async function command() {
	clear();
	
	let win = await new Promise(resolve => {
		new Game({onQuit: resolve});
	});

	if (win) {
		await outro();
	} else {
		return await locked();
	}	
	
	return Promise.resolve();
}

export async function intro() {
	let intro = getScreen("intro");

	await type("Welcome to ROBCO Industries (TM) Termlink", FAST, intro);

	await type(">SET TERMINAL/INQUIRE", {}, intro);

	await type("RIT-V300", FAST, intro);

	await type(
		[
			">SET FILE/PROTECTION=OWNER:RWED ACCOUNTS.F",
			">SET HALT logout/MAINT"
		],
		{ newlineWait: 200 },
		intro
	);

	await type(
		[
			"Initializing Robco Industries(TM) MF Boot Agent v2.3.0",
			"RETROS BIOS",
			"RBIOS-4.02.08.00 52EE5.E7.E8",
			"Copyright 2201-2203 Robco Ind.",
			"Uppermem: 64 KB",
			"Root (5A8)",
			"Maintenance Mode"
		],
		FAST,
		intro
	);

	await type(">RUN DEBUG/ACCOUNTS.F", { finalWait: 1000 }, intro);

	intro.remove();
	
	await parse("fallout")
}
 async function locked() {
	let locked = getScreen("locked");

	await type(
		["Terminal locked", " ", "Please contact an administrator"],
		{ useContainer: false },
		locked
	);

	await pause(50000);
	locked.remove();

	return Promise.resolve();
}

// Outro shows screen with buttons to logout (calls game()) or exit
async function outro() {
	let outro = getScreen("outro");

	await new Promise(async resolve => {
		await type(
			[
				"        ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM",
				`          COPYRIGHT 2075-2077 ROBCO INDUSTRIES`, `                         -SERVER 6- `, 
				`____________________________________________________`
			],
			FAST,
			outro
		);

		await type("> Password accepted", { typerClass: "end" }, outro);



let contato = document.createElement("a");
		contato.innerText = "[CONTACT]";
		contato.href = "#";
		contato.onclick = () => {
			// remove all a tags and put a text with p and an a tag in the end to take back to preciois page.. Remove text and restore a tag buttons 
			   // Create a <p> element with a message
    const message = document.createElement('p');
    message.innerText = "Contact info:\n\n ";
const contactTable = document.createElement('table');
contactTable.style.borderCollapse = 'collapse';

// Contact entries
const contacts = [
    { type: 'GitHub', name:'ARCANGEL0', link: 'https://github.com/ARCANGEL0/' },
    { type: 'WhatsApp/Phone ', name: '+351 927 285 125', link: 'https://api.whatsapp.com/send?phone=351927285125' },
    { type: 'Website',name: 'LNA Digital', link: 'https://lnadigital.com' },
    { type: 'Email',name:'Henry.arcangello@gmail.com*', link: 'mailto:rick_arcangelo@hotmail.com,henry.arcangello@proton.me,henry.arcangello@gmail.com' },
    { type: 'LinkedIn', name:'Luis Henrique CB Arcangelo', link: 'https://www.linkedin.com/in/henrique-carreira-b-arcangelo-7965841bb/' },
    { type: 'Hack The Box', name:'HenryNx', link: 'https://app.hackthebox.com/profile/1276132' },
];

contacts.forEach(contact => {
    const row = contactTable.insertRow();
    const typeCell = row.insertCell();
    const linkCell = row.insertCell();

    typeCell.innerText = contact.type;
    typeCell.style.padding = '5px';
    typeCell.style.border = '1px solid #008000';

    linkCell.innerHTML = `<a href="${contact.link}" target="_blank">${contact.name}</a>`;
    linkCell.style.padding = '5px';
    linkCell.style.border = '1px solid #008000';
});

message.appendChild(contactTable);

    // Create a "Go Back" <a> tag
    const goBackLink = document.createElement("a");
    goBackLink.innerText = "[RETURN]";
    goBackLink.href = "#";
    goBackLink.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
        message.remove();
        goBackLink.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
type([contato, logout], { processChars: false, wait: 100 }, outro);
    };

    // Remove the "Logout" and "Contact" buttons
    logout.remove();
    contato.remove();

    // Append the message and "Go Back" link to the 'outro' element
    outro.appendChild(message);
    outro.appendChild(goBackLink);
			
			
		};
		
		
		let logout = document.createElement("a");
		logout.innerText = "[EXIT]";
		logout.href = "#";
		logout.onclick = () => {
			outro.remove();
			new Game({onQuit: resolve});
		};

	;

		await type([contato, logout], { processChars: false, wait: 100 }, outro);

		logout.focus();
	});

	outro.remove();
}

const stylesheets = ["fallout"];
const templates = ["fallout"];

export { stylesheets, templates };
export default command;

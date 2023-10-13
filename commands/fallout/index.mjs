// Inspiration:
// - https://youtu.be/jDJHtLCHuAg
// - http://aramor.epizy.com/fallout-terminal/password?diff=1
import { getScreen, clear, main} from "../../util/screens.js";
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
				`          COPYRIGHT 2201-2203 ROBCO INDUSTRIES`, `                        -SERVER 6- `, 
				`____________________________________________________`
			],
			FAST,
			outro
		);



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


// ... Your existing code ...

// Create a contact form
// ... Your existing code ...

// Create a contact form
const contactForm = document.createElement('form');
contactForm.setAttribute('action', 'mailto:your-email@example.com'); // Replace with your email address
contactForm.setAttribute('method', 'post');
contactForm.classList.add('contact-form'); // Add a class for the form

// Create form fields
const nameLabel = document.createElement('label');
nameLabel.innerText = 'Name:';
nameLabel.classList.add('form-label'); // Add a class for the label
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'name');
nameInput.required = true;
nameInput.classList.add('form-input'); // Add a class for the input

const emailLabel = document.createElement('label');
emailLabel.innerText = 'Email:';
emailLabel.classList.add('form-label'); // Add a class for the label
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailInput.required = true;
emailInput.classList.add('form-input'); // Add a class for the input

const phoneLabel = document.createElement('label');
phoneLabel.innerText = 'Phone Number:';
phoneLabel.classList.add('form-label'); // Add a class for the label
const phoneInput = document.createElement('input');
phoneInput.setAttribute('type', 'tel');
phoneInput.setAttribute('name', 'phone');
phoneInput.classList.add('form-input'); // Add a class for the input

const subjectLabel = document.createElement('label');
subjectLabel.innerText = 'Subject:';
subjectLabel.classList.add('form-label'); // Add a class for the label
const subjectInput = document.createElement('input');
subjectInput.setAttribute('type', 'text');
subjectInput.setAttribute('name', 'subject');
subjectInput.required = true;
subjectInput.classList.add('form-input'); // Add a class for the input
const messageLabel = document.createElement('label');
messageLabel.innerText = 'Message:';
messageLabel.classList.add('form-label'); // Add a class for the label
const messageTextarea = document.createElement('textarea');
messageTextarea.setAttribute('name', 'message');
messageTextarea.rows ="1";
messageTextarea.required = true;
messageTextarea.classList.add('form-input');
messageTextarea.classList.add('txtarea') 
//Add a class for the input textarea
// Create a submit button
const submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.value = 'Send';

// Append form elements to the form
contactForm.appendChild(nameLabel);
contactForm.appendChild(nameInput);
contactForm.appendChild(document.createElement('br'));
contactForm.appendChild(emailLabel);
contactForm.appendChild(emailInput);
contactForm.appendChild(document.createElement('br'));
contactForm.appendChild(phoneLabel);
contactForm.appendChild(phoneInput);
contactForm.appendChild(document.createElement('br'));
contactForm.appendChild(subjectLabel);
contactForm.appendChild(subjectInput);
contactForm.appendChild(document.createElement('br'));
contactForm.appendChild(messageLabel);
contactForm.appendChild(messageTextarea);
contactForm.appendChild(document.createElement('br'));
contactForm.appendChild(submitButton);

// Append the contact form to the message
message.appendChild(contactTable);
message.appendChild(contactForm); 

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
type([inicio, sobre, galeria, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
    };

    // Remove the "Logout" and "Contact" buttons
    inicio.remove();
    sobre.remove();
    galeria.remove();
    logout.remove();
    contato.remove();
    idioma.remove();
    terminal.remove();

    // Append the message and "Go Back" link to the 'outro' element
type([message, goBackLink], { processChars: false , wait: 10 }, outro);
    
			
			
		};
		let idioma = document.createElement("a");



		idioma.innerText = "[IDIOMA]";

		idioma.href = "#";
		idioma.onclick = () => {
			
		
		  
		};
		let galeria = document.createElement("a");



		galeria.innerText = "[GALLERY]";

		galeria.href = "#";
		galeria.onclick = () => {
			
		
		  
		
		  
		};
		
		let sobre = document.createElement("a");



		sobre.innerText = "[ABOUT ME]";

		sobre.href = "#";
		sobre.onclick = async () =>  {		
		
		
		
		
		inicio.remove();

    sobre.remove();

    galeria.remove();
    logout.remove();
    contato.remove();
    idioma.remove();
    terminal.remove() 
    logout.remove()
    
    var divsobre = document.getElementsByClassName("typer")[4];
    divsobre.classList.add('divsob')
    const backSobre = document.createElement("a");
    backSobre.innerText = "[RETURN]";
    backSobre.style.marginTop = "10px"
    backSobre.href = "#";
    backSobre.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
        divsobre.remove();
        backSobre.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
type([inicio, sobre, galeria, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
    };

    // Remove the "Logout" and "Contact" buttons
    

    // Append the message and "Go Back" link to the 'outro' element
    
    
    


      const gifImage2 = document.createElement("img");
      
		gifImage2.src = "../../images/Dog.gif";

gifImage2.style.height = "70px"

gifImage2.style.width = "70px"
		  
gifImage.style.display = "block";
gifImage.style.margin = "0 auto";
		   
		  
		 /*
		  const divtextsobre = document.createElement("div")
		  divtextsobre.classList.add("divtextsobre") 
		  const divgif2 = document.createElement("div")
		  divgif2.classList.add("divgif")
const sobretxt = document.createElement("p");
const sobretxt2 = document.createElement("p");
const sobretxt3 = document.createElement("p");
const technologies = document.createElement("p");
*/
// Set the text for the <p> element

function calculateAge(birthdate) {
  let today = new Date();
  let birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

const birthdate = '2000-11-09'; // Replace with your birthdate in 'YYYY-MM-DD' format
const age = calculateAge(birthdate);



divsobre.appendChild(backSobre)


	await type(
			[
				`\n>// I'm Henry! I'm ${age} years old. I'm an illustrator and developer, deeply in love for Technology, Design & Trending topics like AI or Big Data `,
				`I'm graduated in Software Development & Digital Design and I work as a fullstack dev. \n I create digital illustrations & arts and softwares, app's, websites and others. Some of the technologies I generally use are:`, `Frontend: Javascript ES6+, Vue.JS, Bootstrap, React & Typescript\nBackend: PHP (Including Laravel and CakePHP), Python & Flask, Node & Electron (for desktop build),and for databases I usually work with MySql, MongoDB, or Firebase`, 
				`I do projects from simple dynamic websites to mobile app's, on-demand softwares and admin management system's \nCurrently, I'm studying and specializing myself in Cybersecurity and Data Science`
			],
			FAST,
			divsobre 
		);
divsobre.appendChild(gifImage2)
	
	
		/*
sobretxt.innerText = `>// I'm Henry! I'm ${age} years old. I'm an illustrator and developer, deeply in love for Technology, Design & Trending topics like AI or Big Data `;


sobretxt2.innerText= `>I'm graduated in Software Development & Digital Design and I work as a fullstack dev. \n 
 I create digital illustrations & arts and softwares, app's, websites and others.
                  Some of the technologies I generally use are: \n
  `
    //    type(sobretxt,FAST, outro);
       
       technologies.innerText = `Frontend: Javascript ES6+, Vue.JS, Bootstrap,
                     React & Typescript
                     \n  Backend:
                      PHP (Including Laravel and CakePHP), Python & Flask, Node & Electron (for desktop build),and for databases I usually work with MySql, MongoDB, or Firebase`
// o append the <p> element to
sobretxt3.innerText = `I do projects from simple dynamic websites to mobile app's, on-demand softwares and admin management system's \n 
    Currently, I'm studying and specializing myself in Cybersecurity and Data Science`


// Append the image to divgif



sobretxt.style.top = "0";
sobretxt.style.left = "0";
sobretxt.style.width = "95vw";
sobretxt.style.height = "100%";
sobretxt.style.margin = "0";


sobretxt2.style.top = "0";

sobretxt2.style.left = "0";

sobretxt2.style.width = "95vw";
sobretxt2.style.height = "100%";
sobretxt2.style.margin = "0";

sobretxt3.style.top = "0";
sobretxt3.style.left = "0";
sobretxt3.style.width = "95vw";
sobretxt3.style.height = "100%";
sobretxt3.style.margin = "0";

technologies.style.top = "0";
technologies.style.left = "0";
technologies.style.width = "95vw";
technologies.style.height = "100%";
technologies.style.margin = "0";
technologies.style.fontSize = "75%"



divsobre.appendChild(divtextsobre) ;
divsobre.appendChild(divgif2);
 divtextsobre.appendChild(sobretxt);
divtextsobre.appendChild(sobretxt2);
divtextsobre.appendChild(technologies );
divtextsobre.appendChild(sobretxt3);
divgif2.appendChild(gifImage2);

*/
		  

}
		let terminal = document.createElement("a");
		terminal.innerText = "[TERMINAL]";

		terminal.href = "#";
		terminal.onclick = () => {
		  outro.remove();
		  main();
		};
		
			let inicio = document.createElement("a");

		inicio.innerText = "[HOME]";

		inicio.href = "#";
		inicio.onclick = () => {		
		  
		  const gifImage = document.createElement("img");
		  // Create a new <p> elemen
		  const divinicio = document.createElement("div")
		  divinicio.classList.add("divinicio")
		  const divtextinicio = document.createElement("div")
		  divtextinicio.classList.add("divtextinicio") 
		  const divgif = document.createElement("div")
		  divgif.classList.add("divgif")
const iniciotext = document.createElement("p");

// Set the text for the <p> element
iniciotext.innerText = "🚀 Welcome to my digital playground! 🌟 I'm not just a developer; I'm a creator of online experiences that leave a mark. With a dash of innovation and a sprinkle of code, I turn dreams into pixels, and pixels into reality.";

// Assuming you have a container div with an id of "portfolio" to append the <p> element to


gifImage.src = "../images/Code.gif";

gifImage.style.marginTop = "15px"
gifImage.style.marginBottom= "15px"
gifImage.style.width = "92vw"
gifImage.style.height= "50vh"
// Append the image to divgif



iniciotext.style.top = "0";
iniciotext.style.left = "0";
iniciotext.style.width = "87vw";
iniciotext.style.height = "100%";
iniciotext.style.margin = "0";
divinicio.style.marginLeft = "20px"
divinicio.appendChild(divtextinicio);
divinicio.appendChild(divgif);
divtextinicio.appendChild(iniciotext);
divgif.appendChild(gifImage); 


		  const goBackLinkIn = document.createElement("a");
    goBackLinkIn.innerText = "[RETURN]";
    goBackLinkIn.style.marginTop = "10px"
    goBackLinkIn.href = "#";
    goBackLinkIn.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
        divinicio.remove();
        goBackLinkIn.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
type([inicio, sobre, galeria, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
    };

    // Remove the "Logout" and "Contact" buttons
    inicio.remove();
    sobre.remove();
    galeria.remove();
    logout.remove();
    contato.remove();
    idioma.remove();
    terminal.remove();

    // Append the message and "Go Back" link to the 'outro' element
type([divinicio, goBackLinkIn], { processChars: false , wait: 10 }, outro);
    
		
		};
		
		let logout = document.createElement("a");
		logout.innerText = "[EXIT]";
		logout.href = "#";
		logout.onclick = () => {
			outro.remove();
			new Game({onQuit: resolve});
		};

	;

		 type([inicio, sobre, galeria, contato,idioma, terminal, logout], { processChars: false , wait: 5 }, outro);

		logout.focus();
	});

	outro.remove();
}

const stylesheets = ["fallout"];
const templates = ["fallout"];

export { stylesheets, templates };
export default command;

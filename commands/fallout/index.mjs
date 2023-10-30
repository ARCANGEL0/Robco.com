// Inspiration:
// - https://youtu.be/jDJHtLCHuAg
// - http://aramor.epizy.com/fallout-terminal/password?diff=1
import { getScreen, clear, main,boot,login} from "../../util/screens.js";
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
export async function outro() {
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
let btnhome, btnsobre, btngal, btncontact, btnlang, btnreturn, sitext,sobretexto,hometexto,contactinfo

function updateTexts() {
		  inicio.innerText = btnhome
		  sobre.innerText = btnsobre
		  galeria.innerText = btngal
		  contato.innerText = btncontact
		  idioma.innerText= btnlang
		  
		}
// Function to handle language change
function changeLanguage(language) {
  
  
  if (language === 'pt') {
     contactinfo = "Informações de Contato:\n\n ";
 btnhome = '[INICIO]';
 btnsobre = '[SOBRE]';
 btngal = '[GALERIA]';
 btncontact = '[CONTATO]';
 btnlang = '[LANGUAGE/LANGUE]';
 btnreturn = '[VOLTAR]';
 sitext = 'WEBSITES QUE FIZ';
 sobretexto = [
  `\n>// Eu sou o Henry! Tenho ${age} anos. Sou ilustrador e desenvolvedor, apaixonado por Tecnologia, Design e tópicos em alta como IA ou Big Data.`,
  `Sou formado em Desenvolvimento de Software e Design Digital e trabalho como desenvolvedor fullstack. \n Crio ilustrações digitais e softwares, aplicativos, websites e outros. Algumas das tecnologias que geralmente uso incluem:`, `Frontend: Javascript ES6+, Vue.JS, Bootstrap, React & Typescript\n\nBackend: PHP (incluindo Laravel e CakePHP), Python & Flask, Node & Electron (para desenvolvimento de aplicativos desktop), e em relação a bancos de dados, geralmente trabalho com MySql, MongoDB ou Firebase.`,
  `Realizo projetos que vão desde websites dinâmicos simples até aplicativos móveis, softwares sob demanda e sistemas de gerenciamento administrativo. Atualmente, estou estudando e me especializando em Cibersegurança e Ciência de Dados.`
];
 hometexto = "🚀 Bem-vindo ao meu parque de diversões digital! 🌟 Não sou apenas um desenvolvedor; sou um criador de experiências online que deixam uma marca. ☄ Com uma pitada de inovação e uma dose de código, transformo sonhos em pixels e pixels em realidade.";
  } else if (language === 'es') {
    // Add translations in Spanish here
    
     contactinfo = "Información de contacto:\n\n";
 btnhome = '[INICIO]';
 btnsobre = '[ACERCA DE]';
 btngal = '[GALERÍA]';
 btncontact = '[CONTACTO]';
 btnlang = '[IDIOMA/LANGUAGE]';
 btnreturn = '[VOLVER]';
 sitext = 'SITIOS WEB QUE HE CREADO';
 sobretexto = [
  `\n>// ¡Soy Henry! Tengo ${age} años. Soy ilustrador y desarrollador, apasionado por la Tecnología, el Diseño y temas de vanguardia como la IA o el Big Data.`,
  `Soy graduado en Desarrollo de Software y Diseño Digital y trabajo como desarrollador fullstack. Creo ilustraciones digitales y software, aplicaciones, sitios web y más. Algunas de las tecnologías que suelo utilizar incluyen:`, `Frontend: Javascript ES6+, Vue.JS, Bootstrap, React y Typescript\n\nBackend: PHP (incluyendo Laravel y CakePHP), Python y Flask, Node y Electron (para el desarrollo de aplicaciones de escritorio), y en cuanto a bases de datos, suelo trabajar con MySql, MongoDB o Firebase.`,
  `Realizo proyectos que van desde sitios web dinámicos simples hasta aplicaciones móviles, software a medida y sistemas de administración. Actualmente, estoy estudiando y especializándome en Ciberseguridad y Ciencia de Datos.`
];
 hometexto = "🚀 ¡Bienvenido a mi parque de diversiones digital! 🌟 No soy solo un desarrollador; soy un creador de experiencias en línea que dejan huella. ☄ Con un toque de innovación y una dosis de código, convierto sueños en píxeles y píxeles en realidad.";

  } else if (language === 'fr') {
    // Add translations in French here
    
     contactinfo = "Coordonnées de contact:\n\n";
 btnhome = '[ACCUEIL]';
 btnsobre = '[À PROPOS]';
 btngal = '[GALERIE]';
 btncontact = '[CONTACT]';
 btnlang = '[LANGUE]';
 btnreturn = '[RETOUR]';
 sitext = 'LES SITES WEB QUE J\'AI CRÉÉS';
 sobretexto = [
  `\n>// Je suis Henry ! J'ai ${age} ans. Je suis illustrateur et développeur, passionné par la technologie, le design et des sujets avancés tels que l'IA ou le Big Data.`,
  `Je suis diplômé en développement logiciel et design numérique, et je travaille en tant que développeur fullstack. Je crée des illustrations numériques et des logiciels, des applications, des sites web, et plus encore. Certaines des technologies que j'utilise généralement incluent :`, `Frontend : Javascript ES6+, Vue.JS, Bootstrap, React et Typescript\n\nBackend : PHP (y compris Laravel et CakePHP), Python et Flask, Node et Electron (pour le développement d'applications de bureau), et en ce qui concerne les bases de données, je travaille généralement avec MySql, MongoDB ou Firebase.`,
  `Je réalise des projets allant de simples sites web dynamiques à des applications mobiles, des logiciels sur mesure et des systèmes de gestion. Actuellement, j'étudie et me spécialise en cybersécurité et en science des données.`
];
 hometexto = "🚀 Bienvenue dans mon parc d'attractions numérique ! 🌟 Je ne suis pas seulement un développeur ; je suis un créateur d'expériences en ligne qui laissent une empreinte. ☄ Avec une touche d'innovation et une dose de code, je transforme les rêves en pixels et les pixels en réalité.";


  } else {
    // Default language (English)
    contactinfo = "Contact info:\n\n ";
    btnhome = '[HOME]';
    btnsobre = '[ABOUT]';
    btngal = '[GALLERY]';
    btncontact = '[CONTACT]';
    btnlang = '[IDIOMA/LANGUE]';
    btnreturn = '[RETURN]';
    sitext = 'WEBSITES I\'VE DONE';
    sobretexto = [
				`\n>// I'm Henry! I'm ${age} years old. I'm an illustrator and developer, deeply in love for Technology, Design & Trending topics like AI or Big Data `,
				`I'm graduated in Software Development & Digital Design and I work as a fullstack dev. \n I create digital illustrations & arts and softwares, app's, websites and others. Some of the technologies I generally use are:`, `Frontend: Javascript ES6+, Vue.JS, Bootstrap, React & Typescript\n\nBackend: PHP (Including Laravel and CakePHP), Python & Flask, Node & Electron (for desktop build),and for databases I usually work with MySql, MongoDB, or Firebase`, 
				`I do projects from simple dynamic websites to mobile app's, on-demand softwares and admin management system's \nCurrently, I'm studying and specializing myself in Cybersecurity and Data Science`
			]
    //Update other text as needed
    hometexto = "🚀 Welcome to my digital playground! 🌟 I'm not just a developer; I'm a creator of online experiences that leave a mark. ☄ With a dash of innovation and a sprinkle of code, I turn dreams into pixels, and pixels into reality."; // Update other text as needed
  }


  // Store the selected language in localStorage
   localStorage.setItem('selectedLanguage', language);
}


// Handle initial language setup (use the stored language or default to English)
const storedLanguage = localStorage.getItem('selectedLanguage');
if (storedLanguage) {
  changeLanguage(storedLanguage);
} else {
  changeLanguage('en');
}




let contato = document.createElement("a");
		contato.innerText = btncontact;
		contato.classList.add("btn-contact")
		contato.href = "#";
		contato.onclick = () => {
			// remove all a tags and put a text with p and an a tag in the end to take back to preciois page.. Remove text and restore a tag buttons 
			   // Create a <p> element with a message
    const message = document.createElement('p');
    message.innerText = contactinfo
const contactTable = document.createElement('table');
contactTable.style.borderCollapse = 'collapse';

// Contact entries
const contacts = [
    { type: 'GitHub', name:'ARCANGEL0', link: 'https://github.com/ARCANGEL0/' },
    { type: 'WhatsApp/Phone ', name: '+351 927 285 125', link: 'https://api.whatsapp.com/send?phone=351927285125' },
    { type: 'Website',name: 'LNA Digital', link: 'https://lnaassessoriadigital.com' },
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


// Append the contact form to the message
message.appendChild(contactTable);

    // Create a "Go Back" <a> tag
    const goBackLink = document.createElement("a");
    goBackLink.innerText = btnreturn;
    goBackLink.classList.add("btnReturn")
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
		
		let galeria = document.createElement("a");



		galeria.innerText = btngal;
galeria.classList.add("btn-gal")
		galeria.href = "#";
		galeria.onclick = () => {
			
		inicio.remove();

    sobre.remove();

    galeria.remove();
    logout.remove();
    contato.remove();
    idioma.remove();
    terminal.remove() 
    logout.remove()
    
    var divgallery = document.getElementsByClassName("typer")[4];
    

    
    
// Access the third "typer" element (remember, the index is zero-based)

    divgallery.classList.add('divgal')
    const backGal = document.createElement("a");
    backGal.innerText = btnreturn;
    backGal.style.marginTop = "10px"
    backGal.classList.add("btnReturn")
    backGal.href = "#";
    backGal.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
        divgallery.remove();
        backGal.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
type([inicio, sobre, galeria, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
    };

		  
		// Array de URLs de imagens
const VideosUrl = [
    '../../images/gallery/alpha2.mp4',
    '../../images/gallery/Videos/lna.mp4',
    '../../images/gallery/Videos/lnadigital.mp4',
      '../../images/gallery/Videos/escoteiros.mp4',
    '../../images/gallery/Videos/arcUI.mp4',
    '../../images/gallery/Videos/hadesign.mp4',
        '../../images/gallery/Videos/GreenWaste.mp4',
    '../../images/gallery/Videos/arcUI.mp4',

    '../../images/gallery/Videos/pong.mp4',
];

divgallery.appendChild(backGal);

const divbuttons = document.createElement("div");
divbuttons.classList.add("galbtns")

const dvid = document.createElement("div");
dvid.classList.add("dvid")

const prevBtn = document.createElement("button");
prevBtn.textContent = "《";
prevBtn.classList.add('carousel-button')
divbuttons.appendChild(prevBtn);

const nextBtn = document.createElement("button");
nextBtn.textContent = "》";
nextBtn.classList.add('carousel-button')
divbuttons.appendChild(nextBtn);

let currentIndex = 0;

prevBtn.onclick = () => {
	currentIndex--
     if (currentIndex<=VideosUrl.length && currentIndex>0) {
    

vid.src=VideosUrl[currentIndex]
     }
     if (currentIndex<0){
     	 currentIndex=0
vid.src=VideosUrl[currentIndex]    
     
}

}
nextBtn.onclick = () => {
	currentIndex++
     if (currentIndex<VideosUrl.length && currentIndex>=0) {
     
vid.src=VideosUrl[currentIndex]

     }
     if (currentIndex>VideosUrl.length){
     	 currentIndex=0
vid.src=VideosUrl[currentIndex]    
     
}
}
divbuttons.style.marginTop='20px'
divbuttons.style.marginBottom='20px'
const vid = document.createElement("video");

vid.src=VideosUrl[currentIndex]
vid.autoplay = true
vid.style.width = '65%'
vid.style.height='20rem'

dvid.appendChild(vid)


divgallery.appendChild(divbuttons)
divgallery.appendChild(dvid)

let divsites = document.createElement("div");
divsites.classList.add("divsites");
divsites.style.display = "flex";
divsites.style.flexWrap = "wrap"; // Allow elements to wrap to the next line

let escoteiro = document.createElement("img");
escoteiro.src = "../../images/Escoteiros.png";
escoteiro.onclick = () => {
  window.open("https://77gemar-jairmattenauer.com", "_blank");
};

let arc = document.createElement("img");
arc.src = "../../images/Arc.png";
arc.onclick = () => {
  window.open("https://arcangel0.github.io/ARC_UI", "_blank");
};

let info = document.createElement("img");
info.src = "../../images/Info.png";
info.onclick = () => {
  window.open("https://arcangeloinfo.com.br", "_blank");
};

let lna = document.createElement("img");
lna.src = "../../images/Lna.png";
lna.onclick = () => {
  window.open("https://lnaassessoriadigital.com", "_blank");
};
let sitestxt = document.createElement("a");
sitestxt.innerText = sitext
sitestxt.classList.add("sitesheader")
sitestxt.style.marginTop="6%"
dvid.appendChild(sitestxt)
divsites.appendChild(escoteiro);
divsites.appendChild(arc);
divsites.appendChild(info);
divsites.appendChild(lna);

divsites.style.display = "flex";

divgallery.appendChild(divsites);

		}; // function end fim galeriq
		
		let sobre = document.createElement("a");



		sobre.innerText = btnsobre;
		sobre.classList.add("btn-sobre")

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
    

    
    
// Access the third "typer" element (remember, the index is zero-based)

    divsobre.classList.add('divsob')
    const backSobre = document.createElement("a");
    backSobre.innerText = btnreturn;
    backSobre.classList.add("btnReturn")
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
		  
gifImage2.style.display = "block";
gifImage2.style.margin = "0 auto";
		   
		  
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



divsobre.appendChild(backSobre)


	await type(
			sobretexto,
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
     terminal.classList.add("btn-terminal")
		terminal.href = "#";
		terminal.onclick = () => {
		  outro.remove();
		  login()
		};
		
			let inicio = document.createElement("a");

		inicio.innerText = btnhome;
    inicio.classList.add('btn-home')
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
iniciotext.innerText = hometexto

iniciotext.classList.add("inicioheader")

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
    goBackLinkIn.innerText = btnreturn;
    goBackLinkIn.classList.add('btnReturn')
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
		
		
		let idioma = document.createElement("a");
    idioma.classList.add("btn-lang")


		idioma.innerText = btnlang;

		idioma.href = "#";
		idioma.onclick = () => {

inicio.remove();
    sobre.remove();
    galeria.remove();
    logout.remove();
    contato.remove();
    idioma.remove();
    terminal.remove();
			
const backLang = document.createElement("a");
    backLang.innerText = btnreturn
    backLang.classList.add("btnReturn")
    backLang.href = "#";
    backLang.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
        port.remove();
        spa.remove();
        eng.remove()
        fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
type([inicio, sobre, galeria, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
    };

    // Remove the "Logout" and "Contact" buttons
    


let port = document.createElement("a");
		port.innerText = "[PORTUGUÊS]";
		port.href = "#";
		port.onclick = () => { 
		  
		  changeLanguage('pt')
		  
		  updateTexts()
		  port.remove();
        spa.remove();
        eng.remove()
        fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
type([inicio, sobre, galeria, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
		  
		}
		
let eng = document.createElement("a");
		eng.innerText = "[ENGLISH]";
		eng.href = "#";
		eng.onclick = () => { 
		  changeLanguage('en')
		  
		  updateTexts() 
		  
		  port.remove();
        spa.remove();
        eng.remove()
        fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
type([inicio, sobre, galeria, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);

		}
		
let spa = document.createElement("a");
		spa.innerText = "[ESPANÕL]";
		spa.href = "#";
		spa.onclick = () => { 
		  changeLanguage('es')
		  updateTexts()
		  port.remove();
        spa.remove();
        eng.remove()
        fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
type([inicio, sobre, galeria, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);

		}
		
let fre = document.createElement("a");
		fre.innerText = "[FRANÇAIS]";
		fre.href = "#";
		fre.onclick = () => { 
		  changeLanguage('fr')
		  updateTexts()
		  port.remove();
        spa.remove();
        eng.remove()
        fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
type([inicio, sobre, galeria, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);

		}
    // Append the message and "Go Back" link to the 'outro' element
type([backLang,port, eng, spa, fre], { processChars: false , wait: 10 }, outro);
		  
		};
		let logout = document.createElement("a");
		logout.innerText = "[LOGOUT]";
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
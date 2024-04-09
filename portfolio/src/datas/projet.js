import coverUx from '../assets/projet-1/cover.jpg'
import coverDeveloppement from '../assets/projet-2/cover.jpg'
import coverAR from '../assets/projet-2/cover.jpg'
import guiProjet1 from '../assets/projet-1/gui.jpg'
import img1Projet1 from "../assets/projet-1/ecran1.jpg"
import img2Projet1 from "../assets/projet-1/ecran2.jpg"
import img3Projet1 from "../assets/projet-1/ecran3.jpg"
import img4Projet1 from "../assets/projet-1/ecran4.jpg"
import img5Projet1 from "../assets/projet-1/ecran5.jpg"
import img6Projet1 from "../assets/projet-1/ecran6.jpg"
// import img7Projet1 from "../assets/projet-1/ecran7.jpg"
// import img8Projet1 from "../assets/projet-1/ecran8.jpg"
// import img9Projet1 from "../assets/projet-1/ecran9.jpg"
// import img10Projet1 from "../assets/projet-1/ecran10.jpg"
// import img11Projet1 from "../assets/projet-1/ecran11.jpg"
// import img12Projet1 from "../assets/projet-1/ecran12.jpg"
// import img13Projet1 from "../assets/projet-1/ecran13.jpg"
// import img14Projet1 from "../assets/projet-1/ecran14.jpg"
// import img15Projet1 from "../assets/projet-1/ecran15.jpg"
// import img16Projet1 from "../assets/projet-1/ecran16.jpg"
// import img17Projet1 from "../assets/projet-1/ecran17.jpg"
// import img18Projet1 from "../assets/projet-1/ecran18.jpg"
// import img19Projet1 from "../assets/projet-1/ecran19.jpg"
// import img20Projet1 from "../assets/projet-1/ecran20.jpg"
// import img21Projet1 from "../assets/projet-1/ecran21.jpg"
// import img22Projet1 from "../assets/projet-1/ecran22.jpg"
import mockup1Projet1 from "../assets/projet-1/mockup1.jpg"
import mockup2Projet1 from "../assets/projet-1/mockup2.jpg"

import img1Projet2 from "../assets/projet-2/ecran1.jpg"
import img2Projet2 from "../assets/projet-2/ecran2.jpg"
import img3Projet2 from "../assets/projet-2/ecran3.jpg"
import img4Projet2 from "../assets/projet-2/ecran4.jpg"
import mockup1Projet2 from "../assets/projet-2/mockup1.jpg"
import mockup2Projet2 from "../assets/projet-2/mockup2.jpg"

import coverProjet3 from '../assets/projet-3/cover.jpg'
import guiProjet3 from '../assets/projet-3/gui.jpg'
import img1Projet3 from "../assets/projet-3/ecran1.jpg"
import img2Projet3 from "../assets/projet-3/ecran2.jpg"
import mockup1Projet3 from "../assets/projet-3/mockup1.jpg"
import mockup2Projet3 from "../assets/projet-3/mockup2.jpg"

export const projetInfos = [
	{
		id: 'projet-1',
		title: 'Draft',
		cover: coverUx,
		category: "UX / UI",
        subtitle: "Améliorer et anticiper la charge mentale et émotionnelle des proches d'un mort. Création d'une application sur la préparation des obsèques et de la cérémonie d'un proche. La personne avant sa mort pourra choisir les différentes personnes qui feront un discours, les différents thèmes à aborder pour lui rendre hommage, les différentes musiques présentes lors de la cérémonie, le déjeuner et aussi préparer et anticiper ...",
		texte:"Améliorer et anticiper la charge mentale et émotionnelle des proches d'un mort. Création d'une application sur la préparation des obsèques et de la cérémonie d'un proche. La personne avant sa mort pourra choisir les différentes personnes qui feront un discours, les différents thèmes à aborder pour lui rendre hommage, les différentes musiques présentes lors de la cérémonie, le déjeuner et aussi préparer et anticiper la gestion des différents documents pour des questions d'héritage et des différents frais à prévoir. Draft permet d'accompagner ses proches jusqu'au dernier instant de sa vie.",
		tags: [
			"UX",
			"UI",
			"Application"
		],
		gui: guiProjet1,
		imgs: [
			img1Projet1,
			img2Projet1,
			img3Projet1,
			img4Projet1,
			img5Projet1,
			img6Projet1,
			// img7Projet1,
			// img8Projet1,
			// img9Projet1,
			// img10Projet1,
			// img11Projet1,
			// img12Projet1,
			// img13Projet1,
			// img14Projet1,
			// img15Projet1,
			// img16Projet1,
			// img17Projet1,
			// img18Projet1,
			// img19Projet1,
			// img20Projet1,
			// img21Projet1,
			// img22Projet1
		],
		mockups: [
			mockup1Projet1,
			mockup2Projet1
		]
	},
	{
		id: 'projet-2',
		title: 'Marée Loire',
        subtitle: "Située dans les cales des anciens chantiers navals de Nantes. Marée Loire est une installation expérimentale visant à réhabiliter la biodiversité dans les cales de la Loire. Lors de l’installation de la structure, des graines et des différents nutriments essentiels aux oiseaux seront distribués pour permettre à tous de participer au développement de l’écosystème. Une fois achevé, l’installation sera hors de portée des usagers...",
		cover: coverDeveloppement,
		category: "3D / AR",
		texte:"Située dans les cales des anciens chantiers navals de Nantes. Marée Loire est une installation expérimentale visant à réhabiliter la biodiversité dans les cales de la Loire. Lors de l’installation de la structure, des graines et des différents nutriments essentiels aux oiseaux seront distribués pour permettre à tous de participer au développement de l’écosystème. Une fois achevé, l’installation sera hors de portée des usagers pour permettre à la biodiversité de s’installer. Sans interférer, regardons la nature reprendre ses droits !",
		tags: [
			"3D",
			"Réalité augmentée",
			"Modélisation"
		],
		imgs: [
			img1Projet2,
			img2Projet2,
			img3Projet2,
			img4Projet2,
		],
		mockups: [
			mockup1Projet2,
			mockup2Projet2
		]
	},
	{
		id: 'projet-3',
		title: 'Mobidys',
        subtitle: "Travail réalisé dans le carde de Projet Court en partenariat avec MOBiDYS, sur leur application de lecture pour un public DYS. Le travail s'est matérialisé autour de deux axes, la navigation, la progression dans le document et la réorganisation des fonctionnalitées mais surtout une réorganisation de ces dernières en fonction de leur utilité et utilisation. Un travail sur une nouvelle charte graphique a également été faite.",
		cover: coverProjet3,
		category: "3D / AR",
		texte:"Travail réalisé dans le carde de Projet Court en partenariat avec MOBiDYS, sur leur application de lecture pour un public DYS. Le travail s'est matérialisé autour de deux axes, la navigation, la progression dans le document et la réorganisation des fonctionnalitées mais surtout une réorganisation de ces dernières en fonction de leur utilité et utilisation. Un travail sur une nouvelle charte graphique a également été faite.",
		tags: [
			"UX",
			"UI",
			"Audit",
			"Application"
		],
		gui: guiProjet3,
		imgs: [
			img1Projet3,
			img2Projet3,
		],
		mockups: [
			mockup1Projet3,
			mockup2Projet3
		]
	},
	{
		id: 'projet-4',
		title: 'Draft',
        subtitle: "Améliorer et anticiper la charge mentale et émotionnelle des proches d'un mort. Création d'une application sur la préparation des obsèques et de la cérémonie d'un proche. La personne avant sa mort pourra choisir les différentes personnes qui feront un discours, les différents thèmes à aborder pour lui rendre hommage, les différentes musiques présentes lors de la cérémonie, le déjeuner et aussi préparer et anticiper ...",
		cover: coverUx,
		category: "UX / UI",
		texte:"Améliorer et anticiper la charge mentale et émotionnelle des proches d'un mort. Création d'une application sur la préparation des obsèques et de la cérémonie d'un proche. La personne avant sa mort pourra choisir les différentes personnes qui feront un discours, les différents thèmes à aborder pour lui rendre hommage, les différentes musiques présentes lors de la cérémonie, le déjeuner et aussi préparer et anticiper la gestion des différents documents pour des questions d'héritage et des différents frais à prévoir. Draft permet d'accompagner ses proches jusqu'au dernier instant de sa vie.",
		tags: [
			"UX",
			"UI",
			"Application"
		]
	},
	{
		id: 'projet-5',
		title: 'Marée Loire',
        subtitle: "Située dans les cales des anciens chantiers navals de Nantes. Marée Loire est une installation expérimentale visant à réhabiliter la biodiversité dans les cales de la Loire. Lors de l’installation de la structure, des graines et des différents nutriments essentiels aux oiseaux seront distribués pour permettre à tous de participer au développement de l’écosystème. Une fois achevé, l’installation sera hors de portée des usagers...",
		cover: coverDeveloppement,
		category: "Développement",
		texte:"Améliorer et anticiper la charge mentale et émotionnelle des proches d'un mort. Création d'une application sur la préparation des obsèques et de la cérémonie d'un proche. La personne avant sa mort pourra choisir les différentes personnes qui feront un discours, les différents thèmes à aborder pour lui rendre hommage, les différentes musiques présentes lors de la cérémonie, le déjeuner et aussi préparer et anticiper la gestion des différents documents pour des questions d'héritage et des différents frais à prévoir. Draft permet d'accompagner ses proches jusqu'au dernier instant de sa vie.",
		tags: [
			"UX",
			"UI",
			"Application"
		]
	},
	{
		id: 'projet-6',
		title: 'Mobidys',
        subtitle: "Travail réalisé dans le carde de Projet Court en partenariat avec MOBiDYS, sur leur application de lecture pour un public DYS. Le travail s'est matérialisé autour de deux axes, la navigation, la progression dans le document et la réorganisation des fonctionnalitées mais surtout une réorganisation de ces dernières en fonction de leur utilité et utilisation. Un travail sur une nouvelle charte graphique a également été faite.",
		cover: coverAR,
		category: "3D / AR",
		texte:"Améliorer et anticiper la charge mentale et émotionnelle des proches d'un mort. Création d'une application sur la préparation des obsèques et de la cérémonie d'un proche. La personne avant sa mort pourra choisir les différentes personnes qui feront un discours, les différents thèmes à aborder pour lui rendre hommage, les différentes musiques présentes lors de la cérémonie, le déjeuner et aussi préparer et anticiper la gestion des différents documents pour des questions d'héritage et des différents frais à prévoir. Draft permet d'accompagner ses proches jusqu'au dernier instant de sa vie.",
		tags: [
			"UX",
			"UI",
			"Application"
		]
	}
]
export default projetInfos;
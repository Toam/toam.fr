---
published: false
layout: post
title: Bien démarrer avec Node.js
category: node.js
comments: true
---

Node.js est une technologie qui permet d'écrire du javascript coté serveur pour réaliser des applications webs. Le framework existe depuis 2009 et bien que très jeune, il attire de nombreux développeurs.

##### Ce que Node.js fait bien
Node.js est très performant sur les 

http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js
https://medium.com/grand-things/522768ac482a


##### Ce qu'il est plus difficile de faire avec Node.js (pour l'instant)
Si vous souhaiter développer une application web classique complexe,
c'est encore
compliqué avec node.js. Il n'existe pas encore de Frameworks du niveau
d'un Ruby on Rails.

##### NPM
NPM est le gestionaire de packet de Node.js, il permet d'installer très
simplement les contributions de la communauté (applications, outils,
frameworks...).

##### Express
C'est le package le plus populaire que vous pourrez récupérer sur NPM.
Il est utilisé pour ajouter à Node.js ce qu'il faut pour créer une
application web (au niveau de la récupération des requêtes web et de la
création des réponses nottament). Une excelente introduction à Node.js
est le tutorial d'Express : http://expressjs.com/guide.html.
L'équipe derrière Express est en train de préparer la version qui
prendra la suite d'Express, KoaJS (http://koajs.com/).

##### Les Frameworks
La réactions des personnes qui découvrent node.js est souvent la même.
Au début, l'impression est très bonne, node.js est rapide et permet de
faire simpement des choses qui seraient compliquées avec d'autres
technologies (les sockets, des actions asynchrones...). Pourtant dès
qu'on creuse un peu, on s'apperçoit que node.js et express ne sont pas
encore au niveau d'un Framework comme ou qu'il ne permet pas de faire de
grosses application comme on pourait le faire avec un Symfony ou un
Zend.

Cependant l'écosysteme de node.js est en plein boom. De nouveaux
frameworks sortent toutes les semaines et certain commencent à devenir
des références.


###### Sails
Sails est un Framework Node.js très intéressant. Il est 

###### Kraken
Paypal a surpris tout le monde en fin d'année dernière en annonçant qu'ils migraient certain de leurs services en node.js. Quelques temps apres cette annonce, ils ont partagé un framework,  <a href="https://github.com/paypal/kraken-js" taget="_blank">KrakenJS</a>.
Ce qui est intéressant c'est qu'ils ont mis l'accent sur la sécurité pour proposer un framework utilisable dans le monde de l'entreprise.


###### Meteor
Meteor est un framework qui fait beaucoup parler de lui. Bien que basé
sur Node.js, il s'en eloigne un peut. Il n'est par exemple pas
compatible nativement avec NPM (le gestionnaire de dépendance de
Node.js).

##### L'Hébergement
Il existe de nombreuse solutions pour héberger des applications node.js.
Les gros hébergeurs cloud comme Heroku supportent le node.js, il existe
aussi des solutions dédiés comme Nodejitsu. Il est aussi très simple
d'heberger soit même un site en node.js, soit en passant par le serveur
livré avec node.js ou en utilisant des serveurs dediés comme Phusion
Passager.

OVH parle depuis quelques mois de supporter le node.js sur les
offres mutualisées. C'est quelque chose qu'on attend avec impatience,
 et ce sera très certainement un choix très intéressant.


##### Ressources en français
Il y a un bon tutoriel sur <a href="http://fr.openclassrooms.com/informatique/cours/des-applications-ultra-rapides-avec-node-js" target="_blank">Open Classrooms</a> qui permet de partir du bon pied dans le dev node.js.

##### Ressources en anglais
Un très bon tutoriel pour commencer <a href="http://expressjs.com/guide.html" target="_blank">est celui d'Express</a>. Il couvre les bases de ce module qui est utilisé dans quasiment tous les frameworks.

Il y a aussi un cours intéractir sur <a href="http://node.codeschool.com/" target="_blank">CodeSchool</a> qui couvre des concepts important à maitriser. 

Pour travailler proprement en Javascript, il sera aussi rapidement nécessaire de faire de la lecture sur le langage lui même, on peut nottament cité l'exelent : <a href="http://www.amazon.fr/Javascript-Good-Parts-D-Crockford/dp/0596517742" target="_blank">Javascript: The good parts</a> de Douglas Crockford.

Quelques autres tutoriaux:
- http://nodeguide.com/beginner.html
- http://www.nodebeginner.org/

Maintenant c'est a vous de jouer !

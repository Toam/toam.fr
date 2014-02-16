---
published: true
layout: post
title: Bien démarrer avec Node.js
category: node.js
comments: true
---

Node.js
##### Ce que Node.js fait bien


##### Ce qu'il est plus difficile de faire avec Node.js (pour l'instant)
Si vous souhaiter développer une application web classique complexe, c'est encore
compliqué avec node.js. Il n'existe pas encore de Frameworks du niveau
d'un Ruby on Rails.

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
Paypal a surpris tout le monde en fin d'année dernière en annonçant
qu'ils migraient certain de leurs services en node.js. Quelques temps
apres cette annonce, ils ont partagé un framework, 
<a href="https://github.com/paypal/kraken-js" taget="_blank">KrakenJS</a>. 
Ce qui est intéressant c'est qu'ils ont mis l'accent sur la sécurité pour proposer
un framework utilisable dans le monde de l'entreprise.


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
Tuto sur http://fr.openclassrooms.com/informatique/cours/des-applications-ultra-rapides-avec-node-js

##### Ressources en anglais
Il y a de plus de ressources en Français

Un cours intéractif : http://node.codeschool.com/

Quelques tutoriaux :
http://nodeguide.com/beginner.html
http://www.nodebeginner.org/

---
published: true
layout: post
title: Tester la MEAN Stack avec Vagrant
category: node.js
comments: true
---

La MEAN Stack est un ensemble de technologies utilisées pour créer des applications webs. Elle se compose d'AngularJS comme framework coté client, node.js pour le framework serveur et MongoDB pour la base de données. Node.js sert à créer une API sur le serveur pour manipuler les données et AngularJS est responsable de l'affichage des pages grâce à son moteur de template. 

Ce qui rend ces technologies intéressantes est l'utilisation du javascript sur toute la chaine, des requêtes MongoDB à l'affichage dans le navigateur. L'application que nous allons installer contient tout ce qu'il faut pour démarrer un projet et découvrir ce qu'on peut faire avec la stack MEAN.

Vagrant est une techno qui permet de spécifier des fichiers de configuration pour réaliser très simplement des machines virtuelles. L'intéret est qu'il est possible d'installer un système complet (OS + applications + configuration) en une seule commande.

Le but de cet article est d'utiliser Vagrant pour mettre en oeuvre très rapidement un application de démo basé sur la stack MEAN.

<!--more-->

##### Prérequis : installation de Vagrant et de Virtualbox

Avant de commencer le tutoriel, il faut installer Vagrant et Virtualbox. Coté Vagrant ça se passe sur <a href="http://downloads.vagrantup.com/" target="_blank">cette page</a>. Il suffit de choisir la dernière version et selectionner l'installeur correspondant à votre système d'exploitation.

Même principe pour Virtualbox, <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">cette page</a> contient les instructions pour l'installer sur les différents systèmes.

##### Récupération du projet

Vous pouvez maintenant récupérer le projet en téléchargeant <a href="https://github.com/Toam/mean-vagrant/archive/master.zip" target="_blank">cette archive</a> (le projet se trouve sur Github à <a href="https://github.com/Toam/mean-vagrant" target="_blank">cette adresse</a>).

Le projet se compose d'un fichier de configuration Vagrant ('Vagrantile', à la racine), d'un dossier avec les recettes Chef (le dossier 'cookbooks') et des sources du projet (dans 'src').

##### Le tutoriel le plus court du monde

La magie de Vagrant s'opère maintenant. Une seule commande va demander à Vagrant de télécharger une image d'un système d'exploitation vierge (Debian dans notre cas), d'installer tout ce qu'il faut (node.js, MongoDB et leurs dépendances) et d'installer le projet. Il faudra être indulgent, l'opération peut prendre jusqu'à quelques dizaines de minutes.

Placez-vous dans le dossier du projet et tapez :
{% highlight sh %}
$ vagrant up
{% endhighlight %}

Une fois que l'installation est terminé, il se se connecter à la machine et lancer l'application en utilisant Grunt.

{% highlight sh %}
$ vagrant ssh
$ cd src
$ npm install
$ node server.js
{% endhighlight %}

* "npm install" n'est nécessaire qu'au premier lancement pour charger les dépendances.

C'est prêt, vous pouvez maintenant vous connecter sur <a href="http://localhost:4000" target="_blank">http://localhost:4000</a> pour accéder au projet. Vous devriez pouvoir créer un compte, écrire, lister et modifier des articles. Le reste de cet article va permettre de comprendre en détail comment Vagrant réalise cette prouesse !

##### Boilerplate Mean

L'idée de la stack Mean a fait son apparition sur le <a href="http://blog.mongodb.org/post/49262866911/the-mean-stack-mongodb-expressjs-angularjs-and" target="_blank">blog de MongoDB</a>. Coté productivité, l'intérêt de cette stack est de proposer du Javascript sur toute la chaine. Les requêtes de la base de donnée MongoDB, le moteur de template, tout est en Javascript. On se retrouve donc avec une solution simple, où on ne doit pas faire de traitement de données entre chaque couche (on manipule ici que du JSON).

Coté serveur on retrouve un serveur node.js assez simple et quelques modules : 
- Express - un framework assez simple pour node.js
- Mongoose - un orm pour gérer la persistance dans MongoDB
- Passport - une bibliotèque d'authentification pour node.js

Coté client, on retrouve donc AngularJS qui sera chargé de générer communiquer avec l'API et de générer les vues. Le thème graphique est basé sur Boostrap.

Plus d'infos sur ce projet <a href="http://www.mean.io/" target="_blank">sur cette page</a>.

##### Organisation du projet

L'application se trouve dans le dossier **src/**. La partie node.js se trouve ensuite dans le dossier **app/**. 

La partie AngularJS dans le dossier **public/js/** pour les controllers, la configuration et les services. Les vues générés coté client se trouvent dans le dossier **public/views/**.

Comme son nom l'indique, le dossier **config/** contient la configuration coté serveur pour les différents environnements.

##### Grunt

Grut est utilisé pour lancer l'application. C'est un outils d'automatisation qui permet en une commande de compiler et minifier le code, de lancer les tests unitaires, etc. Il existe de nombreux plugins pour effectuer la plupart des taches courante lors du développement.

##### Vagrant & Chef

Vagrant est un très bon outil à utiliser sur un projet. Dans un contexte d'une équipe de développeur, il permet de pouvoir travailler en local sur un environment homogène. L'automatisation de l'installation permet d'arriver très rapidement à ce résultat.

Le fait d'utiliser Chef pour installer la machine n'est pas anodin. Cette techno sera utile au moment du deployment de l'application sur un serveur de production. On peut donc s'approcher au maximum de l'environnement de production lors du développement ce qui est toujours un plus. 

Il est par exemple très simple de faire tourner cette application sur Amazon Web Service en utilisant <a href="https://github.com/mitchellh/vagrant-aws" target="_blank">vagrant-aws</a>.

##### Et la suite ?

Vous disposez maintenant de quoi commencer à jouer avec AngularJS et Node.js pour créer une application. Le projet <a href="http://www.mean.io" target="_blank">mean.io</a> est une base, à vous de la personaliser pour l'utiliser dans vos projet.

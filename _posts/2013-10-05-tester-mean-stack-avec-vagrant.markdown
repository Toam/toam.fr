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

Le but de cette article est d'utiliser Vagrant pour mettre en oeuvre très rapidement un application de démo basé sur la stack MEAN.

<!--more-->

##### Prérequis : installation de Vagrant et de Virtualbox

Avant de commencer le tutoriel, il faut installer Vagrant et Virtualbox. Coté Vagrant ça se passe sur <a href="http://downloads.vagrantup.com/" target="_blank">cette page</a>. Il suffit de choisir la dernière version et selectionner l'installeur correspondant à votre système d'exploitation.

Même principe pour Virtualbox, <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">cette page</a> contient les instructions pour l'installer sur les différents systèmes.

##### Récupération du projet

Vous pouvez maitenant récupérer le projet en téléchargeant <a href="#" target="_blank">cette archive</a> (le projet se trouve sur Github à <a href="#" target="_blank">cette addresse</a>).

Le projet se compote d'un fichier de configuration Vagrant ('Vagrantile', à la racine), d'un dossier avec les recettes Chef (le dossier 'cookbooks') et des sources du projet (dans 'src') .

##### Le tutorial le plus court du monde

La magie de Vagrant s'opère maintenant. Une seule commande va demander à Vagrant de télécharger une image d'un système d'exploitation vierge (Debian dans notre cas), d'installer tout ce qu'il faut (node.js, MongoDB et leurs dépendances) et d'installer le projet. Il faudra être indulgent, l'opération peut prendre jusqu'à quelques dizaines de minutes.

Placez-vous dans le dossier du projet et tapez :
{% highlight sh %}
$ vagrant up
{% endhighlight %}

Une fois que l'installation est terminé, il se se connecter à la machine et lancer l'application en utilisant Grunt.

{% highlight sh %}
$ vagrant ssh
$ cd src
$ grunt
{% endhighlight %}

C'est prêt, vous pouvez maintenant vous connecter sur <a href="http://localhost:4000" targer="_blank">http://localhost:4000</a> pour accéder au projet. Le reste de cet article va permettre de comprendre en détail comment Vagrant réalise cette prouesse !

##### Boilerplate Mean

Le projet est basé sur la boiterplate Mean qui regroupe tout ce qu'il faut pour démarer un projet avec ces technos

Coté serveur on retrouve un serveur node.js assez simple et quelques modules : 
- Express - un framework assez simple pour node.js
- Mongoose - un orm pour gérer la persistance dans MongoDB
- Passport - une bibliotèque d'authentification pour node.js

Coté client, on retrouve donc AngularJS qui sera chargé de générer communiquer avec l'API et de générer les vues. Le thème graphique est basé sur Boostrap.

Plus d'infos sur ce projet <a href="http://www.mean.io/">sur cette page</a>.

##### Grunt

Grut est utilisé pour lancer l'application. C'est un outils d'automatisation quit permet en une commande de minifier, compiler, lancer les tests unitaires, etc. Il existe de nombreux plugins pour effectuer la plupart des taches courante lors du developpement.

##### Vagrant & Chef

Vagrant est un très bon outil à utiler sur un projet. Dans un contexte d'une équipe de développeur, il permet de pouvoir travailler en local sur un envirement homogène. L'automatisation de l'installation permet d'arriver très rapidement à ce résultat.

Le fait d'utiliser Chef pour installer la machine n'est pas annodin. Cette techno sera utile au moment du deployement de l'application sur un serveur de prodution. On peut donc s'approcher au maximum de l'environement de production lors du développement ce qui est toujours un plus.

##### Et la suite ?

Vous disposez maintenant d'une VM
Il est par exemple très simple de faire tourner cette application sur Amazon Web Service en utilisant <a href="https://github.com/mitchellh/vagrant-aws">vagrant-aws</a>.
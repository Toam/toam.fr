---
layout: post
title:  "Tutoriel : Créer un blog statique avec Jekyll"
category: jekyll
comments: true
---

Le but de ce tutoriel est de vous guider dans la mise en place d'un blog statique grâce à Jekyll. Si vous n'avez jamais entend parler de Jekyll, c'est un générateur de blog statique. Le concept est de n'avoir sur le serveur que des fichiers html. L'avantage est que tout le travail est réalisé au moment du déploiement du blog (création des pages a partir des templates, génération des pages, ...). Plus besoin de passer du temps à optimiser Wordpress avec des plugins de caches, tout est ici caché par définition. Il y a deux avantages a avoir un blog sous Jekyll : les performances sont imbattables et vous pourrez passer pour un vrai hipster !

<!--more-->
##### Installation Jekyll
La première étape est d'installer la gem Jekyll. Cela suppose que **Ruby** et **RubyGems** soient installés sur votre système.
{% highlight sh %}
$ gem install jekyll
{% endhighlight %}

Il faut ensuite se placer dans le dossier où vous voulez créer votre blog avant de lancer la création.
{% highlight sh %}
$ jekyll new monblog
$ cd monblog
{% endhighlight %}

Jekyll embarque le serveur WEBrick, il est donc possible de voir directement le blog grâce à la commande **serve**.
{% highlight sh %}
$ jekyll serve
{% endhighlight %}

Le blog est alors visible à cette adresse : http://localhost:4000

La commande **serve** propose une option intéressante, **watch** qui permet de mettre à jour automatiquement le blog pendant le développement. Dès qu'un fichier est modifié (par exemple le contenu d'un article de blog), les pages correspondantes sont re-générées.
{% highlight sh %}
$ jekyll serve -w
{% endhighlight %}

##### Création des pages et des articles

##### Permaliens

##### Localiser Jekyll

##### Réaliser une page de catégories

##### Réaliser une page d'archives

##### Création d'un sitemap

##### Commentaires avec Disqus

##### Automatiser le déploiement vers un FTP

##### Benchmarks et tests sur Amazon S3
Quelques chiffres pour conclure. 
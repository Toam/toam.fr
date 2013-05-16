---
published: true
layout: post
title: "Tutoriel : Créer un blog statique avec Jekyll"
category: jekyll
comments: true

---

Le but de ce tutoriel est de vous guider dans la mise en place d'un blog statique grâce à Jekyll. Si vous n'avez jamais entend parler de Jekyll, c'est un générateur de blog statique. Le concept est de n'avoir sur le serveur que des fichiers html. L'avantage est que tout le travail est réalisé au moment du déploiement du blog (création des pages a partir des templates, génération des pages, ...). Plus besoin de passer du temps à optimiser Wordpress avec des plugins de caches, tout est ici caché par définition. Il y a deux avantages a avoir un blog sous Jekyll : les performances sont imbattables et vous pourrez passer pour un vrai hipster ! En bonus vous aurez aussi auncun soucis de sécurité, une plus grande liberté d'hébergement et bien plus encore...

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

Le blog est alors visible à cette adresse : **http://localhost:4000**

La commande **serve** propose une option intéressante, **watch** qui permet de mettre à jour automatiquement le blog pendant le développement. Dès qu'un fichier est modifié (par exemple le contenu d'un article de blog), les pages correspondantes sont re-générées.
{% highlight sh %}
$ jekyll serve -w
{% endhighlight %}

##### Création des pages et des articles

##### Permaliens

Plus d'info sur les permaliens, avec tous les formats possible [sur cette page].

##### Localiser Jekyll
Il existe plusieurs solutions pour localiser Jenkins. Il est par exemple possible d'utiliser le plugin [i18n_filter](https://github.com/gacha/gacha.id.lv/blob/master/_plugins/i18n_filter.rb). Le principe est d'utilier les fichiers de traduction de la gem [rails-i18n](https://github.com/svenfuchs/rails-i18n/tree/master/rails/locale) et de les copiers dans le dossier **\_locales** à la racine du projet.

Le code suivant permet d'afficher la date de publication d'un article sous la forme "10 Mars 2013" après avoir configuré la locale **fr** dans le plugin.
{% highlight ruby %}
{{ "{{%" }} post.date | localize: ":short" %}}
==> Affiche : "10 Mars 2013"
{% endhighlight %}

##### Réaliser une page de catégories

##### Réaliser une page d'archives

##### Création d'un sitemap
Il est possible de créer un sitemap grâce à un plugin qui sera lancé automatiquement à chaque génération du blog. Il faut placer le fichier **sitemap_generator.rb** [disponible à cette adresse](https://github.com/kinnetica/jekyll-plugins/blob/master/sitemap_generator.rb) dans le dossier **_plugin** à la racine du projet.

La configuration du plugin est très simple, elle se fait au début du fichier.
{% highlight ruby %}
# URL du blog
MY_URL = "http://www.monsite.com"

# Nom du fichier Sitemap
SITEMAP_FILE_NAME = "sitemap.xml"

# Fichiers à exclure
EXCLUDED_FILES = ["atom.xml"]

# Pages à inclure
PAGES_INCLUDE_POSTS = ["index.html"]
{% endhighlight %}

Suite à une nouvelle génération du blog, un fichier **sitemap.xml** devrait se trouver à dans le répertoire **_site**.

##### Commentaires avec Disqus
Un blog statique ne permet pas directement de mettre en place un système de commentaire, mais il existe une solution ! Disqus est un service qui permet aux visiteurs de participer dans les articles simplement depuis quelques lignes de Javascript. Le service fonctionne parfaitement sous Jenkyll et propose même une [page d'aide pour vous aider dans l'intégration](http://help.disqus.com/customer/portal/articles/472138-jekyll-installation-instructions).

La cerise sur le gateau, Disqus est gratuit pour un petit blog. L'outils est disponible en Français, il est possible de changer la langue depuis le panneau de configuration (si vous voulez tester Disqus, vous pouvez laisser un commentaire ci-dessous ;)).

##### Automatiser le déploiement vers un FTP

##### Benchmarks et tests sur Amazon S3
Quelques chiffres pour conclure bien qu'ils ne représente pas grand chose. Ce blog était précedement un blog Wordpress placé sur un hébergement OVH Mutualisé. Il n'y avait aucune optimisation particulière (pas de cache, un theme peu optimisé, ...)


Il est encore possible de faire mieux avec ce blog, nottement au niveau des fichiers CSS et Javascript qu'il faudrait réduire et concaténer.

---
published: true
layout: post
title: "Tutoriel : Créer un blog statique avec Jekyll"
category: jekyll
comments: true

---

Le but de ce tutoriel est de vous guider dans la mise en place d'un blog grâce à Jekyll. Si vous n'avez jamais entend parler de Jekyll, c'est un générateur de blog statique. Le concept est de n'avoir sur le serveur que des fichiers html. L'avantage est que tout le travail est réalisé au moment du déploiement du blog (création des pages a partir des templates, génération des pages, ...). Plus besoin de passer du temps à optimiser Wordpress avec des plugins de cache, tout est ici caché par définition. Il y a beaucoup d'avantages à avoir un blog sous Jekyll : les performances sont imbattables et vous pourrez passer pour un vrai hipster ! En bonus vous aurez aussi auncun soucis de sécurité, une plus grande liberté d'hébergement et bien plus encore...

<!--more-->
##### Installation de Jekyll
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

##### Personalisation du template

##### Création d'articles

##### Création de pages

##### Inclure des images

##### Permaliens

Plus d'info sur les permaliens, avec tous les formats possible [sur cette page].

##### Localiser Jekyll
Il existe plusieurs solutions pour localiser Jenkins. Il est par exemple possible d'utiliser le plugin [i18n_filter](https://github.com/gacha/gacha.id.lv/blob/master/_plugins/i18n_filter.rb). Le principe est d'utilier les fichiers de traduction de la gem [rails-i18n](https://github.com/svenfuchs/rails-i18n/tree/master/rails/locale) et de les copiers dans le dossier **\_locales** à la racine du projet.

Le code suivant permet d'afficher la date de publication d'un article sous la forme "10 Mars 2013" après avoir configuré la locale **fr** dans le plugin.
{% highlight ruby %}
{{ "{{%" }} post.date | localize: ":short" %}}
==> Affiche : "10 Mars 2013"
{% endhighlight %}

##### Mise en place de la pagination sur la page d'accueil
La page d'acceuil listant tous les articles n'est pas paginé. Pourtant Jekyll embarque cette fonctionnalité par défault. Pour en profiter, il faut ajouter un paramètre dans le fichier **_config.yml**
{% highlight ruby %}
paginate: 5
{% endhighlight %}

La page d'acceuil boucle sur les postes du site (**site.posts**), il faut maintenant boucler sur la liste paginé des postes (**paginator.posts**).

Pour afficher la navigation, par exemple sur la page d'accueil, il faut ensuite ajouter le code suivant :
{% highlight ruby %}
{% for post in paginator.posts %}
  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
  <p class="author">
    <span class="date">{{ post.date }}</span>
  </p>
  <div class="content">
    {{ post.content }}
  </div>
{% endfor %}
{% endhighlight %}

Il est ensuite très simple d'ajouter une navigation entre les pages. Le code suivant affiche un bouton précédent et un bouton suivant.
{% highlight ruby %}
<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="/page{{ paginator.previous_page }}" class="previous">Page précédente</a>
  {% else %}
    <span class="previous">Page précédente</span>
  {% endif %}
  <span class="page_number ">Page: {{ paginator.page }} sur {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="/page{{ paginator.next_page }}" class="next">Page suivante</a>
  {% else %}
    <span class="next ">Page suivante</span>
  {% endif %}
</div>
{% endhighlight %}

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
Il existe plusieurs solutions pour envoyer le site généré sur un FTP. [Glynn](https://github.com/dmathieu/glynn) est distribué sous la forme d'une gem et fonctionne parfaitement.

Il faut ajouter dans la configuration les informations du serveur FTP.
{% highlight ruby %}
ftp_host: ftp.adresseDeMonFTP.fr
ftp_username: nomUtilisateur
ftp_dir: /repertoireDeDestination
ftp_passive: false
{% endhighlight %}

Générer le blog et le déployer est alors un jeu d'enfant, il suffit de se placer à la racine du projet et de taper la commande **glynn**.
{% highlight ruby %}
glynn
{% endhighlight %}

##### Benchmarks et tests sur Amazon S3
Quelques chiffres pour conclure bien qu'ils ne représente pas grand chose. Ce blog était précedement un blog Wordpress placé sur un hébergement OVH Mutualisé. Il n'y avait aucune optimisation particulière (pas de cache, un theme peu optimisé, ...)


Il est encore possible de faire mieux avec ce blog, nottement au niveau des fichiers CSS et Javascript qu'il faudrait réduire et concaténer.

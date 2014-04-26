---
published: true
layout: post
title: "Guide de démarrage : créer un blog statique avec jekyll"
category: jekyll
comments: true

---

Le but de ce guide est de vous accompagner dans la mise en place d'un blog grâce à Jekyll. Si vous n'avez jamais entendu parler de Jekyll, c'est un générateur de blog statique. Le concept est de n'avoir sur le serveur que des fichiers html. L'avantage est que tout le travail est réalisé au moment du déploiement du blog (création des pages à partir des templates, application des plugins, ...).

Plus besoin de passer du temps à optimiser Wordpress avec des plugins de cache, tout est caché ici par définition. Il y a beaucoup d'avantages à avoir un blog sous Jekyll : les performances sont imbattables et vous pourrez passer pour un vrai hipster ! En bonus vous n'aurez aucun souci de sécurité, une plus grande liberté d'hébergement et bien plus encore...

<!--more-->

##### Installation de Jekyll

La première étape est d'installer la gem **Jekyll**. Cela suppose que **Ruby** et **RubyGems** soient installés sur votre système (vous pouvez suivre ce guide : <a href="https://www.ruby-lang.org/fr/downloads/" target="_blank">https://www.ruby-lang.org/fr/downloads/</a>).
{% highlight sh %}
$ gem install jekyll
{% endhighlight %}

Il faut ensuite se placer dans le dossier où vous voulez créer votre blog avant de lancer sa création. Jekyll va créer l'arborescence de base de votre blog.
{% highlight sh %}
$ jekyll new monblog
$ cd monblog
{% endhighlight %}

Jekyll embarque le serveur WEBrick, il est donc possible de voir directement le blog grâce à la commande **serve**. Cette commande va générer le blog et créer les fichiers statiques correspondant.
{% highlight sh %}
$ jekyll serve
{% endhighlight %}

Il est possible de voir le blog dans un navigateur à cette adresse : **http://localhost:4000**

La commande **serve** propose une option intéressante, **watch** qui permet de mettre à jour automatiquement le blog pendant le développement. Dès qu'un fichier est modifié (par exemple le contenu d'un article de blog), les pages correspondantes sont re-générées.
{% highlight sh %}
$ jekyll serve -w
{% endhighlight %}

##### Organisation du blog

Suite à la génération du blog, Jekyll a créé le minimum pour générer un blog. Le fichier **\_config** contient la configuration générale du blog, le dossier **\_layout** contient les templates qui serviront à générer les pages. Le dossier **\_post** contient les articles et le dossier **\_site** contient le blog généré. C'est ce dernier dossier qu'il faudra placer sur votre serveur si vous souhaitez publier votre blog.

<img src="/img/2013-05-20-guide-demarrage-jekyll/arborescence.png"/>


##### Créer des articles
Les posts doivent se trouver dans le dossier **\_posts**, ils peuvent être écrit en <a href="http://daringfireball.net/projects/markdown/" target="_blank">Markdown</a> ou en <a href="http://textile.sitemonks.com/" target="_blank">Textile</a>. 
Pour ajouter un article, il faut créer un fichier **ANNEE-MOIS-JOUR-titre.md** ou **ANNEE-MOIS-JOUR-titre.textile** (donc par exemple 2013-03-10-Titre-de-mon-article.md). 
Les pages commence par quelques lignes de YAML pour la configuration. Les formats Markdown et Textile sont relativement simple, il n'y a pas de code HTML à écrire, le code est généré lors de la génération de la page.

Voici un exemple d'article :
{% highlight html %}
---
published: true
layout: post
title: "Tutoriel : Créer un blog statique avec Jekyll"
category: jekyll
---
#### Mon titre en H4
Bonjour, je suis un article, 
je peux avoir des mots en _italique_, 
d'autres en **gras** et des [liens](http://www.jekyllrb.com).
{% endhighlight %}

Vous trouverez plus de détails sur le markdown dans <a href="http://daringfireball.net/projects/markdown/syntax" target="_blank">ce guide</a>.

##### Création de pages
La création des pages est tout aussi simple que la création des articles. Pour créer une page, il faut placer un fichier HTML à la racine du projet. Lors de la génération du blog, ce fichier sera placé dans le dossier **\_site**.

##### Inclure des images
Il existe plusieurs solutions pour placer des images, le plus simple étant de créer un dossier **images** à la racine du projet. Lors de la génération du blog, il sera copier avec son contenu dans le dossier **\_site**.

L'image sera donc accessible directement depuis les pages et les articles :
{% highlight ruby %}
<img src="{{ site.url }}/images/monImage.png" />
{% endhighlight %}

##### Personalisation du template
Jekyll embarque un système de template, Liquid. Le principe est d'avoir des fichiers html dans le dossier **\_layouts**. Le fichier **default.html** contient par exemple la structure des pages (balise head, ...). Le contenu des pages sera copier à l'emplacement de la variable **content**.
{% highlight html %}
{{ "{{" }} content }}
{% endhighlight %}

Il y a un système d'héritage très simple entre les templates. Par exemple le fichier **post.html** hérite du fichier **default.html**

Plus d'informations sur ce système de template sont présent <a href="http://wiki.shopify.com/Liquid" target="_blank">sur cette page</a>

##### Permaliens
Les liens vers les articles sont paramétrables dans le fichier de configuration du blog. Par exemple pour définir un formation de type **http://www.monblog.fr/2013-03-10-Titre-de-mon-article**, il faudra définir dans le fichier **\_config.yml**
{% highlight yaml %}
permalink: /:day-:month-:year-:title
{% endhighlight %}

Plus d'info sur les permaliens, avec tous les formats possible <a href="http://jekyllrb.com/docs/permalinks/" target="_blank">sur cette page</a>.

##### Localiser Jekyll
Il existe plusieurs solutions pour localiser Jenkins. Il est par exemple possible d'utiliser le plugin <a href="https://github.com/gacha/gacha.id.lv/blob/master/_plugins/i18n_filter.rb">i18n_filter</a>. Le principe est d’utiliser les fichiers de traduction de la gem <a href="https://github.com/svenfuchs/rails-i18n/tree/master/rails/locale">rails-i18n</a> et de les copier dans le dossier **\_locales** à la racine du projet.

Le code suivant permet d'afficher la date de publication d'un article sous la forme "10 Mars 2013" après avoir configuré la locale **fr** dans le plugin.
{% highlight ruby %}
{{ "{{%" }} post.date | localize: ":short" %}}
==> Affiche : "10 Mars 2013"
{% endhighlight %}

##### Mise en place de la pagination sur la page d'accueil
La page d’accueil listant tous les articles n'est pas paginé. Pourtant Jekyll embarque cette fonctionnalité par défaut. Pour en profiter, il faut ajouter un paramètre dans le fichier **config.yml **.
{% highlight ruby %}
paginate: 5
{% endhighlight %}

La page d'acceuil boucle sur les postes du site (**site.posts**), il faut maintenant boucler sur la liste paginé des postes (**paginator.posts**).

Pour afficher la navigation, par exemple sur la page d'accueil, il faut ensuite ajouter le code suivant :
{% highlight html %}
{{ "{%" }}  for post in paginator.posts %}
  <h1><a href="{{ post.url }}">{{ "{{" }} post.title }}</a></h1>
  <p class="author">
    <span class="date">{{ "{{" }}  post.date }}</span>
  </p>
  <div class="content">
    {{ "{{" }}  post.content }}
  </div>
{{ "{%" }}  endfor %}
{% endhighlight %}

Il est ensuite très simple d'ajouter une navigation entre les pages. Le code suivant affiche un bouton précédent et un bouton suivant.
{% highlight html %}
<div class="pagination">
{{ "{%" }} if paginator.previous_page %}
    <a href="/page{{ paginator.previous_page }}" class="previous">Page précédente</a>
{{ "{%" }}  else %}
    <span class="previous">Page précédente</span>
{{ "{%" }}  endif %}
  <span class="page_number ">Page: {{ paginator.page }} sur {{ paginator.total_pages }}</span>
{{ "{%" }}  if paginator.next_page %}
    <a href="/page{{ paginator.next_page }}" class="next">Page suivante</a>
{{ "{%" }}  else %}
    <span class="next">Page suivante</span>
{{ "{%" }}  endif %}
</div>
{% endhighlight %}

##### Création d'un sitemap
Il est possible de créer un sitemap grâce à un plugin qui sera lancé automatiquement à chaque génération du blog. Il faut placer le fichier **sitemap_generator.rb** [disponible à cette adresse](https://github.com/kinnetica/jekyll-plugins/blob/master/sitemap_generator.rb) dans le dossier **\_plugins** à la racine du projet.

La configuration du plugin est très simple, elle se fait au début du fichier.
{% highlight ruby %}
MY_URL = "http://www.monsite.com" # URL du blog
SITEMAP_FILE_NAME = "sitemap.xml" # Nom du fichier Sitemap
EXCLUDED_FILES = ["atom.xml"] # Fichiers à exclure
PAGES_INCLUDE_POSTS = ["index.html"] # Pages à inclure
{% endhighlight %}

Suite à une nouvelle génération du blog, un fichier **sitemap.xml** devrait se trouver à dans le répertoire **\_site**.

##### Commentaires avec Disqus
Un blog statique ne permet pas directement de mettre en place un système de commentaire, mais il existe une solution ! Disqus est un service qui permet aux visiteurs de participer dans les articles simplement depuis quelques lignes de Javascript. Le service fonctionne parfaitement sous Jenkyll et propose même une [page d'aide pour vous aider dans l'intégration](http://help.disqus.com/customer/portal/articles/472138-jekyll-installation-instructions).

La cerise sur le gâteau, Disqus est gratuit pour un petit blog et l’outil est disponible en Français. Il est possible de changer la langue depuis le panneau de configuration (si vous voulez tester Disqus, vous pouvez laisser un commentaire ci-dessous ;)).

##### Automatiser le déploiement vers un FTP
Il existe plusieurs solutions pour envoyer le site généré sur un FTP. [Glynn](https://github.com/dmathieu/glynn) est distribué sous la forme d'une gem et fonctionne parfaitement.

Il faut ajouter dans la configuration les informations du serveur FTP.
{% highlight yaml %}
ftp_host: ftp.adresseDeMonFTP.fr
ftp_username: nomUtilisateur
ftp_dir: /repertoireDeDestination
ftp_passive: false
{% endhighlight %}

Générer le blog et le déployer est alors un jeu d'enfant, il suffit de se placer à la racine du projet et de simplement taper la commande :
{% highlight sh %}
$ glynn
{% endhighlight %}

Félicitation, votre blog est en ligne !

##### Conclusion
Un chiffre pour conclure, sur le même hébergement (un serveur mutualisé chez OHV), ce blog se charge plus de 3 fois plus vite. Le blog Wordpress pourrait faire mieux (avec du cache par exemple), les deux systèmes sont comparé sans optimisation particulière.
<img src="/img/2013-05-20-guide-demarrage-jekyll/faster.png">

Jenkyll est un moteur de blog simple et efficace. Il n'est évidement pas destiné à toutes les utilisations, son fonctionnement étant clairement réservé aux développeurs. Il ne sera pas non plus intéressant dans un cadre où plusieurs personnes collaborent sur des articles, les plate-formes de blogs comme Wordpress permettent de faire beaucoup de choses. Cependant dans le cadre d'un blog perso, c'est clairement une option à considérer.

Jekyll est de plus en plus populaire et des solutions à ses limitations commencent à apparaître. Il est possible d'automatiser le déploiement depuis github, ou même 
d'avoir un back office sur un site déporté. Ces sujets feront probablement l'objet d'un autre article...

Et vous, que pensez-vous de Jekyll ? Est-ce que vous être prêt à l'utiliser pour votre blog ?

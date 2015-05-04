---
published: true
layout: post
title: "Booster Xcode avec des plugins"
category: ios
comments: true
image: "alcatraz.png"
---
Xcode, le célèbre IDE d'Apple possède de nombreuses fonctions mais peut aussi être frustant à l'utilisation. Il est pourtant très simple d'installer des plugins pour automatiser certaines taches et travailler dans un environement plus agréable.

<!--more-->

### Alcatraz, le gestionnaire de plugins
Alcatraz est un outil qui permet d'installer très simplement des plugins pour Xcode sans quitter l'IDE.

Pour l'installer, rien de plus simple, il suffit de taper cette commande dans un terminal (plus d'infos <a href="[http://alcatraz.io/]" target="_blank">sur le site officiel</a>).
{% highlight bash %}
$ curl -fsSL https://raw.githubusercontent.com/supermarin/Alcatraz/master/Scripts/install.sh | sh
{% endhighlight %}

Une fois Alcatraz installé, il sera possible d'accéder à son interface depuis le menu "Window". 
<img src="/images/alcatraz-menu.png"/>

L'interface permet ensuite d'installer un plugin en un clic.
<img src="/images/alcatraz-interface.png"/>


Alcatraz permet aussi d'installer facilement des thèmes pour Xcode ou encore des snippets de codes.

### Amélioration de la plomberie de Xcode
Certain plugins sont à installer sans hésiter. Ils permettent de corriger des petits soucis de Xcode, comme par exemple le passage à la ligne lors de l'affichage des erreurs.
<img src="/images/alcatraz-error.png"/>

Ou encore, `XCode4_beginning_of_line` qui permet de retourner au premier caractère de la ligne plutôt qu'à la première colonne avec `⌘ ←` (essayer-le, ça chage la vie !).

Certains plugins permettent aussi de corriger des comportements étrange d'Xcode. Par exemple, `Deriveddata Exterminator` permet de nettoyer le dossier `Library/Developer/Xcode/DerivedData` responsable des erreurs de builds étranges dans la grande majorité des cas. Le plugin ajoute un bouton très pratique dans l'interface :
<img src="/images/alcatraz-deriveddata.png"/>

### Edition du code
Un autre plugin, SCXcodeMiniMap, permet d'avoir une miniature du code dans chaque fenêtre comme dans Sublime Text.
<img src="/images/alcatraz-sublime.png"/>

ClangFormat est un plugin qui permet d'ajouter les fonctionnalités du formateur Clang. Il permet de mettre en forme facilement le code suivant plusieurs standards :
<img src="/images/alcatraz-clang.gif"/>

SCXcodeSwitchExpander est un plugin très pratique qui permet de créer rapidement des switchs en se basant sur des enums :
<img src="/images/alcatraz-switch.gif"/>

Pour les plus maniaques d'entre nous, XAlign est un plugin qui permet d'aligner simplement des morceaux de code :
<img src="/images/alcatraz-align.gif"/>

Fuzzy est un plugin qui permet de booster la complétion automatique. Il est possible de chercher plus rapidement en tapant partielement des mots, comme dans le module d'ouverture rapide de Xcode (⇧⌘O).
<img src="/images/alcatraz-fuzzy.gif"/>

### Intégration de Git
`GitDiff` est un autre plugin indispensable. Il permet de visualiser dans l'éditeur les modifications depuis le dernier commit. Il est même possible de visualiser les modifications en passant le curseur sur les rectangles de couleur à gauche des lignes.
<img src="/images/alcatraz-git.png"/>

### Bonus
Plusieurs plugins rendent plus agréable le travail sous Xcode. C'est le cas par exemple de ColorSense qui permet de visualiser les couleurs directement dans le code.
<img src="/images/alcatraz-color.png"/>

Même principe avec `KSImageNamed`, qui facilite la manipulation des images :
<img src="/images/alcatraz-image.gif"/>

Un autre plugin, `Lin`, facilite la localization des textes. L'essayer, c'est l'adopter !
<img src="/images/alcatraz-localize.gif"/>

### Un mode Vim ?
Pour les amateurs du fameux éditeur, il existe un plugin pour émuler certaines fonctions de Vim. XVim est encore expérimental mais permet de manipuler le texte en utilisant des raccourcis de l'éditeur légendaire.
(Le plugin est assez bien intégré à Xcode mais j'ai constaté des ralentissement en l'utilisant...)

### Et ensuite ?
A votre tour d'installer Alcatraz pour essayer les plugins. C'est simple et ça change la vie. N'hésitez pas à mettre ensuite dans les commentaires vos plugins préférés !

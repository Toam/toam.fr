---
published: true
layout: post
title: "Koa, le remplaçant d'Express"
category: node.js
comments: true
---

http://blog.peterdecroos.com/blog/2014/02/01/koa-zero-to-todo-list/
http://koajs.com/
https://github.com/koajs/koa
http://blog.stevensanderson.com/2013/12/21/experiments-with-koa-and-javascript-generators/
https://github.com/koajs/koa/blob/master/docs/koa-vs-express.md


[Koa](http://koajs.com/){:target="_blank"} est un framework récent pour Node.js. Ce qui fait qu'il est particulier est qu'il a été réalisé par les auteurs d'Express. Ces développeurs présentent d'ailleurs Koa comme Express 4.0. Ils ont pourtant choisi un nouveau nom car Koa modifie en profondeur la façon dont fonctionnait Express.

<!--more-->

##### Express et les callbacks

Expres est le framework le plus utilisé pour Node.js. Il est très minimaliste, on peut le voir comme une surcouche pour la gestion des requêtes. Presque tous les frameworks plus gros sont basés sur Express.

Voici une application très simple utilisant Express :

{% highlight js %}
var app = express();
app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000);
console.log('Express started on port 3000');
{% endhighlight %}

On peut voir ici que la fonction qu'on passe à `app.get` est un callback. Les fonctions d'Express prennent en paramètre 3 arguments : req, res et next. On se trouve donc dans un fonctionnement en cascade. Quand on se trouve dans une application volumineuse, il est assez compliqué de suivre le flux de données (surtout en cas d'erreur).

##### Les générateurs

La grosse nouveauté de Koa est d'utiliser les générateurs


##### Tester Koa

###### Installation de Node.js 0.11.9

###### Créer un projet


##### Example

Il existe pour l'instant peut d'exemple d'applicationn utilisant Koa. On peut trouver notamment cet exemple d'implémentation d'un CRUD : [https://github.com/shijuvar/Koa-CRUD](https://github.com/shijuvar/Koa-CRUD){:target="_blank"}.


##### Et ensuite ?

Koa n'est pas encore utilisable en production, principalement parce qu'il tourne sur une version non stable de Node.js.

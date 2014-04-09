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
http://www.codersgrid.com/2013/12/19/koa-js-next-generation-web-framework-for-node-js/


[Koa](http://koajs.com/){:target="_blank"} est un framework récent pour Node.js. Ce qui fait qu'il est particulier est qu'il a été réalisé par les auteurs d'Express. Ces développeurs présentent d'ailleurs Koa comme Express 4.0. Ils ont pourtant choisi un nouveau nom car Koa modifie en profondeur la façon dont fonctionnait Express.

<!--more-->

##### Express et les callbacks

Expres est le framework le plus utilisé pour Node.js. Il est très minimaliste, on peut le voir comme une surcouche pour la gestion des requêtes. Presque tous les frameworks plus gros sont basés sur Express.

{% highlight js %}
var express = require('../../');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000);
console.log('Express started on port 3000');
{% endhighlight %}

##### Les générateurs

La grosse nouveauté de Koa est d'utiliser les générateurs



##### Le cascading



##### La gestion des erreurs


##### Tester Koa

###### Installation de Node.js 0.11.9

###### Créer un projet


##### Example
https://github.com/shijuvar/Koa-CRUD


##### Et ensuite ?
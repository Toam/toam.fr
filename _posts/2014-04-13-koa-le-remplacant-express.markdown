---
published: true
layout: post
title: "Koa, le remplaçant d'Express"
category: node.js
comments: true
---

[Koa](http://koajs.com/){:target="_blank"} est un framework récent pour Node.js. Ce qui le rend particulier est qu'il a été réalisé par les auteurs d'Express. Ces développeurs présentent d'ailleurs Koa comme Express 4.0. Ils ont pourtant choisi un nouveau nom car Koa modifie en profondeur la façon dont fonctionnait Express.

<!--more-->

##### Express et les callbacks

Express est le framework le plus utilisé pour Node.js. Il est très minimaliste, on peut le voir comme une surcouche pour la gestion des requêtes. Presque tous les frameworks plus gros sont basés sur Express.

Voici une application très simple utilisant Express :

{% highlight js %}
var app = express();
app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000);
console.log('Express started on port 3000');
{% endhighlight %}

On peut voir ici que la fonction qu'on passe à _app.get_ est un callback. Les fonctions d'Express prennent en paramètre 3 arguments : req, res et next. On se trouve donc dans un fonctionnement en cascade. Dans une application volumineuse, il est assez compliqué de suivre le flux de données (surtout en cas d'erreur).

##### Les générateurs

La grosse nouveauté de Koa est d'utiliser les générateurs au lieu des callbacks. Le principe est d'utiliser le mot clé _yield_ qui suspend l'exécution d'une fonction et qui retourne une valeur (on est donc proche du fonctionnement du mot clé _return_).

Par exemple : 

{% highlight js %}
function foo(x) {
    while(true) {
        x = x * 2;
        yield x;
    }
}
{% endhighlight %}

On peut ensuite appeler la méthode _foo_ pour obtenir un objet **Générateur** qui possède une méthode _next_ :
{% highlight js %}
var g = foo(2);
g.next(); // -> 4
g.next(); // -> 8
g.next(); // -> 16
{% endhighlight %}

Il est aussi possible d'utiliser la méthode _send_ :
{% highlight js %}
function bar(x) {
    x++;
    var y = yield x;
    yield y/2;
}

var g = bar(1);
g.next(); // -> 2
g.send(8); // -> 4
{% endhighlight %}

Le premier _yield_ retourne x lors de l'appel de _next_. Il est ensuite possible d'appeler _send_ pour continuer l'exécution du générateur et de recevoir la valeur du second _yield_.

##### Mais à quoi ça sert ?

Voici un exemple visible tiré de la [documentation](http://koajs.com/){:target="_blank"} de Koa. Lors qu'il reçoit une requête, il retourne la chaine 'Hello World' et ajoute le temps de réponse dans l'entête :

{% highlight js %}
var koa = require('koa');
var app = koa();

// x-response-time
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response
app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);
{% endhighlight %}

Dans cet exemple, lorsqu'on rencontre un _yield_ on passe au Middleware suivant. Lorsqu'on arrive à la fin (ici la fonction qui ajoute 'Hello World' au corps de la page) on continue l'exécution en remontant au _yield_ précédent. La gestion du flux est beaucoup plus simple à visualisé, on a aussi beaucoup plus de contrôle sur l'exécution du flux.

Avec Express, on passait les paramètres _req_ et _res_ à chaque fonction. On peut voir qu'ici Koa se charge de gérer un contexte global. Bien qu'il soit possible de les voir en faisant _this.req_ et _this.res_, il est déconseillé dans la documentation de travailler directement avec ces objets.

##### Example

Il existe pour l'instant peut d'exemple d'applicationn utilisant Koa. On peut trouver notamment cet exemple d'implémentation d'un CRUD : [https://github.com/shijuvar/Koa-CRUD](https://github.com/shijuvar/Koa-CRUD){:target="_blank"}.


##### Et ensuite ?

Koa n'est pas encore utilisable en production, principalement parce qu'il tourne sur une version non stable de Node.js. Il faudra attendre la version 0.12 de Node.js qui permettra d'utiliser les générateurs. Il faudra ensuire voir si les plus gros Frameworks comme Sails ou Kraken vont suivre...

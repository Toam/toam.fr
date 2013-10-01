---
published: false
layout: post
category: nodejs
comments: true
---

## Introduction à NodeJS

[NodeJS c'est de la boulette...]

<!--more-->

# Installation de NodeJS sur un Mac

# Installation de NodeJS sur Linux

# Installation de NodeJS sur Windows


{% highlight sh %}
var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
{% endhighlight %}

{% highlight sh %}
{
  "name": "node-example",
  "version": "0.0.1",
  "dependencies": {
    "express": "3.1.x"
  },
  "engines": {
    "node": "0.10.x",
    "npm": "1.2.x"
  }
}
{% endhighlight %}
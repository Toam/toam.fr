---
layout: post
title:  "Stocker une image dans le code"
category: ios
comments: true
---
Il peut être parfois intéressant d’inclure une image directement dans le code (par exemple lors de la création d’une bibliothèque statique).

Pour cela, il faut d’abord créer un fichier contenant les informations de l’image. On peut utiliser xxd dans le terminal qui réalise un dump de l’image en hexadecimal :

{% highlight bash %}
xxd -i image.png > image.png.h
{% endhighlight %}

On obtient alors un fichier contenant deux variables, image_png qui contient les données de l’image et image_png_len qui contient la taille de l’image.

Il suffit alors d’inclure le fichier .h dans le projet.
Il est ensuite possible d’utiliser l’image dans le code de cette façon :

{% highlight ragel-objc %}
#import "image.png.h"
NSData *imgData = [NSData dataWithBytesNoCopy:image_png
                          length:image_png_len
                          freeWhenDone:NO];
UIImage *image = [UIImage imageWithData: imgData];
{% endhighlight %}
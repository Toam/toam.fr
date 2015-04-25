---
layout: post
title:  "Détecter un iPhone / iPad"
category: ios
comments: true
image: "default.jpg"
---
(surtout application iPhone lancé dans un iPad)

UI_USER_INTERFACE_IDIOM n’existe pas avec le firmware 3.2 (mais dans ce cas on est sur que c’est une appli iPhone car l’iOS 3.2 est le premier pour l’iPad)

{% highlight ragel-objc %}
#if __IPHONE_OS_VERSION_MAX_ALLOWED &gt;= 30200
 if (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPad){
  label.text = @"Je suis une application iPad";
 }else{
  label.text = @"Je suis une application iPhone";
 }
#else
 label.text = @"Je suis une application iPhone";
#endif
{% endhighlight %}
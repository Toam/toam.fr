---
layout: post
title:  "Récupérer le User Agent d’un iPhone"
category: ios
comments: true
image: "default.jpg"
---
Il est possible de récupérer simplement le User Agent d’un iPhone / iPad depuis une application en injectant du Javascript dans une Webview créée pour l’occasion.

{% highlight ragel-objc %}
UIWebView *webView = [[UIWebView alloc] initWithFrame:CGRectZero];
NSString *userAgent =
   [webView stringByEvaluatingJavaScriptFromString:@"navigator.userAgent"];
[webView release];
{% endhighlight %}
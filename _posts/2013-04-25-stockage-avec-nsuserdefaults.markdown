---
layout: post
title:  "Stockage avec NSUserDefaults"
category: ios
comments: true
---
Il est très simple de stocker des données au sein d’une application grâce à NSUserDefaults.

**Stockage des données :**

{% highlight ragel-objc %}
NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];
[prefs setObject:@"TextToSave" forKey:@"keyToLookupString"];
[prefs setInteger:42 forKey:@"integerKey"];
[prefs setDouble:3.1415 forKey:@"doubleKey"];
[prefs setFloat:1.2345678 forKey:@"floatKey"];

// Enregistrement des données
[prefs synchronize];
{% endhighlight %}

**Récupération des données :**

{% highlight ragel-objc %}
NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];

NSString *myString = [prefs stringForKey:@"keyToLookupString"];
NSInteger myInt = [prefs integerForKey:@"integerKey"];
float myFloat = [prefs floatForKey:@"floatKey"];
{% endhighlight %}
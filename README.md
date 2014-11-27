### What is Jekyll Starter?

Jekyll Starter is a bootstrap project for quickly creating a blog site based on [Jekyll](http://jekyllrb.com/). The starter project provides a foundation based on [Lanyon](https://github.com/poole/lanyon), which is a flavor of [Poole](https://github.com/poole/poole).

In addition, it provides the following functionality out-of-the-box:

* Comments using [Disqus](https://disqus.com/)
* [Google Analytics](http://www.google.co.in/analytics/) Integration with [superProxy](https://developers.google.com/analytics/solutions/google-analytics-super-proxy)
  * Page view counter
  * Website counter
* Social sharing using [AddThis](http://www.addthis.com/)
* Author following using [AddThis](http://www.addthis.com/)
* Tag visualization per post
* Archive organized by tags
* Customizable profile picture in sidebar and about page
* [Grunt](http://gruntjs.com/) based build with CSS merge and minification

This is the base on which [anandmanisankar.com](http://anandmanisankar.com) is built.

### Usage

##### Option 1:

Use the Jekyll Starter Yeoman generator to generate your blog in a matter of seconds.

To install generator-jekyllstarter from npm, run:

```bash
npm install -g generator-jekyllstarter
```

Finally, initiate the generator:

```bash
yo jekyllstarter
```

Answer the questions asked by the generator, and you're blog is ready!

##### Option 2:

Fork the [Jekyll Starter github repository](https://github.com/msanand/jekyllstarter) and manually alter `_config.yml` based on your requirements.

To make use of the Google Analytics integration, ensure you set-up and configure the Google Analytics Super Proxy as described [here](https://developers.google.com/analytics/solutions/google-analytics-super-proxy). Also ensure that the super proxy service returns 'ga:pageviews' and 'ga:pagePath'.

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Contribution

You can find the [Jekyll Starter repository on Github](https://github.com/msanand/jekyllstarter). Feel free to send a pull request.

### License

MIT

# generator-ambox [![Build Status](https://secure.travis-ci.org/ambox/generator-ambox.png?branch=master)](https://travis-ci.org/ambox/generator-ambox)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/xORFiBV.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

### Installing

To install generator-ambox from npm, run:

```bash
npm install -g generator-ambox
```

To install generator-ambox from github, run:

```bash
npm install -g ambox/generator-ambox
```

### Installing manually

If you want to hack on the generator itself, then clone this repo and use npm to link it.

```bash
git clone https://github.com/ambox/generator-ambox.git
cd generator-ambox && npm install
npm link
```

### Usage

Finally, initiate the fullstack generator:

```bash
yo ambox
```

or separately

```bash
yo ambox:front app-name
```

or yet

```bash
yo ambox:back app-name
```

### Uninstalling

```bash
$ npm uninstall -g generator-ambox
```

### Uninstalling manually

```bash
$ rm -rf /usr/local/lib/node_modules/generator-ambox
```

### Uninstalling manually from NVM

```bash
$ rm -rf "$HOME/.nvm/versions/node/v<YOUR_NODE_VERSION>/lib/node_modules/generator-ambox"
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Gulp](http://gulpjs.org) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT

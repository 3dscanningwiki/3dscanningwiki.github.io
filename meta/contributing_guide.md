---
title: Contributing guide
description: How to add and update content on this wiki.
tags: [meta]
---

# Contributing Guide


Thank you for considering to contribute to the wiki! If you need a place to start, have a look at the [page priority list](page_priority.md).

## Making changes

To make changes you will need a [GitHub account](https://github.com/join). If you have an account there are two ways to make changes to the wiki:
* You can either clone the whole repository and edit the content locally, then push the changes back to github (basic knowledge of [git](https://git-scm.com/) required).
* You can make changes directly on the website. For example visit [this current document](https://github.com/3dscanningwiki/Wiki/blob/main/meta/contributing_guide.md) on github and on the top-right corner of the file you should see a button "Edit this file".

For any changes to go live, they have to get *merged* into the repository. This will happen as soon as someone has taken a look at your changes and accepted them.

## Creating new pages

If you want to create a new page, look the [list of templates](template.md) if one of the templates matches the page topic.

## Images

Please try to be conservative with the amount (and size) of images used on this wiki. This wiki is currently hosted on github which is designed for text-based documents and not images.

For pages that require many, or high resolution images, consider hosting them on a reliable image host like [imgur](https://imgur.com/upload) for now.


## Markdown format

This wiki is made using the Markdown formatting language, which should be mostly self-explanatory.

For an in-depth reference see the [Markdown documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

Currently html is not allowed. If you need it, please open an [issue](https://github.com/3dscanningwiki/Wiki-website/issues/new) and explain your use case.

We use a few addons to the markdown format which used as follows: 
### Comments

Comments can be added to add notes visible only when editing the file, they will not show up on the wiki page. They take the following form:
`<!-- my comment here -->`. Currently only single line comments are supported.

### Footnotes

Footnote, citations and similar references can be added with the footnotes addon:

```
Example text with an ^[Inline footnote] and an external footnote [^1].

[^1]: Like this.
```

> Example text with an ^[inline footnote] and an external footnote [^1].

[^1]: like this.

## Special Pages

Files in the github repository translate directly to pages of the wiki. This current page `/meta/contributing_guide.md` will be directly visible as `https://3dscanning.wiki/meta/contributing_guide`. There are however some special pages:

* `/home.md` is the homepage
* `/sidebar.md` contains the content of the sidebar
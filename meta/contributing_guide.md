---
title: Contributing guide
description: How to add and update content on this wiki.
tags: [meta]
---

# Contributing Guide


Thank you for considering to contribute to the wiki! If you need a place to start, have a look at the [page priority list](page_priority.md).

## Making changes

To make changes you will need a [GitHub account](https://github.com/join). If you have an account there are two ways to make changes to the wiki:
* You can either clone the whole [repository](https://github.com/3dscanningwiki/3dscanningwiki.github.io/) and edit the content locally, then push the changes back to github (basic knowledge of [git](https://git-scm.com/) required).
* You can make changes directly on the website. For example click the "Edit this page" link at the bottom of any page and the editor will open in a new tab. 

For a tutorial on how to use the editor, watch [this video](https://www.youtube.com/watch?v=gANADdb_cs0&start=119&end=250) on how to use github.dev to edit the wiki and commit the changes.

For any changes to go live, they have to get *merged* into the repository. This will happen as soon as someone has taken a look at your changes and accepted them.

## Creating new pages

If you want to create a new page, look the [list of templates](template.md) if one of the templates matches the page topic.

## Frontmatter

Every wiki page needs a frontmatter: a section at the top of the file, containing the title, a description and other metadata. The frontmatter has the following format:

```yaml
---
title: Frontmatter example
description: How to use the frontmatter tags on this wiki
tags: [how-to, meta, frontmatter]
published: true # default: true
alias: [meta/contributing_guide]
wip: false # default: false
---
```

## Citations

Be liberal with linking to resources in footnotes. If referring to a scientific paper try to find the Bibtex citation format and convert it to a text citation using the [Online Bibtex Converter](https://asouqi.github.io/bibtex-converter/). Usually such citations are best placed in an external footnote (see below).

## Images

Please try to be conservative with the amount (and size) of images used on this wiki. This wiki is currently hosted on github which is designed for text-based documents and not images.

Wikipedia allows hotlinking to their images, as long as the particular image license allows it^[https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia/technical#Hotlinking]. Please make sure to always include appropriate credits to the original author, even if not required by the license.

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

### Mathematical Expressions

Mathematical expressions can be embedded in text as an inline formula in text ``$`e = m c^2`$`` or as a centered display formula:
    
    ```math

    y_{n+1} = y_0 + \int_{x_0}^x F(t, y(t))dt

    ```

> Mathematical expressions can be embedded in text as an inline formula in text $`e = m c^2`$ or as a centered display formula 
> ```math
y_{n+1} = y_0 + \int_{x_0}^x F(t, y(t))dt
```

The expressions are rendered using [KaTex](https://katex.org/). [List of supported functions](https://katex.org/docs/supported.html).

## Special Pages

Files in the github repository translate directly to pages of the wiki. This current page `/meta/contributing_guide.md` will be directly visible as `https://3dscanning.wiki/meta/contributing_guide`. There are however some special pages:

* `/home.md` is the homepage
* `/sidebar.md` contains the content of the sidebar
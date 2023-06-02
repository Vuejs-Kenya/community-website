# Guide to writing your article in Markdown in Nuxt Content

## Structuring Your Markdown File

When writing an article using Nuxt Content, it's important to structure your Markdown file properly. Nuxt Content uses a special syntax for metadata, which is used to provide additional information about the content. Here's an example of how to structure your Markdown file:

---
title: Article Title
subtitle: Article Subtitle
description: Article Description
alt: Image Alt Text
excerpt: Article Excerpt
imgurl: https://example.com/image.jpg
tags: ["tag1", "tag2"]
attribution: Image Attribution
authorNames: ["Author Name"]
authorImages: ["https://example.com/author-image.jpg"]
createdAt: 2023-05-06
---


When submitting your article, you need to fill all the fields.

- You can use your image or avatar image.
- When using images which you dont have cipyright to you need to provide an attribution to the creator of the image. You can source your image from Pexels.com or Unsplash.com.
- A single article can be written by more than one author. If your piece is a contribution of more than one author, you need to provide details of the contributors in the `authorNames` as an array of string names. (same applied for the authorImages) i.e `['author one','author two']`
- If you are publishing an article that was published before you need to clearly state that at the beginning of the article. i.e (this article was originally published before on)
- We accept contributions from everyone, Please make sure to request review from the contributos when you are confident your piece is ready for publishing.



# Headings

You can use up to six levels of headings in Markdown.


# Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nunc non dolor semper sagittis. Nulla facilisi. 

## Heading 2

Aliquam erat volutpat. Etiam eu tortor augue. Nullam accumsan leo vel ipsum consequat sodales. 

### Heading 3

Donec eget turpis at metus aliquam sodales vel eu metus. Suspendisse tincidunt arcu nec est bibendum, vel ultrices eros sollicitudin. 

#### Heading 4

Praesent vitae tincidunt sapien. Vivamus euismod, ex eget viverra volutpat, enim nulla lobortis odio, nec egestas velit metus ac nisi. 

##### Heading 5

Phasellus et neque nec nisl vulputate feugiat. Integer ut nibh nibh. Sed commodo lorem vel purus sollicitudin, eu pharetra augue finibus. 

###### Heading 6

Aenean rhoncus aliquam velit, a blandit nunc facilisis at. Suspendisse in maximus magna. Sed iaculis eu mauris nec rhoncus. 

Here's a code block example:

```javascript
function addNumbers(a, b) {
  return a + b;
}
```

Alternatively, you can use the pre and code tags in HTML:


<pre>
  <code class="language-javascript">
    const greeting = 'Hello, world!'
    console.log(greeting)
  </code>
</pre>


### Conclusion

In this guide, we have shown you how to write an article using Nuxt Content, and how to structure your Markdown file, add images, and include code blocks. With Nuxt Content.

Happy Writing and can't wait to read your article.


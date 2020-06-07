# node-html-constructor
## Getting started
```js
const html = require("node-html-constructor")

let page = html.Document(
  html.Tag("head",
    html.Tag("title", "Test webpage") +
    html.UniTag("link", {rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk", crossorigin:"anonymous"})
  ),
  html.Tag("body",
    html.Tag("h1", "This is a test webpage") +
    html.Tag("h3", "Smaller header") +
    html.Tag("p", "Paragraph : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor justo at nulla maximus, vel laoreet massa pharetra. Sed luctus turpis sit amet elementum euismod. Integer at ipsum luctus, tincidunt turpis eget, rhoncus nisi. Vestibulum sed malesuada odio. Mauris porta libero id orci feugiat consectetur. Aliquam vel dignissim sem. Maecenas dignissim ipsum elementum hendrerit cursus.") +
    html.UniTag("img", {src: "https://image.flaticon.com/icons/png/512/103/103077.png"})
  )
)
```
Gives
```html
<!DOCTYPE html>
<html ><head ><title >Test webpage</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" >
</head>
<body ><h1 >This is a test webpage</h1>
<h3 >Smaller header</h3>
<p >Paragraph : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor justo at nulla maximus, vel laoreet massa pharetra. Sed luctus turpis sit amet elementum euismod. Integer at ipsum luctus, tincidunt turpis eget, rhoncus nisi. Vestibulum sed malesuada odio. Mauris porta libero id orci feugiat consectetur. Aliquam vel dignissim sem. Maecenas dignissim ipsum elementum hendrerit cursus.</p>
<img src="https://image.flaticon.com/icons/png/512/103/103077.png" >
</body>
</html>
```

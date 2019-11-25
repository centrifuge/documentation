# Centrifuge Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7118d58-bd34-4f3d-97bd-00b8dc1ad2bd/deploy-status)](https://app.netlify.com/sites/centrifuge-documentation/deploys)

This is a Gatsby site.

The develop branch is continuously deployed to a preview site. [View dev site](http://develop.developer.centrifuge.io/docs/overview/introduction/
)

The develop branch is merged to production weekly (unless we need to do a release sooner than that).

The master branch is continuously deployed to production.)

## About

Centrifuge is an open, decentralized operating system which provides a method to create, exchange, and use the data that is used in the financial supply chain. It creates transparent and shareable relationships between interacting companies.

This project documents the procedure to setup a Centrifuge Node. For the step by step procedure, see [Docs](https://developer.centrifuge.io/docs/overview/introduction).

For information on the Centrifuge code, see the [go-centrifuge project](https://github.com/centrifuge/go-centrifuge).

To become a part of the Centrifuge community, read the [Code of Conduct](https://developer.centrifuge.io/docs/overview/code-of-conduct) and join [Slack](https://centrifuge.io/slack/).

## Contributing

### _Please_, feel free to make any contributions you feel will make Centrifuge Documentation better.

**Submit all pull requests to the develop branch**

## Development

### Images

Place all the static images under `src/images` folder and
add the relative path of the image along with alt tag in the Markdown file like below

```
![Tinlake UI](../../../src/images/tinlake/tinlake-ui.png)
```

To style the above image for a specific width or inlining with content,
add the below line to the `src/components/DocsContent/styles.css` file

```
img[alt="Tinlake UI"] {
    width: 350px;
    float: right; // To align image left/right to the content
}
```

### LaTeX

We're using `KaTeX` to display Math formulas inside the Markdown like below:

```
$$
D = P \times (1 + \frac{r}{n})^{nt}
$$
```

## License
Centrifuge Documentation is licensed under the [Creative Commons Attribution-ShareAlike 2.0 License](https://creativecommons.org/licenses/by-sa/2.0/deed.en_GB)

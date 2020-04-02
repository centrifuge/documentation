# Centrifuge Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7118d58-bd34-4f3d-97bd-00b8dc1ad2bd/deploy-status)](https://app.netlify.com/sites/centrifuge-documentation/deploys)

This is a Gatsby site.

The develop branch is continuously deployed to a preview site. [View dev site](http://develop.developer.centrifuge.io/)

The develop branch is merged to production weekly (unless we need to do a release sooner than that).

The master branch is continuously deployed to production.)

## About

Centrifuge is an open, decentralized operating system which provides a method to create, exchange, and use the data that is used in the financial supply chain. It creates transparent and shareable relationships between interacting companies.

This project documents the procedure to setup a Centrifuge Node. For the step by step procedure, see [Docs](https://developer.centrifuge.io/).

For information on the Centrifuge code, see our other repos.

To become a part of the Centrifuge community, read the [Code of Conduct](https://developer.centrifuge.io/cent-node/further-reading/contributing/) and join [Slack](https://centrifuge.io/slack/).

## Contributing

### _Please_, feel free to make any contributions you feel will make Centrifuge Documentation better.

**Submit all pull requests to the develop branch**

## Development

### Images

Place all the static images under `docs/images` folder and
add the relative path of the image along with alt tag in the Markdown file like below

```md
![Tinlake UI](../../images/tinlake/tinlake-ui.png)
```

You can use styling attributes on images

```md
![Tinlake UI](../../images/tinlake/tinlake-ui.png#width=200px;float=right)
```

For more information and how to add custom attributes, refer to the [gatsby-remark-image-attributes](https://github.com/rbeer/gatsby-remark-image-attributes) plugin.

### LaTeX

We're using `KaTeX` to display Math formulas inside the Markdown like below:

```
$$
D = P \times (1 + \frac{r}{n})^{nt}
$$
```

## License
Centrifuge Documentation is licensed under the [Creative Commons Attribution-ShareAlike 2.0 License](https://creativecommons.org/licenses/by-sa/2.0/deed.en_GB)

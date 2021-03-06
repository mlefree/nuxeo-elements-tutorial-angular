# Nuxeo Elements tutorial for Angular

Our [Nuxeo Elements tutorial](https://doc.nuxeo.com/nxdoc/nuxeo-elements-tutorial/) for [Angular](https://angular.io/)

<img src="https://github.com/mlefree/nuxeo-elements-tutorial-angular/raw/master/screenshots/nuxeo-angular.png" style="width:100px;">

**Work in Progress** and wait for :
- [Jira on nuxeo-connection observer](https://jira.nuxeo.com/browse/ELEMENTS-955) but has a workaround (thanks to Nelson) : including *nuxeo-connection* in *index.html*, before any angular app manipulation.
- [Jira on import.meta import](https://jira.nuxeo.com/browse/ELEMENTS-960) but looks ok when you import widget by widget (like import '@nuxeo/nuxeo-ui-elements/widgets/nuxeo-document-suggestion';)
- Tests pb

## Project setup

```
npm install
```

You should have a Nuxeo running on http://localhost:8080. 
Please consider using [Nuxeo Docker Image](https://hub.docker.com/_/nuxeo/) :

``` 
$ docker run --name mynuxeo -p 8080:8080 -d nuxeo
```

### Compiles and hot-reloads for development

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

### Test

```
npm test
```

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html) 

(C) Copyright Nuxeo Corp. (http://nuxeo.com/)

All images, icons, fonts, and videos contained in this folder are copyrighted by Nuxeo, all rights reserved.

## About Nuxeo

Nuxeo dramatically improves how content-based applications are built, managed and deployed, making customers more agile, innovative and successful. Nuxeo provides a next generation, enterprise ready platform for building traditional and cutting-edge content oriented applications. Combining a powerful application development environment with SaaS-based tools and a modular architecture, the Nuxeo Platform and Products provide clear business value to some of the most recognizable brands including Verizon, Electronic Arts, Sharp, FICO, the U.S. Navy, and Boeing. Nuxeo is headquartered in New York and Paris. More information is available at www.nuxeo.com.


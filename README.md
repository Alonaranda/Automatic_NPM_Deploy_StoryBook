Para desplegar página en Git Pages, debes hacer built de tu proyecto y la carpeta nombrarla docs


- Usar estos plugins para trabajar con Semantic Versioning

https://www.npmjs.com/package/semantic-release

package.json
```js
"plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/git"
],
```
- Copyfiles:
https://www.npmjs.com/package/copyfiles

- rimraf: Borrar documentos
https://www.npmjs.com/package/rimraf


Cambiar el nombre de una carpeta que se crea:

 "build": "build-storybook -o docs"

Github token:
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

npm Tokne:
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
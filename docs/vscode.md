# VS Code Config 

Our team use this editor as IDE. 
Here are some useful configs and extensions we use

## Code Formatter

We encourage the use of [prettier](https://github.com/prettier/prettier) in your editor for consistent code style.

## Settings.json

```javascript
// Settings we use to overwrite the default ones
{
    "editor.rulers": [120],
    "editor.renderWhitespace": "boundary",
    "editor.dragAndDrop": true,

    // settings for `relative path` extension
    "relativePath.removeExtension": true,
    "relativePath.removeLeadingDot": true,

    // settings for `prettier` extension
    "prettier.singleQuote": true,
    "prettier.printWidth": 120,
    "prettier.useTabs": true,
    "prettier.tabWidth": 4
}
```

## Extensions 

* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Mithril Emmet](https://marketplace.visualstudio.com/items?itemName=FallenMax.mithril-emmet)
* [Prettier - JavaScript formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Relative Path](https://marketplace.visualstudio.com/items?itemName=jakob101.RelativePath)
* [UruIT React Snippets](https://marketplace.visualstudio.com/items?itemName=UruIT.uruit-react-snippets)

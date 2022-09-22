
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/davidemoscatelli/Progetti/sito-ricette/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/davidemoscatelli/Progetti/sito-ricette/src/pages/404.js")),
  "component---src-templates-index-js": preferDefault(require("/Users/davidemoscatelli/Progetti/sito-ricette/src/templates/index.js")),
  "component---src-templates-recipe-js": preferDefault(require("/Users/davidemoscatelli/Progetti/sito-ricette/src/templates/recipe.js"))
}


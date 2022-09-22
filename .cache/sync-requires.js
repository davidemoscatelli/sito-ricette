
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/davidemoscatelli/test-sito/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/davidemoscatelli/test-sito/src/pages/404.js")),
  "component---src-templates-index-js": preferDefault(require("/Users/davidemoscatelli/test-sito/src/templates/index.js")),
  "component---src-templates-recipe-js": preferDefault(require("/Users/davidemoscatelli/test-sito/src/templates/recipe.js"))
}


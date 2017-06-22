// Variables
var article = new Article()

// Test functions
function testArticleHaveHeadline() {
  assert.isEqual(article.headline, "headline");
}

function testArticleHaveSummary() {
  assert.isEqual(article.summary, "summary");
}

function testArticleHaveFullArticle() {
  assert.isEqual(article.fullArticle, "massive string");
}

// Test calls
testArticleHaveHeadline();
testArticleHaveSummary();
testArticleHaveFullArticle();

function testArticleHaveHeadline() {
  var article = new Article();
  assert.isEqual(article.headline, "headline")
}

testArticleHaveHeadline();

function main() {
  const doc = DocumentApp.create("Hello, world!");
  doc
    .getBody()
    .appendParagraph("This document was created by Google Apps Script.");
}

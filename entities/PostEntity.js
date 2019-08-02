const Entity = require("./Entity");
let content = title => {
  return `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title"><a href="./${title}.html">${title}</a></h5>
      <h6 class="card-subtitle mb-2 text-muted">SomeDate</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
`;
};

module.exports = title => Entity(content(title));

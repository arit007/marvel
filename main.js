function character() {
    let urlQueryParameters = new URLSearchParams(window.location.search),
      queryParameterName = urlQueryParameters.get("name"),
      name = document.getElementById("name").value;
    
    // console.log(name);
  
    if (queryParameterName !== null && queryParameterName !== "") {
      document.getElementById("name").value = queryParameterName;
      connection();
    } else if (name !== null && name !== "") {
      document
        .getElementById("connectionForm")
        .addEventListener("submit", connection);
    } else {
      document.getElementById("characterSection").innerHTML =
        '<h2 id="characterMainTitle">Enter search term above...</h2>';
    }
  }
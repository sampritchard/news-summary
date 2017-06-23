var xhr = new XMLHttpRequest();
xhr.open('GET', "https://content.guardianapis.com/search?api-key=6211c929-454e-45c6-b48e-eaa58111aa69", true);
xhr.send();

// xhr.addEventListener("readystatechange", processRequest, false);
xhr.onreadystatechange = processRequest;

function processRequest (e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
    // alert(response.response.results[0].webTitle);
    var array = [];
    for (i = 0; i < response.response.results.length; i++) {
      array.push(response.response.results[i].webTitle)

    }
    console.log(array);
  }
}

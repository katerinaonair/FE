/*
  AJAX - Asynchronous Javascript And Xml
  It can update data dinamicaly without updating the entire page.
  The heart of AJAX technology is the XML HTTP Request():
  - Methods:
      abort()
      getAllResponseHeaders()
      getResponseHeader()
      open(method,url,async)
      send()
  - Object proprieties:
      onreadystatechange
      onreadystatechangeresponseText
      responseXML
      status
      statusText
*/
var xhr = new XMLHttpRequest();

//3 parameters GEt/POST, path to the file, sync/async = true/false
xhr.open('GET', 'data.json', true);
//activates open, sets the parameters:
xhr.send();

xhr.onreadystatechange = function(){
  //tranck the value of ready state
  console.log(xhr.readyState);
  console.log(xhr.status);
  console.log(xhr.statusText);
}

xhr.onload = function(){
  var myStuff = JSON.parse(xhr.responseText);
  console.log(myStuff);
}

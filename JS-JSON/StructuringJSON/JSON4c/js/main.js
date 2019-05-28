// JavaScript Document
var hotelInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        console.log(hotelInfo);
        display(0);

    } // end if
} // end function

function display(x){
  console.log(hotelInfo[x]);
//console.log(document.getElementById('roomName'));

  document.getElementById('roomName').innerHtml = hotelInfo[x].name;
  document.getElementById('desc').innerHTML = hotelInfo[x].description;
  document.getElementById('photo').src = hotelInfo[x].photo;

  document.getElementById('weekday').innerHTML = hotelInfo[x].cost.weekday;
  document.getElementById('weekend').innerHTML = hotelInfo[x].cost.weekend;

  details ="";
  for(i =0; i < hotelInfo[x].details.length; i++){
  //  console.log(hotelInfo[x].details);
    details += "<p>"+hotelInfo[x].details[i]+"</p>";
  }
  document.getElementById('details').innerHTML = details;


}
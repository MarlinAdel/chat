function chat(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
var messages = document.getElementById('messages');
var textBox = document.getElementById('textBox');
var btnSend = document.getElementById('btn-send');

btnSend.addEventListener('click' , function(){
  var messageConatiner = document.createElement('div');
  var message = document.createElement('p');
  var time = document.createElement('p');
  messageConatiner.classList.add("messageConatiner");
  message.classList.add("message");
  time.classList.add("time");
  time.innerHTML = formatAMPM(new Date);
  message.innerHTML = textBox.value;
  messages.appendChild(messageConatiner);
  messageConatiner.appendChild(message);
  messageConatiner.prepend(time);

  textBox.value = '';
})

textBox.addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { 
    var messageConatiner = document.createElement('div');
    var message = document.createElement('p');
    var time = document.createElement('p');
    messageConatiner.classList.add("messageConatiner");
    message.classList.add("message");
    time.classList.add("time");
    time.innerHTML = formatAMPM(new Date);
    message.innerHTML = textBox.value;
    messages.appendChild(messageConatiner);
    messageConatiner.appendChild(message);
    messageConatiner.prepend(time);
  
    textBox.value = '';
  }
});


// var messages2 = document.getElementById('messages2');
// var textBox2 = document.getElementById('textBox2');
// var btnSend2 = document.getElementById('btn-send2');



// btnSend2.addEventListener('click' , function(){
//   var messageConatiner2 = document.createElement('div');
//   var message2 = document.createElement('p');
//   var time2 = document.createElement('p');
//   messageConatiner2.classList.add("messageConatiner2");
//   message2.classList.add("message");
//   time2.classList.add("time");
//   time2.innerHTML = formatAMPM(new Date);
//   message2.innerHTML = textBox2.value;
//   messages2.appendChild(messageConatiner2);
//   messageConatiner2.appendChild(message2);
//   messageConatiner2.prepend(time2);

//   textBox2.value = '';
// })

// textBox.addEventListener('keypress', function (e) {
//   var key = e.which || e.keyCode;
//   if (key === 13) { 
//     var messageConatiner = document.createElement('div');
//     var message = document.createElement('p');
//     var time = document.createElement('p');
//     messageConatiner.classList.add("messageConatiner");
//     message.classList.add("message");
//     time.classList.add("time");
//     time.innerHTML = formatAMPM(new Date);
//     message.innerHTML = textBox.value;
//     messages.appendChild(messageConatiner);
//     messageConatiner.appendChild(message);
//     messageConatiner.prepend(time);
  
//     textBox.value = '';
//   }
// });
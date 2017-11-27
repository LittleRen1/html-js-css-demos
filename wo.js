setInterval(function(){
  var date = new Date();
  var p = document.getElementById('time')
  p.style.fontSize="5px";
  p.innerHTML = date.toLocaleString();
  p.style.textAlign="right";
  p.style.color="#dddddd"
},1000);

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
console.log("skrskr");
var list = document.getElementById('myUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.classList.add("spanio");

  let date=document.getElementById("date").value;
  let dateText = document.createTextNode(date)

  let datespan=document.createElement('span');
  datespan.appendChild(dateText);
  li.appendChild
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  span.appendChild(t);
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    li.appendChild(span);
    li.appendChild(datespan);
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 

// onclick change color
/*var btn = document.createElement("button");
var div=document.getElementById("myDIV");
btn.classList.add("btnchange");
btn.innerHTML="Color";
div.prepend(btn);*/
var i=0;
var colors=["#AB274F","#FAEBD7","00FFFF","#B2BEB5","#BFFF00"];

  document.querySelector(".btnchange").addEventListener("click",function(){
    i=i<colors.length ? ++i :0;
    document.querySelector("#myDIV").style.background= colors[i];
  })


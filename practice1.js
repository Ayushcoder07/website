var a="hello ayush";
console.log(a);
// const searchbar =document.getElementById('searchbar');
// console.log(searchbar);
// searchbar.addEventListener('keyup', (e) => {
// console.log(e);
// });
let time= new Date();
console.log(time);
let newdate=new Date(4024,1,20,8,34);
console.log(newdate);
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// JavaScript code
// search_pd = () =>{
//   const searchbox = document.getElementById("searchbar").value.toUpperCase();
//   const storeitems=document.getElementById("inline")
//   const product=document.querySelectorAll("same")
//   const pname=storeitems.getElementsByClassName("hd")
  
//   for (var i = 0; i < pname.length; i++){
//     let match=product[i].getElementsByClassName('hd')[0];
//     if(match){
//       let textvalue=match.textContent || match.innerHTML
//       if(textvalue.toUpperCase().indexOf(searchbox) > -1){
//         product[i].style.display="";
//       }
//       else{
//         product[i].style.display="none";
//       }
//     }
//   }
// }
function search_pd() {
  var input, filter, ul, li, h3, i, txtValue;
  input = document.getElementById('searchbar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("inline");
  li = ul.getElementsByClassName('same');

  for (i = 0; i < li.length; i++) {
    h3 = li[i].getElementsByTagName("h3")[0];
    txtValue = h3.textContent || h3.innerText;
    
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function handleAddToCartClick(itemName) {
  // Make an AJAX request to add the item to the cart
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          // Item added successfully
          console.log("Item added to cart.");
      }
  };
  xhttp.open("POST", "add_to_cart.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("item=" + encodeURIComponent(itemName));
}

function startSpeechRecognition() {
  // Check if the browser supports speech recognition
  if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    
    // Configure speech recognition options
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    // Start speech recognition
    recognition.start();

    // Event fired when speech recognition results are available
    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      document.getElementById('searchbar').value = transcript;
      
      // Perform search or other actions with the transcript
      search_pd();
    };
    
    // Event fired when speech recognition is ended
    recognition.onend = function() {
      console.log('Speech recognition ended');
    };
    
    // Event fired when speech recognition encounters an error
    recognition.onerror = function(event) {
      console.error('Speech recognition error', event.error);
    };
  } else {
    console.log('Speech recognition is not supported in this browser.');
  }
}
// let image = document.getElementById('image');
// let images = ['d1.jpg', 'd2.jpg', 'd3.jpg', 'd4.jpg'];

// setInterval(function() {
//   let random = Math.floor(Math.random() * 4);
//   image.src = images[random];
// }, 800);
var images=['d1.jpg', 'd2.jpg', 'd3.jpg', 'd4.jpg'];
var  index=0;
function change(){
  document.images.src=images[index];
  if(index==3)
  {
    index=0;
  }
  else{
    index++;
  }
  setInterval(change(),1000);
}
window.onload=change();

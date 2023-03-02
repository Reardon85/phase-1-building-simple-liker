// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function init() {
  const glyphs = document.querySelectorAll(".like-glyph")

  glyphs.forEach(addingEventListener)
}



function addingEventListener(glyph){


  glyph.addEventListener('click', (e)=>{

    mimicServerCall()
    .then((resp) => {

      if(glyph.innerText === EMPTY_HEART){
        glyph.innerText = FULL_HEART;
        console.log(glyph.innerText)
        glyph.className = "activated-heart"

      } else{
        glyph.innerText = EMPTY_HEART;
        console.log("empt")
        glyph.className = ""
      }

    })
    .catch((error) => {

      const errorDiv = document.querySelector("#modal");
      const errorMsg = document.getElementById("modal-message");

      errorMsg.textContent = error;
      errorDiv.className = "";
      setTimeout(() => errorDiv.className = "hidden", 3000)
    }) 

  })

}

init()
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

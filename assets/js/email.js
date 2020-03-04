console.log("It Works")

$(document).ready(function (){
  $('.primary').click(function (event){
    console.log("Click")

    var name = $('.name').val()
    var email = $('.email').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if (name.length > 0) {
    }else {
      statusElm.append("<div>Name is not valid</div>")
      event.preventDefault()
    }

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
    }else {
      statusElm.append("<div>Email is not valid</div>")
      event.preventDefault()
    }

    if (message.length > 0) {
    }else {
      statusElm.append("<div>Message is not valid</div>")
      event.preventDefault()
    }

  })
})

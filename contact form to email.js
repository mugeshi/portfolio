function emailSend(){

    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "millycyrus@gmail.com",
    Password : "AF1C740023C1A31BF0604839F91064B31668",
    To : "nicolemugeshi@gmail.com",
    From : "millycyrus@gmail.com",
    Subject : "This is the subject",
    Body : message
}).then(
  message => alert(message)
);
}
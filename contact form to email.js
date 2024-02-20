let cf = document.getElementById("contactForm");
cf.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    handleSubmit();
  },
  false
);

let submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
  },
  false
);

function handleSubmit() {
  emailSend();
  // reset();
  // return false,

  console.log("formcontact");
}

function emailSend() {
  var userName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "stellamugy@gmail.com",
    Password: "133AD6EF5DAB307314350300B1B6B6712B0F",
    To: "nicolemugeshi@gmail.com",
    From: "nicolemugeshi@gmail.com",
    Subject: "Message from portfolio: " + userName,
    Body: message + " from " + email,
  }).then((message) => alert(message));
}

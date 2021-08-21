const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value == "") {
    return alert("please fill in all field");
  }

  if (email.value == "") {
    return alert("please fill in all field");
  }
  if (subject.value == "") {
    return alert("please fill in all field");
  }
  if (message.value == "") {
    return alert("please fill in all field");
  }

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json", "https://resume-contact-form.herokuapp.com/");
  xhr.onload = function () {
    console.log(xhr.responseText);

    if (xhr.responseText == "success") {
      alert("Email sent");
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    } else {
      alert("Someting went wrong");
    }
  };
  xhr.send(JSON.stringify(formData));
});
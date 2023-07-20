function buttonEmailAfter() {
  document.getElementById("emailsent").innerHTML = "email sent!";
}

function buttonSmsAfter() {
  document.getElementById("smssent").innerHTML = "sms sent!";
}

function formToApi(event, typeOfSending) {
  event.preventDefault();

  var data = {
    typeOfSending: typeOfSending,
    destinationEmail: document.getElementsByName("email")[0].value,
    phoneNumber: document.getElementsByName("sms")[0].value,
    message: document.getElementsByName("message")[0].value
  };

  fetch(
    "https://4o21z6a0od.execute-api.ap-southeast-2.amazonaws.com/sendingStage/sending",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      mode: "no-cors"
    }
  );
}

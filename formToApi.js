function formToApi(event, typeOfSending) {
  event.preventDefault();

  var data = {
    typeOfSending: typeOfSending,
    destinationEmail: document.getElementsByName("email")[0].value,
    phoneNumber: document.getElementsByName("sms")[0].value,
    message: document.getElementsByName("message")[0].value
  };

  fetch(
    "https://q2cu8fu8f0.execute-api.ap-southeast-2.amazonaws.com/sendingStage/sending",
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



ssh -i "/Users/kevin/AccessKeysAWS/ec2forES.pem" ec2-user@ec2-54-252-71-104.ap-southeast-2.compute.amazonaws.com -ND 8157
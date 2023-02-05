new TypeIt('#title_animation', {
  strings: ['Saleh Balakişiyev', 'Front end web dev.'],
  loop: true,
}).go();

function sendEmail() {
  console.log('Sent');
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'username',
    Password: 'password',
    To: 'salehb.professional@gmail.com',
    From: 'you@isp.com',
    Subject: 'This is the subject',
    Body: 'And this is the body',
  }).then((message) => alert(message));
}

$('#send_email_btn').click(function (event) {
  // console.log(event);
  debugger;
  event.preventDefault();
  // sendEmail();
});

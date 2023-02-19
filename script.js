new TypeIt('#title_animation', {
  strings: ['Saleh Balakişiyev', 'Front end web dev.'],
  loop: true,
}).go();

emailjs.init('cSd3aq2p237q1DKup');

$('#email_form_submit').submit(function (event) {
  event.preventDefault();
  emailjs
    .send('service_bqlcpje', 'template_jqa40mg', {
      from_name: `Portfolio ${$('#name').val()}`,
      email_id: $('#email').val(),
      message: $('#message').val(),
    })
    .then(() => {
      alert('Email successfully sent.');
    });
});

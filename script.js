new TypeIt('#title_animation', {
  strings: ['Saleh Balakişiyev', 'Front end web dev.'],
  loop: true,
}).go();

emailjs.init('cSd3aq2p237q1DKup');

$('#email_form_submit').submit(function (event) {
  event.preventDefault();
  const data = {
    from_name: `${$('#name').val()}`,
    email_id: $('#email').val(),
    message: $('#message').val(),
  };
  if (!(data.email_id && data.from_name && data.message)) {
    alert('Please fill all the fields in the form!');
    return;
  }
  emailjs.send('service_bqlcpje', 'template_jqa40mg', data).then(() => {
    alert('Email successfully sent.');
  });
});

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pepe.does.test@gmail.com',
    pass: 'labas123'
  }
});

const mailOptions = {
  from: 'pepe.does.test@gmail.com',
  to: 'linas.se7227@go.kauko.lt',
  subject: 'Temos pavadinimas',
  text: 'Tekstas bet ne lorem ipsum'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'riddhi.bhade@sufalamtech.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from:'riddhi.bhade@sufalamtech.com',
        subject: `Good bye, ${name}!`,
        text:'I would like to know reason for cancelation of your account. Is there anything with which we can keep you busy here? Let us know. Thank you!'
    })
}
//backteck here ``
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
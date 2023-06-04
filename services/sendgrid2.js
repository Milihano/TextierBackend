// require('dotenv').config()
// const sgMail = require('@sendgrid/mail')
// const Handlebars = require("handlebars")
// const logger = require('../logger')
// const {ErrorHandler} = require('../enums/error_handler')
// const fs = require('fs')
// const path = require('path')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const readMyFileAndReturnPromise = (dirpath) => {
    
//     return new Promise((resolve, reject) => {
        
//         fs.readFile(dirpath, { encoding: 'utf-8' }, (err, fileRead) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(fileRead)
//          })
        

//     })
    
// }


// const readFileAndSendEmail = async (toEmail, emailHeader, dataReplacement, filename) => {
    
//     let dirpath = path.join(__dirname, `../templates/${filename}.html`)
//     let readTheFile = await readMyFileAndReturnPromise(dirpath)

//     const template = Handlebars.compile(readTheFile)
//     const result = template(dataReplacement)
//     const msg = {
//         to: toEmail,
//         from: {
//             email: 'info@zulfahgroup.com', // Use the email address or domain you verified above
//             name: 'Zulfah',
//         },
//         subject: emailHeader,
//         html: result,
//     }

//     sgMail.send(msg)
//         .then(() => {
//         console.log("suucess")
//         return "suucesss"
//     })
//     .catch(err => {
//        //log that the email does not exist
//         logger.error({
//         message: `Email service could not send the email with error:${JSON.stringify(err)}`,
//         status: 500,
//     })
//         const errorData = new Error()
//         errorData.message = "Email service could not send email" 
//         errorData.error_code = 500
//         errorData.type = ErrorHandler.EMAIL_SERVICE
//         return next(errorData) 
//     })

// }


// module.exports = {
//     readFileAndSendEmail
// }
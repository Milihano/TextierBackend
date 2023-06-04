const express = require('express')
const router = express.Router()
const { register, verifyemailOtp, resendEmailOtp, showprofile } = require('../controllers/Register')
const { Login } = require('../controllers/Login')
const { authorization } = require('../middlewares/authorization')
const { Updatecustomer } = require('../controllers/Update')
const { changepassword } = require('../controllers/Changepassword')
const { forgetpassword, verifyFPotp } = require('../controllers/Forgetpassword')




/**
 * create a new record
 * @swagger
 * /register:
 *   post:
 *     summary: creates a new account
 *     description: This Creates a new record for the customer
 *     tags:
 *       - Account
 *     produces:	 
 *       - application/json	 
 *     parameters:	 
 *       - name: fullname	 
 *       - in: body	 
 *         required: true
 *       - name: username	 
 *       - in: body	 
 *         required: true
 *       - name: email	 
 *       - in: body	 
 *         required: true
 *       - name: password	 
 *       - in: body	 
 *         required: true 
 *       - name: repeat_password
 *       - in: body	 
 *         required: true
 *       - name: gender
 *       - in: body	 
 *         required: false
 *       - name: dob
 *       - in: body	 
 *         required: true
 *       - name: country
 *       - in: body	 
 *         required: false
 *       - name: phone
 *       - in: body	 
 *         required: false
 *     responses:
 *        200:
 *          description: Account created.
 *        400:
 *          description: Bad Request
*/
router.post('/register', register)

/**
 * create a new record
 * @swagger
 * /verifyemailOtp:
 *   get:
 *     summary: Verifying new account
 *     description: This Verifies The Otp The Customer Inputed
 *     tags:
 *       - Account
 *     produces:	 
 *       - application/json	 
 *     parameters:	 
 *       - name: otp	 
 *       - in: path 
 *         required: true
 *     responses:
 *        201:
 *          description: Account created.
 *        400:
 *          description: Bad Request
*/
router.get('/verify-email-OTP/:_otp/:email', verifyemailOtp)

/**
 * create a new record
 * @swagger
 * /resendEmailOtp:
 *   get:
 *     summary: Resends Otp
 *     description: This Resends The Otp To Customer
 *     tags:
 *       - Account
 *     produces:	 
 *       - application/json	 
 *     parameters:	 
 *       - name: otp
 *         in: path	 
 *         required: true
 *     responses:
 *        201:
 *          description: Account created.
 *        400:
 *          description: Bad Request
*/
router.get('/resend-OTP/:email', resendEmailOtp)

/**
 * create a new record
 * @swagger
 * /Login:
 *   get:
 *     summary: Logs Customer Into Account
 *     description: This Logs The Customer Into His/Her Account
 *     tags:
 *       - Account
 *     produces:	 
 *       - application/json	 
 *     parameters:	 
 *       - name: username
 *       - in: body	 
 *         required: true
 *       - name: password
 *       - in: body	 
 *         required: true
 *     responses:
 *        200:
 *          description: User Loged In.
 *        400:
 *          description: Incorrect Username/Password
*/
router.get('/Login', Login)


/**
 * create a new record
 * @swagger
 * /Updatecustomer:
 *   put:
 *     summary: updates customers profile 
 *     description: This Updates The Customer Profile Information
 *     tags:
 *       - Account
 *     produces:	 
 *       - application/json	 
 *     parameters:	
 *        - name: fullname	 
 *        - in: body	 
 *          required: false 
 *        - name: username	 
 *        - in: body	 
 *          required: false  
 *        - name: email	 
 *        - in: body	 
 *          required: false
 *        - name: phone	 
 *        - in: body	 
 *          required: false
 *        - name: country	 
 *        - in: body	 
 *          required: false
 *        - name: dob	 
 *        - in: body	 
 *          required: false
 *     responses:
 *        200:
 *          description: Profile Updated.
 *        400:
 *          description: Network Error, Try Again Later
*/
router.put('/update', authorization, Updatecustomer)

/**
 * create a new record
 * @swagger
 * /showprofile:
 *   get:
 *     summary: Profile
 *     description: This Shows The User His/Her Profile Information
 *     tags:
 *       - Account
 *     produces:	 
 *       - application/json	 
 *     responses:
 *        200:
 *          description: Profile Information.
 *        400:
 *          description: Error Try again Later
*/
router.get('/profile', authorization, showprofile)


/**
 * create a new record
 * @swagger
 * /changepassword:
 *   put:
 *     summary: change password 
 *     description: This Changes The Customer Password
 *     tags:
 *       - Account
 *     produces:	 
 *       - application/json	 
 *     parameters:	
 *       - name: current password	 
 *       - in: body	 
 *         required: true 
 *       - name: new password	 
 *       - in: body	 
 *         required: true  
 *       - name: confirm new password	 
 *       - in: body	 
 *         required: true  
 *     responses:
 *        201:
 *          description: Password Sucessfully Updated.
 *        400:
 *          description: Bad request
*/
router.put('/changepassword', authorization, changepassword)

/**
 * create a new record
 * @swagger
 * /forgetpassword:
 *   get:
 *     summary: forget password 
 *     description: This Allows The User To Change His/Her Password When Forgotten
 *     tags:
 *       - Account
 *     produces:	 
 *       - application/json	 
 *     parameters:	
 *      - name: email	 
 *      -  in: body	 
 *         required: true   
 *     responses:
 *        200:
 *          description: Otp has been sucessfully sent.
 *        400:
 *          description: Username or Email Does Not Exist
*/
router.get('/forget_password', forgetpassword)

/**
 * create a new record
 * @swagger
 * /verifyFPotp:
 *   get:
 *     summary: otp forget password 
 *     description: This Verifies the otp for Forget Password
 *     tags:
 *       - Account
 *     produces:	 
 *       - application/json	 
 *     parameters:	
 *      - name: otp	 
 *      - in: body	 
 *        required: true
 *      - name: new password	 
 *      - in: body	 
 *        required: true 
 *      - name: confirm new password	 
 *      - in: body	 
 *        required: true     
 *     responses:
 *        201:
 *          description: Password Sucessfully Updated.
 *        400:
 *          description: Otp is incorrect
*/
router.get('/verifyFPOtp/:_otp/:email', verifyFPotp)




module.exports = router
const Joi = require('joi')
const {generateToken, verifyToken} = require('../utils/jwt') //token
const { hashPassword, comparePassword} = require('../utils/bcrypt') //hash password
const {} = require('../models')
const errorHandler = require('../utils/error-handler') //handling error


module.exports = {
  register : async (req,res) => {
    const body = req.body
    try {
      const schema = Joi.object ({ //validate data
        email: Joi.string().email().required(), //validasi email
        firstName : Joi.string().required(),
        lastName : Joi.string().required(),
        password : Joi.string(),required()
      })
      const {error} = schema.validate(body)
      if(error){
        res.status(400).json({
          status : "Bad Request",
          message : error.message,
          result : {}
        })
      }
      /* mencari didtabel <nama table> base on email
      const check = await <nama table>.findOne ({
        where : {
          email : body.email
        }
      })
      //check jika email sudah ada di table <nama table>
     if (check){
       return res.status(400).json({
         status : "Bad Request",
         message : "Email already exist, please use another email",
         resjult : {}
       })
     }
     */
    hashPassword(body.password) //password hash
    /* create to table <nama table>
    const admin   = await <nama table>.create({
      firstName : body.firstName,
      lastName : body.lastName
      email : body.email,
      passsword : hashPassword
    })
    */
   const payload = {
     id : admin.id,
     email : admin.email
   }
    const token =  generateToken(payload)
    
    res.status(201).json({
      status : "Success",
      message : "Successfully save the data",
      result : token
    })

    } catch (error) {
      errorHandler(res,error)
    }
  },
  login : async (req,res) =>{
    const {email,password} = req.body
    try {
      const schema = Joi.object({
        email : Joi.string().required().email(),
        password : Joi.string().min(4).max(25).required()
      }) 
      
      const {error} = schema.validate({email,password})
      if (error){
        return res.status(400).json({
          status : "Bad Request",
          message : error.message,
        result : {}
        })
      }
      /* mencari ditable <nama table> by email
      const admin = await <nama table>.findOne({ where :{email}})
     if (!admin){
       return res.status(401).json({
         status : "Unauthorized",
         message : "Email not registered",
         result : {}
       })
     }
      */
    /*check token
    const isValid = await verifyToken (password, admin.password) 
    if (!isValdi) {
      return res.status(401).json({
        status  :"Bad request",
        message : "Incorrect email or password",
        result : {}
      })
    } 
    */
    const payload = {
      id : admin.id,
      email : admin.email
    }
     const token =  generateToken(payload)
     
     res.status(200).json({
       status : "Success",
       message : "Successfully login",
       result : {token}
     })
    } catch (error) {
      errorHandler(res,error)
    }
  }
 }
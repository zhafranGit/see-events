const joi = require("joi");
<<<<<<< HEAD
const { User} = require("../models");
const { hashPassword, comparePassword} = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");

=======
const {
  User
} = require("../models");
const {
  hashPassword,
  comparePassword
} = require("../utils/bcrypt");
const {
  generateToken
} = require("../utils/jwt");
>>>>>>> eebb2096331fd89d617bae4a7b604538d2f58e7b
const errorHandler = require("../utils/error-handler");

module.exports = {
  register: async (req, res) => {
<<<<<<< HEAD
    const { firstName, lastName,email, password } = req.body;
=======
    const {
      firstName,
      lastName,
      email,
      password
    } = req.body;
>>>>>>> eebb2096331fd89d617bae4a7b604538d2f58e7b
    try {
      const schema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
      });

<<<<<<< HEAD
      const {       error      } = schema.validate(req.body);
=======
      const {
        error
      } = schema.validate(req.body);
>>>>>>> eebb2096331fd89d617bae4a7b604538d2f58e7b
      if (error) {
        return res.status(400).json({
          message: error.message,
          status: "Bad Request",
        });
      }

      const check = await User.findOne({
        where: {
          email
        },
      });

      if (check) {
        return res.status(400).json({
          message: "Email is Already in Use",
          status: "Bad Request",
        });
      }

      const passwordHashed = hashPassword(password);

      const user = await User.create({
        firstName,
        lastName,
        email,
        password: passwordHashed,
      });

      const token = generateToken({
        id: user.id,
        email: user.email
      });

      res.status(200).json({
        message: "Register Success",
        status: "OK",
        result: {
          token
        },
      });
    } catch (error) {
      errorHandler(res, error);
    }
  },

  login: async (req, res) => {
    const {
      email,
      password
    } = req.body;
    try {
      const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
      });

      const {
        error
      } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: error.message,
          status: "Bad Request",
        });
      }

      const user = await User.findOne({
        where: {
          email
        },
      });

      if (!user) {
        return res.status(401).json({
          message: "Incorrect Username or Password",
          status: "Unauthorized",
        });
      }

      const checkValid = comparePassword(password, user.password);
      if (!checkValid) {
        return res.status(401).json({
          message: "Incorrect Username or Password",
          status: "Unauthorized",
        });
      }

      const token = generateToken({
        id: user.id,
        email: user.email,
      });

      res.status(200).json({
        message: "Login Success",
        status: "OK",
        result: {
          token
        },
      });
    } catch (error) {
      errorHandler(res, error);
    }
  },
};
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

class AuthMiddleware {
  constructor() {
    this.signupSchema = Joi.object()
      .options({ abortEarly: false }) // forço o JOI a verificar TODOS os problemas mesmo após ele já ter encontrado um problema
      .keys({
        name: Joi.string().trim().min(3).max(100).required(),
        email: Joi.string().trim().email().required(),
        password: passwordComplexity(),
        confirmPassword:Joi.string().required().valid(Joi.ref('password'))
        // complexPasswrod: passwordComplexity().validate(password),
        // password_confirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
      });

    this.loginSchema = Joi.object()
      .options({ abortEarly: false })
      .keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().min(6).max(15).required(),
      });
  }

  signup = (req, res, next) => {
    // validar os dados enviados via body (campos obrigatorios corretamente preenchidos, etc....)
    const validationErrors = this.signupSchema.validate(req.body); // pegar as infos que vieram via body e validar contra o nosso schema

    if (validationErrors.error) {
      return res.status(400).json(this.mountErrorMessage(validationErrors.error.details));
    }

    next();
  }

  login = (req, res, next) => {
    const validationErrors = this.loginSchema.validate(req.body);

    if (validationErrors.error) {
      return res.status(400).json(this.mountErrorMessage(validationErrors.error.details));
    }

    next();
  }

  mountErrorMessage = errorDetails => {
    const fieldErrors = errorDetails.map(error => {
      return {
        field: error.context.key,
        message: error.message,
      };
    });

    const errorMessage = {
      message: 'There was a problem with your request',
      errors: fieldErrors,
    };

    return errorMessage;
  }

}

module.exports = new AuthMiddleware();

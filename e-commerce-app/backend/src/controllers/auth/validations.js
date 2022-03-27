import Joi from "joi";

export const SchemaSignUp = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
});

export const SchemaSignIn = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
});

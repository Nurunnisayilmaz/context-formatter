const Joi = require('joi');

const schema = Joi.object().keys({
    value: Joi.array().required()
}).unknown(true);

const Validate = () => {
    return (req, res, next) => {
        const result = schema.validate(req.body)
        if (result.error) {
            return res.status(400).json({code: 400, message: 'Invalid Input', error: result.error.details})
        }
        next();
    }
}


module.exports = {Validate}


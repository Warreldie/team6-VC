const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    
    const user = new User({
        username: username,
        email: email
    });
    await user.setPassword(password);
    await user.save().then(result => {
        let token = jwt.sign({
            uid: result._id,
            username: result.username
        }, 'secretWord');

        res.json({
            'status': 'success',
            'data': {
                'token': token
            }
        })
    }).catch(error => {
        res.json({
            'status': 'error'
        })
    })
};

module.exports.signup = signup;
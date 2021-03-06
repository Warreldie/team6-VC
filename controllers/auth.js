const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

const signup = async (req, res, next) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let tokens = 100;

    const user = new User({
        username: username,
        email: email,
        tokens: tokens
    });
    await user.setPassword(password);
    await user.save().then(result => {
        let token = jwt.sign({
            uid: result._id,
            username: result.username
        }, config.get('jwt.secret'));

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

const login = async (req, res, next) => {
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {
        if (!result.user) {
            res.json({
                "status": "failed",
                "message": "login failed"
            })
        }

        let token = jwt.sign({
            uid: result.user._id,
            username: result.user.username
        }, config.get('jwt.secret'));

    return res.json({
            "status": "success",
            "data": {
                "token": token
            }
    })
    }).catch(error => {
        res.json({
            "status": "error",
            "message": error
        })
    });
}

module.exports.signup = signup;
module.exports.login = login;
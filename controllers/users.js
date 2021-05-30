const User = require('../models/User');

const search = async (req, res, next) => {
    let query = req.body.query;

    let search = {
        "$or": [{ "username": { "$regex": query, "$options": "i" } }]
    }

    let output = [];

    User.find(search).limit(3)
        .then(
            users => {
                users.forEach(user => {
                    let obj = {
                        user: user.username
                    };
                    output.push(obj);
                })
                console.log(output);

                res.json({
                    "status": "success",
                    "users": output
                });
            }).catch(err => {
                res.sendStatus(404);
            })
};

const getUser = async (req, res) => {
    console.log(req.user);

    return res.json({
        "status": "success",
        "user": {
            "id": req.user._id,
            "username": req.user.username,
            "tokens": req.user.tokens
        }
    });
}

module.exports.search = search;
module.exports.getUser = getUser;
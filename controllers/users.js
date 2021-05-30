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

const getUser = async(req, res) => {
    let user = req.user._id;
    console.log(user);
}

module.exports.search = search;
module.exports.getUser = getUser;
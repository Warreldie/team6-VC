const User = require('../models/User');

const search = async (req, res, next) => {
    let query = req.body.query;

    let search = {
        "$or": [{ "username": { "$regex": query, "$options": "i" } }]
    }

    let output = [];

    User.find(search).limit(6)
        .then(
            users => {
                if(users && users.length && users.length > 0){
                    users.forEach(user => {
                        let obj = {
                            user: user.username
                        };
                        output.push(obj);
                    })
                }
                res.json(output);
            }) .catch(err => {
                res.sendStatus(404);
            })

    console.log(query);
};

module.exports.search = search;
const Transfer = require('../models/Transfer');
const User = require('../models/User');

const create = async (req, res) => {
    let sender = req.user.username;
    let recipient = req.body.recipient;
    let reason = req.body.reason;
    let message = req.body.message;
    let amount = req.body.amount;

    const transfer = new Transfer({
        sender: sender,
        recipient: recipient,
        reason: reason,
        message: message,
        amount: amount
    });

    await transfer.save().then(result => {
        res.json({
            'status': 'success',
            'data': result
        })
    }).catch(error => {
        res.json({
            'status': 'error'
        })
    })
};

const calcSaldo = async (req, res) => {
    let username = req.user.username;

    Transfer.find({
        $or: [
            { sender: username },
            { recipient: username }
        ]
    }).then(result => {
        let gain = 0;
        let loss = 0;
        let total = 0;

        result.forEach(token => {
            if (token.sender == username) {
                loss += token.amount;
            } else if (token.recipient == username) {
                gain += token.amount;
            }
        })

        total = req.user.tokens + gain - loss;

        res.json({
            'status': 'success',
            'data': total
        })
    }).catch(error => {
        res.json({
            "status": "error",
            "message": error
        })
    });
}

module.exports.create = create;
module.exports.calcSaldo = calcSaldo;
module.exports.updateSaldo = updateSaldo;
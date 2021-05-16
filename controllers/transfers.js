const Transfer = require('../models/Transfer');

const create = async (req, res, next) => {
    let recipient = req.body.recipient;
    let reason = req.body.reason;
    let message = req.body.message;
    let amount = req.body.amount;
    
    const transfer = new Transfer({
        recipient: recipient,
        reason: reason,
        message: message,
        amount: amount
    });

    await transfer.save().then(result => {
        res.json({
            'status': 'success'
        })
    }).catch(error => {
        res.json({
            'status': 'error'
        })
    })
}

module.exports.create = create;
const getAll = (req, res) => {
    res.json({
        "status": "get success"
    })
}

const create = (req, res) => {
  let transfer = req.body.username;

  res.json({
    'status': 'success',
    'data': transfer
})
}

module.exports.create = create;
module.exports.getAll = getAll;

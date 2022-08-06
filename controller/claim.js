const Claimer = require('../model/claimer');
const { isValidSubstrateAddress } = require('../utils');
const { SubmitTrx } = require('../utils/submitTrx');

exports.claimSEL = async(req, res) => {
  if(!isValidSubstrateAddress(req.body.address)) {
    return res.status(400).json({
      success: false,
      data: 'Invalid address!'
    })
  }
  if(req.body.bitriel_Id !== process.env.BITRIEL_ID) {
    return res.status(400).json({
      success: false,
      data: 'Invalid request!'
    })
  }
  
  // checking...
  const claimer = await Claimer.findOne({address: req.body.address});

  if(claimer) {
    return res.status(400).json({
      success: false,
      data: 'Invalid request!'
    })
  } else {
    await SubmitTrx({destination: req.body.address});
    await Claimer.create({
      address: req.body.address,
      bitriel_Id: req.body.bitriel_Id
    })
    return res.status(201).json({
      success: true,
      data: 'Request completed!'
    })
  }
}
const { checkAddress } = require('@polkadot/util-crypto');

exports.isValidSubstrateAddress = (address) => {
  const check1 = checkAddress(address, 204);
  const check2 = checkAddress(address, 972);
  if(check1 || check2) {
    return true;
  } else {
    return false;
  }
}
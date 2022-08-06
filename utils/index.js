const { checkAddress } = require('@polkadot/util-crypto');

exports.isValidSubstrateAddress = (address) => {
  const check1 = checkAddress(address, 204);
  const check2 = checkAddress(address, 972);

  console.log(check1, check2);
  if(check1[0] || check2[0]) {
    return true;
  } else {
    return false;
  }
}
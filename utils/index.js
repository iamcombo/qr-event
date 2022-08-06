const { checkAddress } = require('@polkadot/util-crypto');

exports.isValidSubstrateAddress = (address) => {
  const value = checkAddress(address, 204);
  return value[0];
}
const jwt = require('jsonwebtoken');
const NodeRSA = require('node-rsa');
const BigInteger = require('node-rsa/src/libs/jsbn');

const key = new NodeRSA();

function exportPubKey(modulus, exponent) {
  if (!modulus || !exponent) {
    return undefined;
  }
  key.importKey({
    n: new BigInteger(modulus, 10).toBuffer(),
    e: parseInt(exponent, 10),
  }, 'components-public');
  return key.exportKey('public');
}

function getVerifier(modulus, exponent) {
  const pubKey = exportPubKey(modulus, exponent);
  return (token) => {
    if (!pubKey) {
      throw new jwt.JsonWebTokenError('No public key provided');
    }
    return jwt.verify(token, pubKey);
  };
}

module.exports = { getVerifier };

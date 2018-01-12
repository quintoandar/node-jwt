# node-jwt

JWT signature verifier using public key modulus and exponent.


## Usage

```sh
npm install --save git+https://github.com/quintoandar/node-jwt.git#<latest-release-version>
```
[See releases](https://github.com/quintoandar/node-jwt/releases)


```js
const verify = require('quintoandar-jwt').getVerifier(modulus, exponent);

verify("your token");
```

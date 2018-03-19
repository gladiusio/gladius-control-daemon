# Gladius Control Daemon
Interacts with the Ethereum Blockchain and the node daemon

## Installation

* Clone repo `git clone git@github.com:gladiusio/gladius-control-daemon.git`
* Clone contracts `git clone git@github.com:gladiusio/gladius-contracts.git`
  * Change directory, `cd gladius-contracts`
  * Compile contracts, `truffle compile`
* Change directory to `control-daemon`
  * `cd ../control-daemon`
* Link contract ABI's
  * `ln -s ../gladius-contracts/build build`
* Install dependencies
  * `npm install`
* Run Server
  * `node index.js`
* Run local blockchain
  * In `gladius-contracts` run `truffle deploy --network truffle; truffle develop`
* Hit `/api/settings/start` with data, [docs here](https://github.com/gladiusio/gladius-control-daemon/tree/master/restdocs/settings#post-start)
  * You can generate a PGP key [here](https://pgpkeygen.com/)

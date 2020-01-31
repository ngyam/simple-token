const HDWalletProvider = require('truffle-hdwallet-provider')
require('dotenv').config()


module.exports = {
  networks: {
    volta: {
      network_id: "73799",
      gasPrice: "1",
      confirmations: 1,
      from: process.env.FROM,
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY.trim(), 'utf-8').trim(), 'https://volta-rpc.energyweb.org'),
      production: true
    },
    ewc: {
      network_id: "246",
      gasPrice: "1",
      confirmations: 1,
      from: process.env.FROM,
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY.trim(), 'utf-8').trim(), 'https://rpc.energyweb.org'),
      production: true
    },
  },
  compilers: {
    solc: {
      version: "0.5.14",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        }
      }
    }
  }
};

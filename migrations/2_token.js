const Token = artifacts.require("Token")

module.exports = function(deployer) {
  let argv = process.argv
  deployer.deploy(Token, argv[5], argv[6], argv[7])
}

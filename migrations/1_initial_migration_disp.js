const GRNDisperser = artifacts.require("GRNDisperser");

const {  issuanceAddress } = require("../helper");

module.exports = function (deployer) {
  return deployer
    .deploy(GRNDisperser, '0xCa7aC1dd35876A0dabec1ab1B37129c37B78a20f',issuanceAddress)
};

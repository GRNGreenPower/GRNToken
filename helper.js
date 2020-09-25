const issuanceAddress = '0xe084947bF2f0479840b44e2c897a3DbD188Ce60d';
const addresses = [
  "0x71dA8A08dd6d896b29A42FB7fCc6024b683E5fBa",
  "0x8526E54e637e1587DC2fb541e2877B7Dee70f363",
  "0x609Fe162570dFfa5543E9094B5c74805a5821581",
  "0xa49146834b952A12d85a5DFdEa65c419F09187AF",
  "0xe6a86f7Ee9b6a6086cFCf1866d8F654F275dDf03",
  "0xEedc03e868B3353c18848b46eFBb7debd958711B",
  "0xE83b46F8799cd5d9Dde38f7C31A0F9Df415ed914",
  "0xD6A891A4EEecC2e205344bCe4D927D295825eBB6",
  "0xcF1a075410424e13b4D84c173972F727EC9cFD23",
  "0xEec06b4ab5c98C778276836c6384141c6a057ACb",
  "0x4C4Bb5170F5d799c0cC3d9C92768f887b88D37DE",
  "0x40939515EccEDe6086bf51a1045A3DB63041838f",
  "0x4Ea164C75b333474aE72057a64aAaD296c8D8763",
  "0x861C55fcaBDf80d3d18aB6C5451295cD6D882967",
  "0x4214938c352d5aFDC7a36035926De6BBdc98b70a",
  "0x8A05841c1a75f777FdeFA22F8603B39Ed2d57b46",
  "0x8Ea807c24016C355a1e6Aa5B38e254e3AE4a7f99",
  "0x6087c197c180980675a24ff8A41794B14936F182",
  "0x9420315EA980d8eba7fff8230BB06fcA74Ad4A52",
  "0x995636F273eE9b8876139E43B12545C27e46F6Cc",
  "0x69c2A482a0719Cf445b78D6A312d7BC96717884E",
  "0x8C4388519fca625e05dBf641323c948489F06217",
  "0xaB4cFDf4536084bfa20D1c8ab47c74C5d1ed3584",
  "0x830aA94517acFA878651F23C417c0801937794f7",
  "0x872BB6c12f81C997460215592A9A54aeD4bBfB3B",
  "0x0Fd52E6327bf32954632D2B225FEA26e54d4Dff9",
  "0x9Fd779B52793f99E6b047A3aE42CfEd62eCe4d02",
  "0xd67570113bb23A0f5283abB16c43AfA02B1D01c0",
  "0xdE624AfC8e315fa297333b11d4F566508A50f1CD",
  "0xFf7C01D0e16fDB262FdAcb629e7876e10DED6C5B",
  "0xA2cb5FC779e357a6725dF8B2E61E721ab1E0Cf00",
  "0xc48982682AdA508B11393De509A00d6dA68d699b",
  "0x388Dc062093CCEEa1580CD2AA5Bc088872c3DEb1"
];

const getValuePerAddress = (addresses) => {
  // totalValue = 33 * 99823227 + 10
  const perAddress = 99823227;

  return addresses.map((_, i) => `${i === 0 ? perAddress + 10 : perAddress}000000000000000000`);
}


module.exports = {
  issuanceAddress,
  addresses,
  getValuePerAddress
};
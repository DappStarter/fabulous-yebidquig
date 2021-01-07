require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remove coach give enroll brisk twin'; 
let testAccounts = [
"0x354cf0bdab91dd29a18d1b401daef9408a8add8f65962c81f75da27b596427de",
"0x3e5ae4ea01832c6b13a94614fec312e5bb9e52d7f8dd40de452ace2113d76c0a",
"0xf46287ee41ef6f807746e575bdf4808bc261c2c70c9524a868e01bc082947590",
"0x7bf648dbb0c283268945136f66ed707cd8c0c81c8fddf55722b5e119f717ffd0",
"0x2c0556e0e435f832a7892f1bae27bdca6c92c9f22ef7397ac1cf735468dcd3e7",
"0x871a8fc9c81c76b2b00697e4b1cfd71785584ad9cf38ca09e7d8140bd11226b8",
"0xd32e4d3acf2a57249bf176601857bfa8f0e82b98d108d784888d5fc77b50f2cf",
"0x71458b83373a670b0640eba12e4eaa702222efe2e2c0ea69ed47056befda3b9b",
"0xfd827101a2bf0c1e74fd895dd2e084fb33d9f2024cd93a49c95539ccd81b86d2",
"0xfc9fe253dac011b21f50f6ef8fc386b744e9e97f3c6334f2f5868aa80a18faac"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

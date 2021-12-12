require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note meadow common jazz prize bone gesture'; 
let testAccounts = [
"0x948f8222a11879ee23708fd6ffcdb4c00dfb817b3773b850f32c9f163e5a1b16",
"0xfe2c72255da99cbd58841e78f92c1135c59094d2621866178d8ed493dc752b80",
"0xa9d8bd3731964582b0a5a65a95fa78bb94f93718e67f735b366a47351902f548",
"0xfd391db5852d36524fd6a1e2c253149216c6f3da6836af90cd1faaa3eb613670",
"0x5ed0d80f019777ff970e4cb85d2743cd5399e2cea377f4eda0b204141fbee366",
"0x9dbe7266ce734932a0f8d0ac4d6bfefd42ece64197674aa11d156ee98897d10d",
"0x61a98ece94d02111c88f21021b5b7cb576e75257c586f4e13405a2f584a6b5c9",
"0xb5379631653484991f5e082cc9678af3296378400c904ed266886dde80e10573",
"0xe83eddacd28b9ff07fc3a6b8fc14cdc95b6601c549d97e4a75e20aaaea82706d",
"0x909c02d5ab7b652c571c6abc3ca8e7244cb8bf76fabb87f8a69ea3b995d41fca"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



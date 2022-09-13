require("dotenv").config()

require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const COINMARKET_API_KEY = process.env.COINMARKET_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
module.exports = {
    // solidity: "0.8.4",
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
    },
    networks: {
        rinkeby: {
            url: RINKEBY_RPC_URL || "",
            accounts: [PRIVATE_KEY],
            chainId: 4,
            blockConfirmations: 6,
        },
    },
    gasReporter: {
        enabled: true,
        // outputFile: "gas-Report.txt",
        noColor: true,
        currency: "USD",
        coinmarketcap: COINMARKET_API_KEY,
        token: "ETH",
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
}

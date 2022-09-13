const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Withdrawing contracts")
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait(1)
    console.log("got it back")
}

main()
    .then(() => process.exit())
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

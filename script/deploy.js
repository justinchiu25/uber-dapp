// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const main = async ()  => {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const RideDapp = await hre.ethers.getContractFactory("RideDapp");
  const ridedapp = await RideDapp.deploy({ nonce: 33, gasPrice: 20000000000 });

  await ridedapp.deployed();

  console.log("RideDapp deployed to: ", ridedapp.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const runMain = async () => {
    try  {
      await main();
      process.exit(0);
    }
    catch (error) {
      console.error(error);
      process.exit(1);
    }
}


runMain();
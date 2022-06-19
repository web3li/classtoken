const main = async () => {
  try {
    const ClassToken = await hre.ethers.getContractFactory(
      "ClassToken"
    );
    const classToken = await ClassToken.deploy();
    await classToken.deployed();

    console.log("Contract deployed to:", classToken.address);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();
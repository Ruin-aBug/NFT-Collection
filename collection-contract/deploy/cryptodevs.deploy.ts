import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";
import { DeployFunction } from "hardhat-deploy/types";
import { WHITELISTED_ADDRESS, METADATA_URL } from "../constants";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, getChainId } = hre;
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();

	const cryptoDevs = await deploy("CryptoDevs", {
		from: deployer,
		log: true,
		args: [METADATA_URL, WHITELISTED_ADDRESS],
	});
	console.log("cryptoDevs address:", cryptoDevs.address);
	const chainId = await getChainId();
	if (chainId !== "31337") {
		// 在etherscan上验证合约
		// 需先在hardhat.config.ts中配置hardhat-etherscan
		await hre.run("verify:verify", {
			address: cryptoDevs.address,
			constructorArguments: [METADATA_URL, WHITELISTED_ADDRESS],
		});
	}
};

export default func;
func.tags = ["nft"];
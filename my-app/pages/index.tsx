import Head from 'next/head';
import Image from 'next/image';
import { use, useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import { NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI } from "../constants"
import Web3Modal from "web3modal";
import { BigNumber, Contract, providers, utils } from 'ethers';
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';

export default function Home() {
	const [walletConnected, setWalletConnected] = useState<boolean>(false);
	const [presaleStarted, setPresaleStarted] = useState<boolean>(false);
	const [presaleEnded, setPresaleEnded] = useState<boolean>(false);

	const [loading, setLoading] = useState<boolean>(false);
	const [isOwner, setIsOwner] = useState<boolean>(false);

	const [tokenIdsMinted, setTokenIdsMinted] = useState<string>("0");

	const web3ModalRef = useRef<Web3Modal>();

	async function getProviderOrSigner(isSigner: boolean = false): Promise<Web3Provider | JsonRpcSigner> {
		const provider = await web3ModalRef.current?.connect();
		const web3Provider = new providers.Web3Provider(provider);
		const { chainId } = await web3Provider.getNetwork();
		if (chainId !== 5) {
			window.alert("change network to goerli");
			throw new Error("change network to goerli");
		}
		if (isSigner) {
			const signer = web3Provider.getSigner();
			return signer;
		}
		return web3Provider;
	}

	async function presaleMint() {
		try {
			const signer = await getProviderOrSigner(true);
			const nft_contract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, signer);
			const tx = await nft_contract.presaleMint({ value: utils.parseEther("0.01") });
			setLoading(true);
			await tx.wait();
			setLoading(false);
			window.alert("You successfully minted a Crypto Dev!")

		} catch (e) {
			console.error(e);
		}
	}

	async function publicMint() {
		try {
			const signer = await getProviderOrSigner(true);
			const nft_contract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, signer);
			const tx = await nft_contract.mint({ value: utils.parseEther("0.01") });
			setLoading(true);
			await tx.wait();
			setLoading(false);
			window.alert("You successfully minted a Crypto Dev!")

		} catch (e) {
			console.error(e);
		}
	}

	async function connectWallet() {
		try {
			await getProviderOrSigner();
			setWalletConnected(true);
		} catch (e) {
			console.error(e);
		}
	}

	async function startPresale() {
		try {
			const signer = await getProviderOrSigner(true);
			const nft_contract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, signer);
			const tx = nft_contract.setPresale();
			setLoading(true);
			await tx.wait();
			setLoading(false);
			await checkIfPresaleStatused();
		} catch (e) {
			console.error(e);
		}
	}

	async function checkIfPresaleStatused(): Promise<boolean> {
		try {
			const provider = await getProviderOrSigner();
			const nft_contract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, provider);
			const isPresale = await nft_contract.presaleStarted() as boolean;
			if (!isPresale) {
				await getOwner();
			}
			setPresaleStarted(isPresale);
			return isPresale;
		} catch (e) {
			console.error(e);
			return false;
		}
	}

	async function checkIfPresaleEnded(): Promise<boolean> {
		try {
			const provider = await getProviderOrSigner();
			const nft_contract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, provider);
			const presaleEnded = await nft_contract.presaleEnded() as BigNumber;
			const hashEnded = presaleEnded.lt(Math.floor(Date.now() / 1000));

			setPresaleEnded(hashEnded);
			return hashEnded;
		} catch (error) {
			console.error(error);
			return false;
		}
	}

	async function getOwner() {
		try {
			const provider = await getProviderOrSigner();
			const nft_contract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, provider);
			const owner = await nft_contract.owner() as string;

			const signer = await getProviderOrSigner(true) as JsonRpcSigner;
			const address = await signer.getAddress();
			if (address.toLocaleLowerCase() === owner.toLowerCase()) {
				setIsOwner(true);
			}
		} catch (error) {
			console.error(error)
		}
	}

	async function getTokenIdsMinted() {
		try {
			const provider = await getProviderOrSigner();
			const nft_contract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, provider);
			const tokenIds = await nft_contract.tokenIds();
			setTokenIdsMinted(tokenIds.toString());
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		if (!walletConnected) {
			web3ModalRef.current = new Web3Modal({
				network: "goerli",
				providerOptions: {},
				disableInjectedProvider: false,
			})
			connectWallet();

			// const isPresaleStatused = presaleEnded;

			if (presaleEnded) {
				checkIfPresaleEnded();
			}

			getTokenIdsMinted();

			const presaleEndedInterval = setInterval(async function () {
				const isPresaleStatused = await checkIfPresaleStatused();
				if (isPresaleStatused) {
					const isPresaleEnded = await checkIfPresaleEnded();
					if (isPresaleEnded) {
						clearInterval(presaleEndedInterval);
					}
				}
			}, 5 * 1000);

			setInterval(async function () {
				await getTokenIdsMinted();
			}, 5 * 1000);
		}
	}, [walletConnected]);

	function renderButton() {
		if (!walletConnected) {
			return (
				<button onClick={connectWallet} className={styles.button}>
					Connect your wallet
				</button>
			);
		}
		if (loading) {
			return (
				<button className={styles.button}>
					Loading...
				</button>
			);
		}
		if (isOwner && !presaleStarted) {
			return (
				<button onClick={startPresale} className={styles.button}>
					Start Presale!
				</button>
			)
		}
		if (!presaleStarted) {
			return (
				<div>
					<div className={styles.description}>
						Presale hasnt started!
					</div>
				</div>
			)
		}
		if (presaleEnded && !presaleEnded) {
			return (
				<div>
					<div className={styles.description}>
						Presale has started!!! If your address is whitelisted, Mint a Crypto
						Dev 🥳
					</div>
					<button onClick={presaleMint} className={styles.button}>
						Presale Mint
					</button>
				</div>
			)
		}

		if (presaleEnded && presaleStarted) {
			return (
				<button onClick={publicMint} className={styles.button}>
					Public Mint 🚀
				</button>
			)
		}
	}

	return (
		<div>
			<Head>
				<title>Crypto Dev</title>
				<meta name="description" content="Whitelist-Dapp" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.main}>
				<div>
					<h1 className={styles.title}>Welcome to Crypto Devs!</h1>
					<div className={styles.description}>
						Its an NFT collection for developers in Crypto.
					</div>
					<div className={styles.description}>
						{tokenIdsMinted}/20 have been minted.
					</div>
					{renderButton()}
				</div>
				<div>
					<img src='/cryptodevs/0.svg' />
				</div>
			</div>
			<footer className={styles.footer}>
				Made with &#10084; by Crypto Devs
			</footer>
		</div>
	)
}

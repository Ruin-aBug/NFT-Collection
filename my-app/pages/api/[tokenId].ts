import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const tokenId = req.query.tokenId;
	const image_url = "https://nft-collection-eight-pi.vercel.app/cryptodevs/";
	res.status(200).json({
		name: "Crypto Dev #" + tokenId,
		description: "Crypto Dev is a collection of developers in crypto",
		image: image_url + tokenId + ".svg",
	})
}
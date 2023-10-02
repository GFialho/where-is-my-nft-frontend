# Gabriel Fialho NFT Gallery Challenge (Frontend)

Frontend system of the nft gallery, a website where people can see NFTs from different users and customize their own collection: https://main.d2ifhmggvcy4d7.amplifyapp.com/gallery/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d. The technologies used are:

- Typescript as language
- NextJs 13
- Tailwind for styiling
- Rainbowkit for authentication
- Alchemy for web3 data
- React Query for data fetching
- AWS Amplify for hosting

## Pages

1. Gallery
   Page where people can see the NFT collection of a specific address.

`https://main.d2ifhmggvcy4d7.amplifyapp.com/gallery/{address}`

2. Configuration
   Page to customize how your collection will be shown to users, you need to connect your wallet to be able to customize, you can do it simply by cliking "Connect Wallet" button on top right of the page.
   The configuration will be saved on the backend.

`https://main.d2ifhmggvcy4d7.amplifyapp.com/configuration`

Users can customize:

1. The nickname
2. Description of user's collection
3. Primary color of gallery page
4. Secondary color of gallery page
5. Text color of gallery page

## How to run

You need to first run the backend and then do the steps below:

1. Install all dependencies:
   `npm install`

2. Populate `.env` file with:
   `ALCHEMY_API_KEY` - your Alchemy Api Key

`NEXT_PUBLIC_BASE_API_URL` - The url you are running the backend (`http://localhost:3000/dev`)

3. Run the server:
   `npm run dev`

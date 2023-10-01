export interface INFT {
  contract: {
    address: string;
    name: string;
    symbol: string;
    totalSupply: string;
    tokenType: string;
    openSea: {
      floorPrice: number;
      collectionName: string;
      safelistRequestStatus: string;
      imageUrl: string;
      description: string;
      externalUrl: string;
      twitterUsername: string;
      discordUrl: string;
      lastIngestedAt: string;
    };
    contractDeployer: string;
    deployedBlockNumber: number;
  };
  tokenId: string;
  tokenType: string;
  title: string;
  description: string;
  timeLastUpdated: string;
  rawMetadata: {
    image_url: any;
    name?: string;
    date?: number;
    image?: string;
    dna?: string;
    edition?: number;
    attributes?: {
      value: string;
      trait_type: string;
    }[];
    seller_fee_basis_points?: number;
    symbol?: string;
    external_url?: string;
    animation_url?: string;
    custom_fields?: {
      date?: number;
      edition?: number;
      compiler?: string;
      dna?: string;
    };
    file_url?: string;
    imageHash?: string;
  };
  tokenUri: {
    gateway: string;
    raw: string;
  };
  media: {
    gateway: string;
    thumbnail?: string;
    raw: string;
    format?: string;
    bytes?: number;
  }[];
  balance: number;
}

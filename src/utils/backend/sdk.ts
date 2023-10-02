import axios from "axios";

class Sdk {
  baseUrl: string;
  session: any;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL as string;
  }

  private async call({ ...props }) {
    const response = await axios({
      method: props.method,
      url: `${this.baseUrl}/${props.path}`,
      headers: {
        Authorization: props.signature,
        "Content-Type": "application/json",
      },
      ...props,
    });
    return response;
  }

  public async getAccount(address: string) {
    const response = await this.call({
      method: "get",
      path: `account/${address}`,
    });
    return response.data;
  }

  public async updateAccount(
    address: string,
    data: { nickname: string; description: string },
    signature: string
  ) {
    const response = await this.call({
      method: "patch",
      path: `account/${address}`,
      data,
      signature,
    });
    return response.data;
  }
}

let instance: Sdk | null = null;

export function getSdkInstance(): Sdk {
  if (!instance) {
    instance = new Sdk();
  }
  return instance;
}

export interface UpdateAccountInput {
  address: string;
  data: {
    nickname: string;
    description: string;
    primaryColor: string;
    secondaryColor: string;
  };
  signature: string;
}

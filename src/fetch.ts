import axios from "axios";

type ShoppingResultData = {
  display: 10;
  items: [];
  lastBuildDate: string;
  start: number;
  total: number;
};

export const fetchShoppingSearchResult = async (
  start: number,
  display: number
): Promise<ShoppingResultData> => {
  const query = "모자";

  const response = await axios({
    url: `https://openapi.naver.com/v1/search/shop.json?query=${query}&display=${display}&start=${start}`,
    headers: {
      "X-Naver-Client-id": "a0_ZvjNiPd1DMUjZIjuQ",
      "X-Naver-Client-secret": "6iPBOFGXAG"
    }
  });
  return response.data;
};

type Data = {
  id: number;
  jsonrpc: string;
  method: string;
  params: any[];
};

const call = (data: Data) => {
  return axios({
    url: "https://api.steemit.com",
    method: "POST",
    data: JSON.stringify(data)
  }).then(res => {
    return res.data;
  });
};

export const fetchFeeds = (perPage: number = 10) => {
  const data = {
    id: 1,
    jsonrpc: "2.0",
    method: "call",
    params: [
      "database_api",
      "get_discussions_by_created",
      [{ tag: "kr", limit: perPage }]
    ]
  };
  return call(data).then(res => res.result);
};

export const fetchFollowing = (username: string = "anpigon") => {
  const data = {
    id: 2,
    jsonrpc: "2.0",
    method: "call",
    params: ["follow_api", "get_following", [username, "", "blog", 10]]
  };
  return call(data).then(res => res.result.map(({ following }) => following));
};

export const fetchAccount = (username: string) => {
  const data = {
    id: 3,
    jsonrpc: "2.0",
    method: "call",
    params: ["database_api", "get_accounts", [[username]]]
  };
  return call(data).then(res => res.result[0]);
};

export const fetchFollowCount = (username: string) => {
  const data = {
    id: 4,
    jsonrpc: "2.0",
    method: "call",
    params: ["follow_api", "get_follow_count", [username]]
  };
  return call(data).then(res => res.result);
};

export const fetchState = (username: string) => {
  const data = {
    id: 3,
    jsonrpc: "2.0",
    method: "call",
    params: ["database_api", "get_state", [`/@${username}`]]
  };
  return call(data).then(res => {
    return res.result;
  });
};

export const fetchPixabayImages = async (
  page: number = 1,
  perPage: number = 20
) => {
  const key = "14229089-5525caf25ee9781d35cb2bf8b";
  const response = await axios(
    `https://pixabay.com/api/?key=${key}&page=${page}&per_page=${perPage}&editors_choice=true`
  );
  return response.data.hits;
};

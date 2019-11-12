type Data = {
  id: number;
  jsonrpc: string;
  method: string;
  params: any[];
};

const post = (data: Data) => {
  return fetch("https://api.steemit.com", {
    method: "POST",
    body: JSON.stringify(data)
  }).then(res => res.json());
};

export const fetchFeeds = (perPage: number = 20) => {
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
  return post(data).then(res => res.result);
};

export const fetchFollowing = (username: string = "anpigon") => {
  const data = {
    id: 2,
    jsonrpc: "2.0",
    method: "call",
    params: ["follow_api", "get_following", [username, "", "blog", 10]]
  };
  return post(data).then(res => res.result.map(({ following }) => following));
};

export const fetchAccount = (username: string) => {
  const data = {
    id: 3,
    jsonrpc: "2.0",
    method: "call",
    params: ["database_api", "get_accounts", [[username]]]
  };
  return post(data).then(res => res.result[0]);
};

export const fetchFollowCount = (username: string) => {
  const data = {
    id: 4,
    jsonrpc: "2.0",
    method: "call",
    params: ["follow_api", "get_follow_count", [username]]
  };
  return post(data).then(res => res.result);
};

export const fetchState = username => {
  const data = {
    id: 3,
    jsonrpc: "2.0",
    method: "call",
    params: ["database_api", "get_state", [`/@${username}`]]
  };
  return post(data).then(res => {
    return res.result;
  });
};

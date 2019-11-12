import {
  fetchFollowing,
  fetchAccount,
  fetchFollowCount,
  fetchState
} from "../src/fetch";

describe("fetch tests", () => {
  const username = "anpigon";

  it("fetch followings", async () => {
    const followings = await fetchFollowing();
    expect(followings.length).toBeGreaterThan(0);
  });

  it("fetch fetchAccount", async () => {
    const account = await fetchAccount();
    expect(account).not.toBeNull();
  });

  it("fetch fetchFollowCount", async () => {
    const followCount = await fetchFollowCount(username);
    expect(followCount).not.toBeNull();
  });

  it("fetch state", async () => {
    const state = await fetchState(username);
    expect(state).not.toBeNull();
  });
});

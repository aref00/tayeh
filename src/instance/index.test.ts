const nock = require("nock");
const Tayeh = require("../../dist");

describe("Article resource", () => {
  test("getArticles returns a list of articles", async () => {
    // Set up the mock request
    const scope = nock("https://back.pchas.ir/", {
      reqheaders: {
        Authorization: this.token,
        "Content-type": "application/json",
      },
    })
      .get("/instance/2")
      .reply(200, { id: 2, name: "me", credit: 0 })
      .post("https://back.pchas.ir/api/token")
      .reply(200,{err: null,token: '123'})



    // Make the request
    const Tayeh_Client = new Tayeh({API_KEY: 'abcd', API_SECRET: '1234'});
    const instance = await Tayeh_Client.getInstance(2);

    // expect(instance).toStrictEqual({ id: 2, name: "me", credit: 0 });

    // Assert that the expected request was made.
    scope.done();
  });
});

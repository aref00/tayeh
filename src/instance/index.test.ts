const nock = require("nock");
import Tayeh from '../index';
describe("Instances", () => {
  test("getInstance returns a related instance(shop)", async () => {
    // Set up the mock request    
    // const scope = nock(process.env.BASE_URL, {
    //   reqheaders: {
    //     Authorization: '123',
    //     "Content-type": "application/json",
    //   },
    // })
    //   .post("/api/token")
    //   .reply(200,{err: null,token: '123'})
    //   .get("/instance/2")
    //   .reply(200, { id: 2, name: "me", credit: 0 })



    // Make the request
    const Tayeh_Client = new Tayeh({API_KEY: 'abcd', API_SECRET: '1234'});
    // await Tayeh_Client.get_token()
    // let res = await Tayeh_Client.getInstance(2);

    // expect(instance).toStrictEqual({ id: 2, name: "me", credit: 0 });

    // Assert that the expected request was made.
    // scope.done();
  });
});

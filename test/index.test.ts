import worker from "../src/index";

test("responds with hello world", async () => {
  const req = new Request("http://localhost/");
  const res = await worker.fetch(req);
  expect(await res.text()).toBe("Hello World!");
});

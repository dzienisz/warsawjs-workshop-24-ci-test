import { default as ProductsService } from "./service/ProductsService";
import FIXTURE from "./fixtures/data.json"

const customFetch = Promise.resolve({
  json: () => FIXTURE.products
});

const spy = jest.fn();
spy.mockReturnValueOnce(customFetch)

const service = ProductsService(spy);

test("is exist", () => {
  expect(typeof service).toBe("object");
});

test("fetching", async () => {
  const products = await service.fetchList();
  expect(Array.isArray(products)).toBeTruthy();
  expect(products.length).toBeGreaterThan(0);
});

test("fetching cached data", async () => {
  const products = await service.fetchList();
  expect(products.length).toBeGreaterThan(0);
});

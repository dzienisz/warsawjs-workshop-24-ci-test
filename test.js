import { default as ProductsService } from './service/ProductsService'

const service = ProductsService(require('node-fetch'))

test('is exist', () => {
    expect(typeof service).toBe('object')
});

test('fetching', async () => {
    const products = await service.fetchList()
    expect(Array.isArray(products)).toBeTruthy()
    expect(products.length).toBeGreaterThan(0)
});

test('fetching cached data', async () => {
    const products = await service.fetchList()
    expect(products.length).toBeGreaterThan(0)
});
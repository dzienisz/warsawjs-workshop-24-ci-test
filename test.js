import ProductsService from './service/ProductsService'

test('is exist', () => {
    expect(typeof ProductsService).toBe('object');
});

test('fetching', async () => {
    const products = await ProductsService.fetchList();
    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBeGreaterThan(0);
});
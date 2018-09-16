class ProductsService {

    products = 'http://localhost:3000/products';

    async fetchList() {
        return await fetch(this.products)
            .then(body => body.json());
    }

}

export default new ProductsService();
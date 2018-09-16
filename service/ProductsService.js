class ProductsService {
  constructor(params) {
    this.products = "http://localhost:3000/products"
    this._cacheInterval = 5 * 30 * 6000
    this._cacheValidityDate
  }

  async fetchList() {
    if (Date.now() < this._cacheValidityDate) {
        console.log('chached data')
        return await this._products
    }
    
    return await this._fetcher(this.products).then(body => {
        console.log('new data')
        this._products = body.json()
        this._cacheValidityDate = Date.now() + this._cacheInterval
        return this._products
    });
  }

  setFetcher = fetch => {
    this._fetcher = fetch
    return this;
  };
}

const service = new ProductsService()

export default fetch => service.setFetcher(fetch)

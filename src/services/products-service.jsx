import GenderService from './gender-service';

const ProductsService = () => {
  const _generateSlugsForProducts = products =>
    Promise.all(
      products.map(async product => ({
        ...product,
        slugs: await Promise.all(
          product.genderIds.map(async genderId => {
            const gender = await GenderService.getGenderForId(Number(genderId));
            return [
              product.brand
                .toLowerCase()
                .split(' ')
                .join('-'),
              gender.text.toLowerCase().split(' '),
              product.name
                .toLowerCase()
                .split(' ')
                .join('-'),
            ].join('-');
          })
        ),
      }))
    );

  let _products = [];

  const _getProductsForGender = async genderId => {
    const gender = await GenderService.getGenderForId(Number(genderId));
    _products = await _generateSlugsForProducts(
      require('../mocks/products.json')
    );
    return _products
      .filter(product => product.genderIds.includes(Number(genderId)))
      .map(({ slugs, ...product }) => ({
        ...product,
        slug: slugs.find(slug => slug.split('-').includes(gender.name)),
        genderName: gender.name,
      }));
  };

  const searchFromProducts = (products, key) =>
    products.filter(product =>
      [product.brand, product.name]
        .join(' ')
        .toLowerCase()
        .includes(`${key}`.toLowerCase())
    );
  return {
    getAllProducts: async function(genderId) {
      if (genderId) {
        const productsForGender = await _getProductsForGender(genderId);
        return productsForGender;
      } else {
        const genders = await GenderService.getGenders();
        const productsPerGender = await genders.reduce(
          async (prevPromise, val) => {
            const collection = await prevPromise;
            const productsForGender = await _getProductsForGender(val.id);
            if (productsForGender.length) {
              collection.push({
                genderIdForResolve: val.id,
                products: productsForGender,
              });
            }
            return collection;
          },
          Promise.resolve([])
        );
        const genderProductMap = productsPerGender.reduce((acc, val) => {
          acc[val.genderIdForResolve] = val.products;
          return acc;
        }, {});
        return genderProductMap;
      }
    },
    searchByName: async function(genderId, key) {
      const productsForGender = await this.getAllProducts(genderId);

      if (productsForGender.constructor === Array) {
        return searchFromProducts(productsForGender, key);
      }

      return Object.keys(productsForGender).reduce((acc, val) => {
        const productsForThisGender = productsForGender[val];
        const searchedProducts = searchFromProducts(productsForThisGender, key);
        if (searchedProducts.length) {
          acc[val] = searchedProducts;
        }
        return acc;
      }, {});
    },
    getProductBySlug: async function(genderId, productSlug) {
      const productsForGender = await this.getAllProducts(genderId);
      if (productsForGender.constructor === Array) {
        return productsForGender.find(({ slug }) => slug === productSlug);
      }

      return Object.keys(productsForGender).reduce((acc, val) => {
        const productsForThisGender = productsForGender[val];
        const searchedProducts = productsForThisGender.find(
          ({ slug }) => slug === productSlug
        );
        if (searchedProducts.length) {
          acc[val] = searchedProducts;
        }
        return acc;
      }, {});
    },
  };
};

export default ProductsService();

import ProductsGrid from './ProductsGrid';
import ProduitSectionTitle from './ProduitSectionTitle';
function FeaturedProducts() {
  return (
    <section className='pt-24'>
      <ProduitSectionTitle text='featured products' />
      <ProductsGrid />
    </section>
  );
}
export default FeaturedProducts;

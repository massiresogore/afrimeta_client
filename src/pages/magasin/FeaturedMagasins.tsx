import {MagasinsGrid,SectionTitleMagasin} from ".";

function FeaturedMagasins() {
  return (
    <section className='pt-24'>
      <SectionTitleMagasin text='featured magasins' />
      <MagasinsGrid />
    </section>
  );
}
export default FeaturedMagasins;

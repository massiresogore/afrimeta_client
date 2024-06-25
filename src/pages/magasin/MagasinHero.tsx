import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/HeroCarousel';

function MagasinHero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
           Bataclan 
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Plate forme de Magasins universal, choisissez voitre Magasin préféré où que vous soyez, quand vous voulez ! et faite votre choix.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link to='/products'>Nos Produits</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default MagasinHero;

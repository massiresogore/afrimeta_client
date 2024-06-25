import { Link } from "react-router-dom";
import {MagasinsGrid,SectionTitleMagasin} from ".";
import { useAppSelector } from "@/hooks";
import { Button } from "@/components/ui/button";

function FeaturedMagasins() {
  const user = useAppSelector(state=>  state.userState.user);
  
  return (
    <section className='pt-24'>
      <SectionTitleMagasin text='featured magasins' />
      {user?.role== 'user admin' || user?.role=='admin' &&  <Button asChild size='sm' className='mt-10'>
          <Link to='/admin/magasins'>Add</Link>
        </Button>}
      <MagasinsGrid />
    </section>
  );
}
export default FeaturedMagasins;

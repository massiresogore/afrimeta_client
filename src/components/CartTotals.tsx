import { useAppSelector } from '@/hooks';
import { formatAsDollars } from '@/utils';
import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from './ui/separator';

//Sommaire
function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useAppSelector(
    (state) => state.cartState
  );
  return (
    <Card className='p-8 bg-muted'>
      <CartTotalRow label='Sous Total' amount={cartTotal} />
      <CartTotalRow label='Reduction' amount={shipping} />
      <CartTotalRow label='Taxe en pourcentage' amount={tax.toPrecision(2)} />
{/*       <CartTotalRow label='Taxe en pourcentage' amount={tax.toPrecision(2)} />
 */}      <CardTitle className='mt-8'>
        <CartTotalRow label='Total de la commande' amount={orderTotal.toPrecision(2)} lastRow />
      </CardTitle>
    </Card>
  );
}
export default CartTotals;

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number | string;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className='flex justify-between text-sm'>
        <span>{label}</span>
        {/*<span>{formatAsDollars(amount)}</span>*/ }
        <span>{amount}</span>
      </p>
      {lastRow ? null : <Separator className='my-2' />}
    </>
  );
}

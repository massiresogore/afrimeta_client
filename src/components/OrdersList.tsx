import { useLoaderData } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CommandeInterface } from '@/pages/commande/interface/CommandeInterface';
import { CommandeResultInterface } from '@/pages/commande/interface/CommandeResultInterface';

function OrdersList() {
  const  data  = useLoaderData() as CommandeResultInterface;

  
  
  return (
    <div className='mt-16'>
      <h4 className='mb-4 capitalize'>
        total orders : 
        {/*{meta.pagination.total} */}
      </h4>
      <Table>
        <TableCaption>La list de vos recentes commandes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className='w-[100px]'>Products</TableHead>
            <TableHead className='w-[100px]'>Cost</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
          <TableBody>
          {data.data.produitResponses.map((order,index) => {
            
            return (
              <TableRow key={index}>
                <TableCell>{data.data.name}</TableCell>
                <TableCell>{data.data.address}</TableCell>
                <TableCell className='text-center'>{data.data.numItemsInCart}</TableCell>
                <TableCell>{data.data.orderTotal}</TableCell>
                <TableCell>{new Date(data.data.createdAt).toDateString()}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
export default OrdersList;

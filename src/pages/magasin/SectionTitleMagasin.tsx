import { Separator } from "@/components/ui/separator";

function SectionTitleMagasin({ text }: { text: string }) {
  return (
    <div>
      <h2 className='text-3xl font-medium tracking-wider capitalize mb-8'>
        {text}
      </h2>
      <Separator />
    </div>
  );
}
export default SectionTitleMagasin;

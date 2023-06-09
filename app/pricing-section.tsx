import PricingCard from "@/components/pricing-card";
import { PricingDto } from "./pricing";

interface PropType {
  data: PricingDto[];
}

const Pricing = ({ data }: PropType) => {
  return (
    <div className="inline-grid grid-cols-3 gap-[71px] auto-rows-[1fr]">
      {data.map((pricing) => (
        <div
          className="col-span-3 md:col-span-2 xl:col-span-1"
          key={pricing.name}
        >
          <PricingCard data={pricing} />
        </div>
      ))}
    </div>
  );
};

export default Pricing;

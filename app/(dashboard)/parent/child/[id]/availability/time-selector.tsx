import { TimeGenerator, generateTimeArray } from "@/lib/utils";

type PropType = {
  value: string;
  onSelect: (value: string) => void;
} & TimeGenerator;

const TimeSelector = ({ startTime, endTime, value, onSelect }: PropType) => {
  const timeRange = generateTimeArray({ startTime, endTime });

  return (
    <div className="flex flex-col items-center gap-4">
      {timeRange.map((range) => (
        <div
          key={range}
          className={`${
            value === range && "border border-main bg-bgPink"
          } border rounded-sm h-10 w-[60px] flex justify-center items-center cursor-pointer`}
          onClick={() => onSelect(range)}
        >
          <p className="text-[rgba(1,1,1,0.60)] text-smdium">{range}</p>
        </div>
      ))}
    </div>
  );
};

export default TimeSelector;

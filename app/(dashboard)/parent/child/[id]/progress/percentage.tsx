import { Progress } from "@/components/ui/progress";
import HighlightCard from "./highlight";

const Percentage = () => {
  return (
    <HighlightCard about="Overall progress" score="70%">
      <Progress value={70} className="w-32 h-2" />
    </HighlightCard>
  );
};

export default Percentage;

import { CarIcon, CashIcons } from "@/assets/icons";
import { IconSteeringWheel } from "@tabler/icons-react";

const Icons = {
  car: <CarIcon className="w-6" />,
  million: <CashIcons.Sock className="w-6" />,
  draw: <IconSteeringWheel className="w-6" />,
};

function GetIcon(s: string) {
  if (Object.keys(Icons).includes(s)) return Icons[s as "car" | "million"];
  else return Icons["draw"];
}

export { GetIcon };
export default Icons;

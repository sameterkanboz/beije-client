import { Icons } from "@/components/icons/coreIcons";
import Image from "next/image";

const HeaderItemCard = ({
  title,
  icon,
  isVertical,
}: {
  title: string;
  icon: string;
  isVertical?: boolean;
}) => {
  switch (!isVertical) {
    case true:
      return (
        <div className="flex flex-col w-40 gap-2">
          <Image src={icon} alt="Next.js Logo" width={150} height={400} />
          <div className="flex flex-row justify-between items-center">
            <Icons.moon size={24} />
            <span className="flex-1 text-center">{title}</span>
            <Icons.chevronRight />
          </div>
        </div>
      );

    case false:
      return (
        <div className="flex flex-col w-40 gap-2">
          <Image src={icon} alt="Next.js Logo" width={150} height={100} />
          <div className="flex flex-row justify-between items-center">
            <Icons.moon size={24} />
            <span className="flex-1 text-center">{title}</span>
            <Icons.chevronRight />
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default HeaderItemCard;

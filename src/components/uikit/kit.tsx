import { Card } from "../ui/card";

interface HeadingsProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
}

export const Headings = (props: HeadingsProps) => {
  return (
    <Card
      className={`p-2 gap-1 flex flex-row justify-center items-center ${
        props.isActive ? "bg-white text-black" : ""
      } cursor-pointer`}
    >
      {props.icon}
      <div
        className={`${
          props.isActive ? "text-black font-bold" : "text-gray-400"
        } text-xs w-16 text-center `}
      >
        {props.title}
      </div>
    </Card>
  );
};

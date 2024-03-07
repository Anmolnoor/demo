import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Headings } from "@/components/uikit/kit";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

import { FaAngleRight, FaHandsWash, FaInfo } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { LuChevronRightSquare } from "react-icons/lu";
import { GiRecycle } from "react-icons/gi";
import { MdOutlineFormatListBulleted } from "react-icons/md";

// assets
import logo from "./../assets/images/ppp.webp";
import { useState } from "react";

// types
type CardProps = React.ComponentProps<typeof Card>;

const menus = [
  "Overview",
  "Made with",
  "wash",
  "Recycle",
  "Company",
  "Store",
] as const;

//lists
const headings = [
  { icon: <FaInfo />, title: menus[0], isActive: true },
  { icon: <MdOutlineFormatListBulleted />, title: menus[1] },
  { icon: <FaHandsWash />, title: menus[2] },
  { icon: <GiRecycle />, title: menus[3] },
  { icon: <LuChevronRightSquare />, title: menus[4] },
  { icon: <BsHandbag />, title: menus[5] },
];

const content = {
  title: "Blue stylish Cotton Shirt",
  company: "Blue shirt Co.",
  description: "Our shirts are made to make you happy.",
  data: [
    {
      title: menus[0],
      info: [
        {
          heading: "Suggested to be worn with",
          content: "Jeans, Trousers, Shorts",
        },
        {
          heading: "Sizing",
          content: ["Slim Fit", "Regular Fit", "Loose Fit"],
        },
      ],
    },
    {
      title: menus[1],
      info: [
        {
          heading: "Material",
          content: "Cotton",
        },
        {
          heading: "Color",
          content: "Blue",
        },
        {
          heading: "Pattern",
          content: "Solid",
        },
      ],
    },
    {
      title: menus[2],
      info: [
        {
          heading: "Machine wash",
          content: "Cold water, gentle cycle",
        },
        {
          heading: "Dry",
          content: "Lay flat to dry",
        },
      ],
    },
    {
      title: menus[3],
      info: [
        {
          heading: "Recycle",
          content: "Recycle at the end of life",
        },
      ],
    },
    {
      title: menus[4],
      info: [
        {
          heading: "Name",
          content: "Blue Shirt Co.",
        },
        {
          heading: "Location",
          content: "New York, USA",
        },
      ],
    },
    {
      title: menus[5],
      info: [
        {
          heading: "Store",
          content: "Find a store near you",
        },
      ],
    },
  ],
};

const ClothsPage = ({ className, ...props }: CardProps) => {
  const [active, setActive] = useState(0);
  return (
    // w-[380px]

    <Card className={cn("  max-w-[480px] ", className)} {...props}>
      <CardHeader>
        <div className="mx-auto my-4 rounded-full overflow-hidden w-40 h-40 bg-gray-800">
          <img
            src={logo}
            alt="Image"
            className=" rounded-xl object-scale-down w-full h-full"
          />
        </div>
        <CardTitle>{content.title}</CardTitle>
        <CardDescription>{content.company}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 text-start">
        <div className="flex justify-between overflow-auto scrollbar-hide gap-4">
          {headings.map((item, index) => (
            <div
              onClick={() => {
                setActive(index);
              }}
            >
              <Headings key={index} {...item} isActive={active === index} />
            </div>
          ))}
        </div>
        {
          <Card className="p-5 pt-3 cursor-pointer">
            <div
              className="font-bold "
              onClick={() => alert("Yet! Under development!!")}
            >
              {content.title}
            </div>

            <CardDescription>{content.description}</CardDescription>
          </Card>
        }
        {
          // content
          content.data.map((item, index) => {
            if (active !== index) {
              return;
            }
            return (
              <div
                className="grid gap-2"
                onClick={() => alert("Yet! Under development!!")}
              >
                <Card className="p-5 pt-3 pb-0 cursor-pointer">
                  <div className="flex flex-col gap-4">
                    {item.info.map((subItem, subIndex) => {
                      return (
                        <div
                          className="flex justify-between items-center  last:border-b-0 border-b pb-5 "
                          key={subIndex}
                        >
                          <div className="">
                            <div className="font-bold ">{subItem.heading}</div>
                            <CardDescription>
                              {Array.isArray(subItem.content)
                                ? subItem.content.join(", ")
                                : subItem.content}
                            </CardDescription>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </div>
            );
          })
        }
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Get More Information
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClothsPage;

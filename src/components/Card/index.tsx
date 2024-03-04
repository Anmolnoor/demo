import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// assets
import logo from "./../../assets/images/MTJV3.jpeg";
import { FaBook } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { LuChevronRightSquare } from "react-icons/lu";
import { GiRecycle } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import React from "react";

type CardProps = React.ComponentProps<typeof Card>;

interface HeadingsProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
}

const Headings = (props: HeadingsProps) => {
  return (
    <Card
      className={`w-fit p-2 gap-1 flex flex-row justify-center items-center ${
        props.isActive ? "border-black" : ""
      }`}
    >
      {props.icon}
      <div
        className={`${
          props.isActive ? "text-black font-bold" : "text-gray-700"
        } text-xs`}
      >
        {props.title}
      </div>
    </Card>
  );
};

const SubCard = ({ children }: { children: React.ReactNode }) => {
  return <Card className="flex flex-col gap-2 p-5 pt-3">{children}</Card>;
};

export function CardDemo({ className, ...props }: CardProps) {
  return (
    // w-[380px]
    <Card className={cn("w-[480px]", className)} {...props}>
      <CardHeader>
        <div className="mx-auto my-4 rounded-full overflow-hidden w-40 h-40 bg-gray-800">
          <img src={logo} alt="Image" className=" rounded-xl object-cover  " />
        </div>
        <CardTitle>Airpods Pro 2nd gen</CardTitle>
        <CardDescription>Apple Inc.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 text-start">
        <div className="flex justify-between overflow-auto gap-4">
          <Headings icon={<FaBook />} title="Home" isActive />
          <Headings icon={<MdOutlineFormatListBulleted />} title="Setup" />
          <Headings icon={<IoBookOutline />} title="HandBook" />
          <Headings icon={<GiRecycle />} title="Recycle" />
          <Headings icon={<LuChevronRightSquare />} title="Company" />
          <Headings icon={<BsHandbag />} title="Store" />
        </div>

        <Card className="flex flex-col gap-2 p-5 pt-3">
          <div className="font-bold text-black">
            AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)
          </div>
          <div className="text-sm ">
            Rebuilt from the sound up AirPods Pro (2nd generation) with MagSafe
            Charging Case (USB-C) deliver up to 2x more Active Noise
            Cancellation than the previous generation,¹ with Transparency mode
            that enables you to hear the world around you. All-new Adaptive
            Audio that dynamically tailors noise control to your environment.¹⁶
            Conversation Awareness helps lower media volume and enhance the
            voices in front of you while you’re interacting with others.¹⁶ A
            single charge delivers up to 6 hours of battery life.⁷ And Touch
            control lets you easily adjust volume with a swipe. The MagSafe
            Charging Case¹⁷ is a marvel on its own with Precision Finding,¹⁵
            built-in speaker and lanyard loop.˄
          </div>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-2 p-5 pt-3 text-start">
            <div className="font-bold text-black">Features</div>
            <div className="font-bold text-black">
              Active Noise Cancellation
            </div>
            <div className="text-sm ">
              Active Noise Cancellation for immersive sound. Transparency mode
              for hearing and connecting with the world around you. A more
              customizable fit for all-day comfort. Sweat and water resistant.¹
              All in a super light, in-ear headphone that’s easy to set up with
              all your Apple devices.²
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-2 p-5 pt-3 text-start">
            <div className="font-bold text-black">Technical Specifications</div>
            <div className="font-bold text-black">Size and Weight</div>
            <div className="text-sm ">
              AirPods Pro (each): 1.22 inches (30.9 mm) x 0.86 inch (21.8 mm) x
              0.94 inch (24.0 mm); Wireless Charging Case: 1.78 inches (45.2 mm)
              x 2.39 inches (60.6 mm) x 0.85 inch (21.7 mm)
            </div>
            <div className="font-bold text-black">Weight</div>
            <div className="text-sm ">
              AirPods Pro (each): 0.19 ounce (5.4 grams); Wireless Charging
              Case: 1.61 ounces (45.6 grams)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-2 p-5 pt-3 text-start">
            <div className="font-bold text-black">Compatibility</div>
            <div className="font-bold text-black">iPhone Models</div>
            <div className="text-sm ">
              iPhone 13 Pro, iPhone 13 Pro Max, iPhone 13, iPhone 13 mini,
              iPhone 12 Pro, iPhone 12 Pro Max, iPhone 12, iPhone 12 mini,
              iPhone 11 Pro, iPhone 11 Pro Max, iPhone 11, iPhone SE (2nd
              generation), iPhone XS, iPhone XS Max, iPhone XR, iPhone X, iPhone
              8, iPhone 8 Plus
            </div>
            <div className="font-bold text-black">iPad Models</div>
            <div className="text-sm ">
              iPad Pro 12.9-inch (5th generation), iPad Pro 12.9-inch (4th
              generation), iPad Pro 12.9-inch (3rd generation), iPad Pro 11-inch
              (3rd generation), iPad Pro 11-inch (2nd generation), iPad Pro
              11-inch (1st generation), iPad Pro 10.5-inch, iPad Air (4th
              generation), iPad Air (3rd generation), iPad (9th generation),
              iPad (8th generation), iPad (7th generation), iPad mini (6th
              generation), iPad mini (5th generation)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-2 p-5 pt-3 text-start">
            <div className="font-bold text-black">Compatibility</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full overflow-hidden">
                  <img
                    src={logo}
                    alt="Image"
                    className=" rounded-xl object-cover  "
                  />
                </div>
                <div className="text-xs text-gray-700">Apple</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full overflow-hidden">
                  <img
                    src={logo}
                    alt="Image"
                    className=" rounded-xl object-cover  "
                  />
                </div>
                <div className="text-xs text-gray-700">Samsung</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full overflow-hidden">
                  <img
                    src={logo}
                    alt="Image"
                    className=" rounded-xl object-cover  "
                  />
                </div>
                <div className="text-xs text-gray-700">Sony</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Get More Information
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardDemo;

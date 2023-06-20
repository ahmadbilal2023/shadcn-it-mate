import Image from "next/image";
import { AccordionDemo } from "./accordion";
import { AlertDialogDemo } from "./alertbox";
import { CardDemo } from "./card";
import CalenderData from "./calenderData";

export default function Home() {
  return (
    <div>
      <h1 className="text-center capitalize font-bold text-3xl pt-5">
        shadcan ui
      </h1>

      <CalenderData />

      {/* <AccordionDemo/> */}
      {/* <AlertDialogDemo/> */}
      {/* <CardDemo/> */}
    </div>
  );
}

import Image from "next/image";
import { AccordionDemo } from "./accordion";
import { AlertDialogDemo } from "./alertbox";
import { CardDemo } from "./card";
import CalenderData from "./calenderData";
import { ComboboxDemo } from "./combobox";
import { SheetDemo } from "./sheet";

export default function Home() {
  return (
    <div>
      <h1 className="text-center capitalize font-bold text-3xl pt-5">
        shadcan ui
      </h1>
      
      <div className="flex justify-center mt-6">
        {/* <ComboboxDemo/> */}
      {/* <CalenderData /> */}
      {/* <AccordionDemo/> */}
      {/* <AlertDialogDemo/> */}
      {/* <CardDemo/> */}
      <SheetDemo/>
      </div>
    </div>
  );
}

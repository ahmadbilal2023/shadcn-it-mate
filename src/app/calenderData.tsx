import React from "react";
import { CalendarDemo } from "./calenderDemo";
import { TypographyH1 } from "./heading";
import { ButtonSecondary } from "./button";
const CalenderData = () => {
  return (
    <div>
      {/* mian div */}
      <div className="grid grid-cols-2 gap-4 p-5 m-7">
        {/* heading div */}
        <div className="flex flex-col gap-8 justify-center items-center p-5">
          <TypographyH1 />
          <div className="space-x-10">
            <ButtonSecondary text={"Search"} />
            <ButtonSecondary text={"Profile"} />
          </div>
        </div>

        {/* calender div */}
        <div className="flex justify-center items-center p-5">
          <CalendarDemo />
        </div>
      </div>
    </div>
  );
};

export default CalenderData;

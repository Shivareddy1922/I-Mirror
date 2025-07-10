import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  return (
    <Card className="relative w-[121px] h-[49px] bg-[url(https://c.animaapp.com/mcx5y2jaSdkf8x/img/key-background.svg)] bg-[100%_100%] border-0">
      <CardContent className="p-0">
        <div className="relative h-10 mt-[3px]">
          <div className="font-['Inter',Helvetica] absolute w-full top-7 font-bold text-inkdarkest text-[10px] text-center tracking-[2.00px]">
            PQRS
          </div>
          <div className="font-['Inter',Helvetica] absolute w-full top-0 font-normal text-inkdarkest text-[25px] text-center tracking-[0.29px]">
            7
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

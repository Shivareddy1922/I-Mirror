import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const NumericKeypadSection = (): JSX.Element => {
  return (
    <Card className="relative w-[121px] h-[49px] bg-[url(https://c.animaapp.com/mcx5y2jaSdkf8x/img/key-background.svg)] bg-[100%_100%] border-none">
      <CardContent className="p-0">
        <div className="relative h-10 mt-[3px] flex flex-col items-center justify-center">
          <span className="font-normal text-[25px] text-inkdarkest tracking-[0.29px] font-['Inter',Helvetica]">
            9
          </span>
          <span className="font-bold text-[10px] text-inkdarkest tracking-[2.00px] font-['Inter',Helvetica] mt-1">
            WXYZ
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

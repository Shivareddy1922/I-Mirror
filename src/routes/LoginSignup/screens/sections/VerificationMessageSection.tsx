import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const VerificationMessageSection = (): JSX.Element => {
  return (
    <Card className="relative w-[121px] h-12 bg-[url(https://c.animaapp.com/mcx5y2jaSdkf8x/img/key-background.svg)] bg-[100%_100%] border-none">
      <CardContent className="relative h-10 mt-0.5 p-0">
        <div className="font-['SF_Pro_Text-Bold',Helvetica] w-full absolute top-7 font-bold text-inkdarkest text-[10px] text-center tracking-[2.00px]">
          {""}
        </div>
        <div className="font-['Inter',Helvetica] w-full absolute top-0 font-normal text-inkdarkest text-[25px] text-center tracking-[0.29px]">
          1
        </div>
      </CardContent>
    </Card>
  );
};

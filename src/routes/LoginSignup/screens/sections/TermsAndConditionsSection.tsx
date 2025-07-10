import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const TermsAndConditionsSection = (): JSX.Element => {
  return (
    <Card className="relative w-[121px] h-12 bg-[url(https://c.animaapp.com/mcx5y2jaSdkf8x/img/key-background.svg)] bg-[100%_100%] border-none">
      <CardContent className="relative h-10 mt-0.5 p-0">
        <div className="font-inter absolute w-full top-7 font-bold text-inkdarkest text-[10px] text-center tracking-[2.00px]">
          DEF
        </div>
        <div className="font-inter absolute w-full top-0 font-normal text-inkdarkest text-[25px] text-center tracking-[0.29px]">
          3
        </div>
      </CardContent>
    </Card>
  );
};

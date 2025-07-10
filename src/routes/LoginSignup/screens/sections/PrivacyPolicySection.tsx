import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const PrivacyPolicySection = (): JSX.Element => {
  return (
    <Card className="relative w-[121px] h-12 bg-[url(https://c.animaapp.com/mcx5y2jaSdkf8x/img/key-background.svg)] bg-[100%_100%] border-none">
      <CardContent className="p-0">
        <div className="relative h-10 mt-0.5 flex flex-col items-center justify-center">
          <div className="font-['Inter',Helvetica] text-[25px] text-inkdarkest tracking-[0.29px] leading-normal">
            2
          </div>
          <div className="font-['Inter',Helvetica] font-bold text-[10px] text-inkdarkest tracking-[2.00px] leading-normal mt-1">
            ABC
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

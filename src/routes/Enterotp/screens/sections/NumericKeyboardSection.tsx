import React from "react";
import { Button } from "../../components/ui/button";

interface NumericKeyboardSectionProps {
  otp?: string;
  setOtp?: (otp: string) => void;
  maxLength?: number;
}

export const NumericKeyboardSection = ({ 
  otp = "", 
  setOtp = () => {}, 
  maxLength = 6 
}: NumericKeyboardSectionProps): JSX.Element => {
  // Define keyboard keys data for mapping
  const numericKeys = [
    { number: "1", letters: "" },
    { number: "2", letters: "ABC" },
    { number: "3", letters: "DEF" },
    { number: "4", letters: "GHI" },
    { number: "5", letters: "JKL" },
    { number: "6", letters: "MNO" },
    { number: "7", letters: "PQRS" },
    { number: "8", letters: "TUV" },
    { number: "9", letters: "WXYZ" },
  ];

  const handleNumberClick = (number: string) => {
    if (otp.length < maxLength) {
      setOtp(otp + number);
    }
  };

  const handleDeleteClick = () => {
    if (otp.length > 0) {
      setOtp(otp.slice(0, -1));
    }
  };

  return (
    <div className="w-full bg-skylight backdrop-blur-[40.77px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40.77px)_brightness(100%)]">
      <div className="w-full h-[5px] flex justify-center items-center py-4">
        <div className="w-[134px] h-[5px] bg-inkdarkest rounded-[100px]" />
      </div>

      <div className="w-full px-2 pb-4">
        {/* Grid for numbers 1-9 */}
        <div className="grid grid-cols-3 gap-1 mb-2">
          {numericKeys.map((key, index) => (
            <Button
              key={`key-${index}`}
              variant="ghost"
              className="h-[46px] m-0 p-0 bg-[url(https://c.animaapp.com/mcx6ujms0yBayU/img/key-background.svg)] bg-[100%_100%] rounded-none"
              onClick={() => handleNumberClick(key.number)}
              disabled={otp.length >= maxLength}
            >
              <div className="flex flex-col items-center justify-center h-10 w-full">
                <div className="font-['Inter',Helvetica] w-full font-normal text-inkdarkest text-[25px] text-center tracking-[0.29px]">
                  {key.number}
                </div>
                {key.letters && (
                  <div className="font-['Inter',Helvetica] w-full font-bold text-inkdarkest text-[10px] text-center tracking-[2.00px]">
                    {key.letters}
                  </div>
                )}
              </div>
            </Button>
          ))}
        </div>

        {/* Bottom row with 0 and delete */}
        <div className="flex justify-between">
          <div className="w-[121px]"></div>
          <Button
            variant="ghost"
            className="h-[46px] w-[121px] m-0 p-0 bg-[url(https://c.animaapp.com/mcx6ujms0yBayU/img/key-background.svg)] bg-[100%_100%] rounded-none"
            onClick={() => handleNumberClick("0")}
            disabled={otp.length >= maxLength}
          >
            <div className="font-['SF_Pro_Display-Regular',Helvetica] w-full font-normal text-inkdarkest text-[25px] text-center tracking-[0.29px]">
              0
            </div>
          </Button>
          <Button 
            variant="ghost" 
            className="h-[46px] w-[121px] p-0 rounded-none flex items-center justify-center"
            onClick={handleDeleteClick}
            disabled={otp.length === 0}
          >
            <img
              className="w-6 h-[18px]"
              alt="Delete"
              src="https://c.animaapp.com/mcx6ujms0yBayU/img/delete.svg"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

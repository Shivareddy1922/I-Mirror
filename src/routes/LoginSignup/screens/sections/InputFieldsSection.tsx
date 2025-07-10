import { ChevronDownIcon } from "lucide-react";
import React from "react";

interface InputFieldsSectionProps {
  phoneNumber?: string;
}

export const InputFieldsSection = ({ phoneNumber = "" }: InputFieldsSectionProps): JSX.Element => {
  return (
    <div className="w-full max-w-[327px] mx-auto mt-4 px-4 sm:px-0">
      <div className="relative w-full h-[50px] bg-skywhite rounded-lg border border-solid border-[#e3e4e5]">
        <div className="flex items-center h-full px-4">
          <div className="flex items-center gap-1 mr-4">
            <span className="font-normal text-inkdarkest text-base leading-4">
              +91
            </span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>

          <div className="flex-1 h-full flex items-center">
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              readOnly
              value={phoneNumber}
              placeholder="Mobile number"
              className="w-full h-full bg-transparent border-none outline-none text-inkdarkest font-regular-none-regular text-base placeholder:text-inklighter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

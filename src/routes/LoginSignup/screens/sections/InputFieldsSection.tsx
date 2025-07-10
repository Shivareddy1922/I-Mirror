import { ChevronDownIcon } from "lucide-react";
import React from "react";

interface InputFieldsSectionProps {
  phoneNumber?: string;
  countryCode?: string;
  setCountryCode?: (code: string) => void;
}

export const InputFieldsSection = ({ 
  phoneNumber = "", 
  countryCode = "+91",
  setCountryCode = () => {}
}: InputFieldsSectionProps): JSX.Element => {
  
  const countryCodes = [
    { code: "+91", country: "IN" },
    { code: "+1", country: "US" },
    { code: "+44", country: "UK" },
    { code: "+86", country: "CN" },
    { code: "+81", country: "JP" },
  ];

  return (
    <div className="w-full max-w-[327px] mx-auto mt-4 px-4 sm:px-0">
      <div className="relative w-full h-[50px] bg-skywhite rounded-lg border border-solid border-[#e3e4e5]">
        <div className="flex items-center h-full px-4">
          <div className="flex items-center gap-1 mr-4 relative">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="appearance-none bg-transparent border-none outline-none font-normal text-inkdarkest text-base leading-4 pr-5 cursor-pointer"
            >
              {countryCodes.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.code}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="w-4 h-4 absolute right-0 pointer-events-none" />
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

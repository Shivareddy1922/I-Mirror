import { PaperclipIcon } from "lucide-react";
import React from "react";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full items-start gap-2 px-4 sm:px-6 py-3">
      <div className="flex justify-between w-full items-center">
        <h1 className="font-title-2 text-[28px] sm:text-[32px] font-bold text-inkdarkest leading-8 sm:leading-9">
          Welcome
        </h1>
        <PaperclipIcon className="text-gray-300 h-6 w-6 hidden sm:block" />
      </div>

      <p className="font-regular-normal-regular text-[14px] sm:text-[16px] text-inkdarkest leading-5 sm:leading-6">
        Log in to your account
      </p>
    </header>
  );
};

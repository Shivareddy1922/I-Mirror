import React from "react";

export const ContinueSection = (): JSX.Element => {
  return (
    <div className="w-full text-xs text-inkdarkest font-normal font-['Inter',Helvetica] tracking-[0] leading-4 mt-4">
      <p className="text-center">
        <span className="text-[#090a0a]">By continuing, you agree to </span>
        <span className="text-[#090a0a]">our </span>
        <a href="#" className="text-[#6a4dff] hover:underline">
          Terms of Service
        </a>
        <span className="text-[#090a0a]"> and </span>
        <a href="#" className="text-[#6a4dff] hover:underline">
          Privacy Policy
        </a>
        <span className="text-[#090a0a]">.</span>
      </p>
    </div>
  );
};

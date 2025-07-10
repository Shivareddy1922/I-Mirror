import React from "react";
import { Card } from "../../components/ui/card";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)] w-[390px] h-[844px] relative">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl font-bold mb-4">Welcome to I Mirror</h1>
          <p className="text-center px-8">Your journey to self-improvement starts here.</p>
        </div>
      </div>
    </div>
  );
};

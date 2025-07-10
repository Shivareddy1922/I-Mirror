import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/card";

export const SplashScreen = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate after 3 seconds
    const timer = setTimeout(() => {
      navigate("/intro");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen" data-model-id="682:535">
      <Card
        className="bg-white bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)] w-full max-w-[390px] min-h-screen sm:h-[844px] relative border-none rounded-none"
      >
        <div className="flex flex-col items-center justify-center h-full animate-fadeIn">
          {/* Logo */}
          <div className="relative w-[95px] h-[101px] mb-8">
            <div className="absolute top-1.5 left-0 bg-[#9783d305] border-[#74a4ee] w-[50px] h-20 rounded-[10px] border-[5px] border-solid" />
            <div className="absolute top-[21px] left-[25px] border-[#9783d3] w-[50px] h-20 rounded-[10px] border-[5px] border-solid" />
            <img
              className="absolute w-[26px] h-[26px] top-0 left-[69px]"
              alt="Star"
              src="https://c.animaapp.com/mcx4tn3jwyabUV/img/star-5.svg"
            />
          </div>

          {/* App Name and Tagline */}
          <div className="flex flex-col items-center">
            <h1 className="font-inter-regular font-[number:var(--inter-regular-font-weight)] text-new-fill-000000 text-[60px] sm:text-[92px] tracking-[var(--inter-regular-letter-spacing)] leading-[var(--inter-regular-line-height)] whitespace-nowrap [font-style:var(--inter-regular-font-style)]">
              I Mirror
            </h1>
            <p className="font-medium italic text-black text-sm sm:text-base mt-1 text-center px-4">
              Know yourself from who knows you best!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

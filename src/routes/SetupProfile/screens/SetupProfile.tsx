import { ArrowLeftIcon, CameraIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

export const SetupProfile = (): JSX.Element => {
  const navigate = useNavigate();
  
  // Form field data for mapping
  const formFields = [
    { id: "name", label: "Name" },
    { id: "age", label: "Age" },
    { id: "gender", label: "Gender" },
    { id: "bio", label: "Bio" },
  ];

  const handleBackClick = () => {
    navigate('/enterotp');
  };

  const handleContinue = () => {
    navigate('/home');
  };

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)] w-full max-w-[390px] min-h-screen sm:h-[844px] relative">
        {/* Status bar */}
        <div className="absolute w-full h-11 top-0 left-0 bg-skywhite hidden sm:block">
          <div className="left-[30px] text-inkdarkest absolute h-4 top-[15px] font-regular-none-medium font-[number:var(--regular-none-medium-font-weight)] text-[length:var(--regular-none-medium-font-size)] tracking-[var(--regular-none-medium-letter-spacing)] leading-[var(--regular-none-medium-line-height)] whitespace-nowrap [font-style:var(--regular-none-medium-font-style)]">
            9:41
          </div>
          <div className="absolute w-[18px] h-2.5 top-5 left-[303px] bg-[url(https://c.animaapp.com/mcx8of52P3cLSw/img/mobile-signal.svg)] bg-[100%_100%]" />
          <div className="absolute w-[15px] h-[11px] top-[19px] left-[326px] bg-[url(https://c.animaapp.com/mcx8of52P3cLSw/img/union.svg)] bg-[100%_100%]" />
          <div className="absolute w-[27px] h-[13px] top-[18px] left-[347px] bg-[url(https://c.animaapp.com/mcx8of52P3cLSw/img/battery.png)] bg-[100%_100%]" />
        </div>

        {/* Header with back button */}
        <div className="absolute w-full max-w-[343px] h-8 top-[20px] sm:top-[69px] left-4 right-4 flex items-center">
          <button 
            className="absolute left-0 top-2.5 cursor-pointer"
            onClick={handleBackClick}
          >
            <ArrowLeftIcon className="w-[31px] h-[15px]" />
          </button>
          <h1 className="absolute w-full max-w-[327px] top-0 left-4 right-4 font-title-3 font-[number:var(--title-3-font-weight)] text-inkdarkest text-[length:var(--title-3-font-size)] text-center tracking-[var(--title-3-letter-spacing)] leading-[var(--title-3-line-height)] [font-style:var(--title-3-font-style)]">
            Set up Profile
          </h1>
        </div>

        {/* Main card */}
        <Card className="absolute w-full max-w-[359px] h-auto min-h-[647px] top-[80px] sm:top-[129px] left-4 right-4 sm:left-[15px] sm:right-auto rounded-[40px] border border-solid border-[#e9eefd] shadow-[0px_0px_35.3px_#00000017]">
          <CardContent className="p-0 h-full relative">
            {/* Profile photo placeholder */}
            <div className="absolute w-[162px] h-[162px] top-[38px] left-1/2 -translate-x-1/2 bg-[#ecedff] rounded-[81px] flex items-center justify-center cursor-pointer">
              <CameraIcon className="w-20 h-20 text-[#74a4ee]" />
            </div>

            {/* Form fields */}
            {formFields.map((field, index) => (
              <div
                key={field.id}
                className={`absolute w-full max-w-[309px] h-[60px] left-1/2 -translate-x-1/2 ${
                  index === 0
                    ? "top-[230px]"
                    : index === 1
                      ? "top-[300px]"
                      : index === 2
                        ? "top-[376px]"
                        : "top-[445px]"
                }`}
              >
                <Input
                  placeholder={field.label}
                  className="h-[60px] w-full bg-[#f5f7fc] rounded-[15px] border-2 border-solid border-[#e9eefd] px-4 font-regular-normal-regular font-[number:var(--regular-normal-regular-font-weight)] text-inkdarkest text-[length:var(--regular-normal-regular-font-size)] tracking-[var(--regular-normal-regular-letter-spacing)] leading-[var(--regular-normal-regular-line-height)] [font-style:var(--regular-normal-regular-font-style)]"
                />
              </div>
            ))}

            {/* Skip option */}
            <button 
              className="absolute w-14 h-[53px] top-[514px] left-1/2 -translate-x-1/2 font-regular-normal-regular font-[number:var(--regular-normal-regular-font-weight)] text-new-fill-4d1bf1 text-[length:var(--regular-normal-regular-font-size)] text-center tracking-[var(--regular-normal-regular-letter-spacing)] leading-[var(--regular-normal-regular-line-height)] [font-style:var(--regular-normal-regular-font-style)] cursor-pointer"
              onClick={handleSkip}
            >
              Skip
            </button>

            {/* Continue button */}
            <Button 
              className="absolute w-full max-w-[327px] h-12 top-[579px] left-1/2 -translate-x-1/2 bg-[#74a4ee] rounded-[48px] hover:bg-[#5a8fe0] cursor-pointer"
              onClick={handleContinue}
            >
              <span className="text-white text-center font-regular-none-medium font-[number:var(--regular-none-medium-font-weight)] text-[length:var(--regular-none-medium-font-size)] tracking-[var(--regular-none-medium-letter-spacing)] leading-[var(--regular-none-medium-line-height)] whitespace-nowrap [font-style:var(--regular-none-medium-font-style)]">
                Continue
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

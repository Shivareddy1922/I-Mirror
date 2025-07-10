import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const GetstartedScreen = (): JSX.Element => {
  // Data for pagination dots
  const paginationDots = [
    { active: false },
    { active: false },
    { active: true },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="681:908"
    >
      <div className="border border-solid border-[#6ca1ef] w-[390px] h-[844px] relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)]">
          <div className="relative h-[666px] top-[155px]">
            {/* Main content card */}
            <Card className="absolute w-[390px] h-[666px] top-0 left-0 border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                {/* App logo/icon */}
                <img
                  className="w-[89px] h-[89px] mx-auto mt-[13px] object-cover"
                  alt="App logo"
                  src="https://c.animaapp.com/mcx4tn3jwyabUV/img/image-19.png"
                />

                {/* Heading */}
                <h1 className="mt-[101px] mx-[71px] font-heading font-[number:var(--heading-font-weight)] text-black text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] whitespace-nowrap [font-style:var(--heading-font-style)]">
                  Grow Yourself Better
                </h1>

                {/* Description text */}
                <p className="w-[238px] mt-[50px] mx-auto font-body-base font-[number:var(--body-base-font-weight)] text-black text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)] text-center">
                  Transform feedback into actionable
                  <br />
                  growth plans. Track your progress and become the best version
                  of yourself with personalized insights.
                </p>
              </CardContent>
            </Card>

            {/* Get Started button */}
            <Button className="flex w-[272px] h-[49px] items-center justify-center gap-2 p-3 absolute top-[550px] left-[71px] bg-new-fill-74a4ee rounded-[25px] text-neutral-100 font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)] shadow-[0px_7px_16px_#0000001a,0px_30px_30px_#00000017,0px_67px_40px_#0000000d,0px_120px_48px_#00000003,0px_187px_52px_transparent] border border-solid border-[#74a4ee]">
              Get Started
            </Button>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="absolute w-[327px] h-11 top-[572px] left-8 flex justify-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-2 relative top-2.5 rounded-[50px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
            <div className="absolute w-16 h-6 top-0 left-0 bg-new-fill-bfbfbf rounded-[100px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] shadow-material-blur" />

            {paginationDots.map((dot, index) => (
              <div
                key={`dot-${index}`}
                className={`relative w-2 h-2 bg-black rounded-[50px] ${dot.active ? "" : "opacity-30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

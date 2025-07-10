import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const DivWrapper = (): JSX.Element => {
  // Pagination dots data
  const paginationDots = [
    { active: false, id: 1 },
    { active: true, id: 2 },
    { active: false, id: 3 },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="681:897"
    >
      <Link
        className="bg-new-fill-ffffff w-[390px] h-[844px] block relative"
        to="/getstarted3"
      >
        <div className="relative h-full w-full">
          {/* Background with gradient */}
          <div className="absolute w-full h-full top-0 left-0 border border-solid border-[#8eafec] bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)]">
            {/* Get Started Button */}
            <Button className="flex w-[272px] h-[49px] items-center justify-center gap-2 p-3 absolute top-[704px] left-[59px] bg-new-fill-74a4ee rounded-[25px] text-neutral-100 font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] shadow-[0px_7px_16px_#0000001a,0px_30px_30px_#00000017,0px_67px_40px_#0000000d,0px_120px_48px_#00000003,0px_187px_52px_transparent]">
              Get Started
            </Button>

            {/* Main Card */}
            <Card className="absolute w-[327px] h-[404px] top-[161px] left-8 bg-new-fill-ffffff rounded-[43px] shadow-drop-shadow-radius-24 border-none">
              <CardContent className="p-0 h-full">
                <div className="absolute w-[246px] h-[124px] top-0 left-[45px]">
                  <img
                    className="absolute w-24 h-24 top-0 left-[66px] object-cover"
                    alt="Therapists and coaches icon"
                    src="https://c.animaapp.com/mcx4tn3jwyabUV/img/image-17.png"
                  />

                  <h2 className="absolute top-[95px] left-0 font-heading font-[number:var(--heading-font-weight)] text-black text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] whitespace-nowrap [font-style:var(--heading-font-style)]">
                    Therapists &amp; Coaches
                  </h2>
                </div>

                <p className="absolute w-[258px] top-[177px] left-[45px] font-body-base font-[number:var(--body-base-font-weight)] text-black text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                  Connect with professional
                  <br />
                  therapists and certified coaches
                  <br />
                  who can guide your personal
                  <br />
                  development journey with expert insights.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Pagination Dots */}
          <div className="absolute w-[365px] h-11 top-[568px] left-2.5 flex justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-2 relative top-2.5 rounded-[50px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
              <div className="absolute w-16 h-6 top-0 left-0 rounded-[100px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] shadow-material-blur" />

              {paginationDots.map((dot) => (
                <div
                  key={`dot-${dot.id}`}
                  className={`relative w-2 h-2 bg-black rounded-[50px] ${!dot.active ? "opacity-30" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

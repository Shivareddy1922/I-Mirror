import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Getstarted = (): JSX.Element => {
  // Pagination dots data
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="681:880"
    >
      <Link
        className="bg-white bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)] w-[390px] h-[844px] relative block"
        to="/getstarted2"
      >
        <Button
          className="flex w-[272px] h-[49px] items-center justify-center gap-2 p-3 absolute top-[692px] left-[59px] bg-new-fill-74a4ee rounded-[25px] overflow-hidden border border-solid border-[#7fabef] shadow-[0px_7px_16px_#0000001a,0px_30px_30px_#00000017,0px_67px_40px_#0000000d,0px_120px_48px_#00000003,0px_187px_52px_transparent] hover:bg-new-fill-74a4ee"
          variant="default"
        >
          <span className="font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-neutral-100 text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
            Get Started
          </span>
        </Button>

        <Card className="absolute w-[327px] h-[404px] top-[168px] left-8 bg-new-fill-ffffff rounded-[43px] shadow-drop-shadow-radius-24 border-none">
          <CardContent className="p-0 h-full relative">
            <img
              className="absolute w-[65px] h-[65px] top-2.5 left-[135px] object-cover"
              alt="Feedback icon"
              src="https://c.animaapp.com/mcx4tn3jwyabUV/img/image-15.png"
            />

            <h2 className="absolute w-[260px] top-[90px] left-[33px] font-heading font-[number:var(--heading-font-weight)] text-new-fill-000000 text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] whitespace-nowrap [font-style:var(--heading-font-style)] shadow-background-blur-radius-4">
              Anonymous Feedback
            </h2>

            <p className="absolute w-[250px] top-[162px] left-[43px] font-body-base font-[number:var(--body-base-font-weight)] text-black text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
              Receive honest and anonymous
              <br />
              feedback from people who know
              <br />
              you best!
            </p>
          </CardContent>
        </Card>

        <div className="absolute w-[327px] h-11 top-[572px] left-8 flex justify-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-2 relative top-2.5 rounded-[50px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-background-blur-radius-40">
            <div className="absolute w-16 h-6 top-0 left-0 bg-new-fill-bfbfbf rounded-[100px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] shadow-material-blur" />

            {paginationDots.map((dot, index) => (
              <div
                key={`dot-${index}`}
                className={`relative w-2 h-2 bg-black rounded-[50px] ${!dot.active ? "opacity-30" : ""}`}
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

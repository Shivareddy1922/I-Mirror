import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOtp } from "../../../hooks/useOtp";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ContinueSection } from "./sections/ContinueSection";
import { HeaderSection } from "./sections/HeaderSection";
import { InputFieldsSection } from "./sections/InputFieldsSection";
import { MessageSection } from "./sections/MessageSection";

export const LoginSignup = (): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+91");
  const navigate = useNavigate();
  const { isLoading, error, success, sendOtp, clearMessages } = useOtp();
  
  const isPhoneNumberValid = phoneNumber.length === 10;
  const fullPhoneNumber = `${countryCode}${phoneNumber}`;

  const handleContinue = () => {
    if (isPhoneNumberValid && !isLoading) {
      handleSendOtp();
    }
  };

  const handleSendOtp = async () => {
    const success = await sendOtp(fullPhoneNumber);
    if (success) {
      // Navigate to OTP screen with phone number
      navigate('/enterotp', { state: { phoneNumber: fullPhoneNumber } });
    }
  };
  const handleKeypadInput = (digit: string) => {
    clearMessages();
    if (phoneNumber.length < 10) {
      setPhoneNumber(prev => prev + digit);
    }
  };

  const handleKeypadDelete = () => {
    clearMessages();
    if (phoneNumber.length > 0) {
      setPhoneNumber(prev => prev.slice(0, -1));
    }
  };

  return (
    <div className="flex flex-row justify-center items-center w-full min-h-screen bg-white">
      <div className="w-full max-w-[390px] min-h-screen sm:h-[844px] overflow-hidden sm:border-2 border-solid border-[#74a4ee] bg-white relative">
        {/* Main background with gradient */}
        <div className="w-full h-full bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)] flex flex-col">
          {/* Status bar */}
          <div className="w-full h-[47px] bg-white flex-shrink-0 hidden sm:block">
            <img
              className="absolute w-[164px] h-[29px] top-px left-[113px]"
              alt="Notch"
              src="https://c.animaapp.com/mcx5y2jaSdkf8x/img/notch.png"
            />

            <div className="absolute w-[54px] h-[21px] top-3.5 left-[27px]">
              <div className="relative h-[21px] rounded-3xl">
                <div className="absolute w-[54px] top-px left-0 font-default-bold-body text-[#010101] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap">
                  9:41
                </div>
              </div>
            </div>

            <div className="absolute w-[77px] h-6 top-2 left-[286px]">
              <img
                className="absolute w-[27px] h-[13px] top-[11px] left-[50px]"
                alt="Battery"
                src="https://c.animaapp.com/mcx5y2jaSdkf8x/img/battery.png"
              />

              <img
                className="absolute w-[17px] h-3 top-3 left-[26px]"
                alt="Wifi"
                src="https://c.animaapp.com/mcx5y2jaSdkf8x/img/wifi.svg"
              />

              <img
                className="absolute w-[18px] h-3 top-3 left-0"
                alt="Icon mobile signal"
                src="https://c.animaapp.com/mcx5y2jaSdkf8x/img/icon---mobile-signal.svg"
              />

              <div className="absolute w-1.5 h-1.5 top-0 left-1.5 bg-defaultsystemgreenlight rounded-[3px]" />
            </div>
          </div>

          {/* Main content - aligned to top */}
          <div className="flex-grow flex flex-col justify-start items-center pt-4 sm:pt-4 px-4 sm:px-0">
            {/* Main content card */}
            <Card className="w-full max-w-[388px] mx-auto bg-white shadow-[0px_18px_40px_#0000001a,0px_72px_72px_#00000017,0px_163px_98px_#0000000d,0px_289px_116px_#00000003,0px_452px_127px_transparent] rounded-[43px] border-none">
              <CardContent className="p-0 relative">
                {/* Header with logo */}
                <div className="w-full h-[93px] relative">
                  <HeaderSection />
                  <div className="absolute w-[65px] h-[69px] top-0 right-[14px] bg-white opacity-[0.57] hidden sm:block">
                    <div className="relative w-[63px] h-[67px] top-0.5">
                      <div className="top-1 left-0 bg-[#9783d305] border-[#74a4ee] absolute w-[34px] h-[54px] rounded-[10px] border-[5px] border-solid" />
                      <div className="top-3.5 left-[17px] border-[#9783d3] absolute w-[34px] h-[54px] rounded-[10px] border-[5px] border-solid" />
                      <img
                        className="absolute w-4 h-4 top-0 left-[47px]"
                        alt="Star"
                        src="https://c.animaapp.com/mcx5y2jaSdkf8x/img/star-5.svg"
                      />
                    </div>
                  </div>
                </div>

                {/* Input fields */}
                <InputFieldsSection 
                  phoneNumber={phoneNumber} 
                  countryCode={countryCode}
                  setCountryCode={setCountryCode}
                />

                {/* Message Section for success/error */}
                <MessageSection error={error} success={success} />

                {/* SMS verification message */}
                <div className="w-full max-w-[327px] mx-auto mt-4 px-4 sm:px-0 font-tiny-normal-regular text-inklight text-[length:var(--tiny-normal-regular-font-size)] tracking-[var(--tiny-normal-regular-letter-spacing)] leading-[var(--tiny-normal-regular-line-height)]">
                  You will receive an SMS verification that may apply message
                  and data rates.
                </div>

                {/* Continue button */}
                <div className="w-full max-w-[327px] h-12 mx-auto mt-8 mb-6 px-4 sm:px-0">
                  <Button 
                    className={`w-full h-full bg-[#74a4ee] rounded-[48px] text-skywhite font-regular-none-medium text-[length:var(--regular-none-medium-font-size)] tracking-[var(--regular-none-medium-letter-spacing)] leading-[var(--regular-none-medium-line-height)] ${!isPhoneNumberValid || isLoading ? 'opacity-50' : ''}`}
                    onClick={handleContinue}
                    disabled={!isPhoneNumberValid || isLoading}
                  >
                    {isLoading ? 'Sending OTP...' : 'Continue'}
                  </Button>
                </div>

                {/* Terms and Privacy Policy */}
                <div className="w-full max-w-[327px] mx-auto mb-6 px-4 sm:px-0">
                  <ContinueSection />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Keypad overlay - fixed to bottom */}
          <div className="w-full bg-skylight backdrop-blur-[40.77px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40.77px)_brightness(100%)] fixed sm:absolute bottom-0 left-0 sm:left-auto">
            <div className="w-full h-[5px] flex justify-center items-center py-4">
              <div className="w-[134px] h-[5px] bg-inkdarkest rounded-[100px]" />
            </div>

            <div className="w-full px-2 pb-4">
              {/* Custom Numeric Keypad */}
              <div className="grid grid-cols-3 gap-1 mb-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <div 
                    key={`key-${num}`}
                    className="h-[49px] bg-[url(https://c.animaapp.com/mcx5y2jaSdkf8x/img/key-background.svg)] bg-[100%_100%] flex items-center justify-center cursor-pointer"
                    onClick={() => handleKeypadInput(num.toString())}
                  >
                    <div className="text-center">
                      <div className="font-normal text-inkdarkest text-[25px] tracking-[0.29px]">
                        {num}
                      </div>
                      <div className="font-bold text-inkdarkest text-[10px] tracking-[2.00px]">
                        {num === 1 ? "" : 
                         num === 2 ? "ABC" :
                         num === 3 ? "DEF" :
                         num === 4 ? "GHI" :
                         num === 5 ? "JKL" :
                         num === 6 ? "MNO" :
                         num === 7 ? "PQRS" :
                         num === 8 ? "TUV" : "WXYZ"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom row with 0 and delete */}
              <div className="flex justify-between">
                <div className="w-[121px]"></div>
                <div 
                  className="h-12 w-[121px] bg-[url(https://c.animaapp.com/mcx5y2jaSdkf8x/img/key-background.svg)] bg-[100%_100%] flex items-center justify-center cursor-pointer"
                  onClick={() => handleKeypadInput("0")}
                >
                  <div className="font-normal text-inkdarkest text-[25px] text-center tracking-[0.29px]">
                    0
                  </div>
                </div>
                <div 
                  className="w-[121px] h-12 flex items-center justify-center cursor-pointer"
                  onClick={handleKeypadDelete}
                >
                  <img
                    className="w-6 h-[18px]"
                    alt="Delete"
                    src="https://c.animaapp.com/mcx5y2jaSdkf8x/img/delete.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

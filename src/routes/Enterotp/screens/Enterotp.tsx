import { ArrowLeftIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { NumericKeyboardSection } from "./sections/NumericKeyboardSection";
import { OtpInputSection } from "./sections/OtpInputSection";

export const Enterotp = (): JSX.Element => {
  const [otp, setOtp] = useState<string>("");
  const [timer, setTimer] = useState<number>(30);
  const [isResendActive, setIsResendActive] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const isOtpComplete = otp.length === 4;

  // Timer countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setIsResendActive(true);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const handleBackClick = () => {
    navigate('/login');
  };

  const handleContinue = () => {
    if (isOtpComplete) {
      navigate('/setup-profile');
    }
  };

  const handleResendCode = () => {
    if (isResendActive) {
      setTimer(30);
      setIsResendActive(false);
      // Reset OTP
      setOtp("");
    }
  };

  return (
    <div className="bg-white flex flex-row justify-center items-center w-full h-screen">
      <div className="bg-white w-[390px] h-[844px] relative">
        <div className="w-full h-full bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)] flex flex-col">
          {/* Status Bar */}
          <div className="w-full h-11 bg-skywhite flex-shrink-0">
            <div className="absolute h-4 top-[15px] left-[30px] font-regular-none-medium font-[number:var(--regular-none-medium-font-weight)] text-inkdarkest text-[length:var(--regular-none-medium-font-size)] tracking-[var(--regular-none-medium-letter-spacing)] leading-[var(--regular-none-medium-line-height)] whitespace-nowrap [font-style:var(--regular-none-medium-font-style)]">
              9:41
            </div>

            <div className="absolute w-[18px] h-2.5 top-5 left-[303px] bg-[url(https://c.animaapp.com/mcx6ujms0yBayU/img/mobile-signal.svg)] bg-[100%_100%]" />
            <div className="absolute w-[15px] h-[11px] top-[19px] left-[326px] bg-[url(https://c.animaapp.com/mcx6ujms0yBayU/img/union.svg)] bg-[100%_100%]" />
            <div className="absolute w-[27px] h-[13px] top-[18px] left-[347px] bg-[url(https://c.animaapp.com/mcx6ujms0yBayU/img/battery.png)] bg-[100%_100%]" />
          </div>

          {/* Back Button */}
          <button 
            className="absolute top-[68px] left-[17px] w-9 h-[15px] cursor-pointer z-10"
            onClick={handleBackClick}
          >
            <ArrowLeftIcon className="w-full h-full text-inkdarkest" />
          </button>

          {/* Main content - aligned to top */}
          <div className="flex-grow flex flex-col justify-start items-center pt-20">
            {/* Title */}
            <h1 className="w-[327px] mx-auto mb-6 font-title-3 font-[number:var(--title-3-font-weight)] text-inkdarkest text-[length:var(--title-3-font-size)] text-center tracking-[var(--title-3-letter-spacing)] leading-[var(--title-3-line-height)] [font-style:var(--title-3-font-style)]">
              Enter OTP
            </h1>

            {/* OTP Input Section */}
            <div className="w-[327px] mx-auto mb-6">
              <OtpInputSection />
            </div>

            {/* OTP Input Boxes (Visual representation) */}
            <div className="flex justify-center gap-[25px] mb-12 w-full">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={`otp-box-${index}`}
                  className={`w-[50px] h-[50px] bg-white rounded-[10px] border border-solid ${
                    otp.length > index ? 'border-[#74a4ee]' : 'border-[#e1e1e1]'
                  } flex items-center justify-center text-2xl font-bold`}
                >
                  {otp[index] || ''}
                </div>
              ))}
            </div>

            {/* Continue Button */}
            <Button 
              className={`w-[327px] h-12 mx-auto mb-6 bg-[#74a4ee] rounded-[48px] flex items-center justify-center ${
                !isOtpComplete ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!isOtpComplete}
              onClick={handleContinue}
            >
              <span className="text-white font-regular-none-medium font-[number:var(--regular-none-medium-font-weight)] text-[length:var(--regular-none-medium-font-size)] tracking-[var(--regular-none-medium-letter-spacing)] leading-[var(--regular-none-medium-line-height)] [font-style:var(--regular-none-medium-font-style)]">
                Verify OTP
              </span>
            </Button>

            {/* Resend Code Button with Timer */}
            <div className="flex flex-col items-center mb-4">
              <Button
                variant="ghost"
                className={`w-[327px] h-12 mx-auto rounded-[48px] flex items-center justify-center ${
                  !isResendActive ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!isResendActive}
                onClick={handleResendCode}
              >
                <span className="text-primarybase font-regular-none-medium font-[number:var(--regular-none-medium-font-weight)] text-[length:var(--regular-none-medium-font-size)] tracking-[var(--regular-none-medium-letter-spacing)] leading-[var(--regular-none-medium-line-height)] [font-style:var(--regular-none-medium-font-style)]">
                  Resend code
                </span>
              </Button>
              
              {!isResendActive && (
                <div className="text-inkdarkest text-sm mt-1">
                  Resend in <span className="font-bold">{timer}s</span>
                </div>
              )}
            </div>
          </div>

          {/* Numeric Keyboard Section - fixed to bottom */}
          <div className="w-full absolute bottom-0 left-0">
            <NumericKeyboardSection otp={otp} setOtp={setOtp} maxLength={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

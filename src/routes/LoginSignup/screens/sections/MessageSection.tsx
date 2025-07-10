import React from "react";

interface MessageSectionProps {
  error?: string | null;
  success?: string | null;
}

export const MessageSection = ({ error, success }: MessageSectionProps): JSX.Element => {
  if (!error && !success) return <></>;

  return (
    <div className="w-full max-w-[327px] mx-auto mt-4 px-4 sm:px-0">
      {error && (
        <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm font-medium text-center">
            {error}
          </p>
        </div>
      )}
      
      {success && (
        <div className="w-full p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-600 text-sm font-medium text-center">
            {success}
          </p>
        </div>
      )}
    </div>
  );
};
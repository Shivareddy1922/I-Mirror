import React from "react";

interface MessageSectionProps {
  error?: string | null;
  success?: string | null;
}

export const MessageSection = ({ error, success }: MessageSectionProps): JSX.Element => {
  if (!error && !success) return <></>;

  return (
    <div className="w-full">
      {error && (
        <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg mb-2">
          <p className="text-red-600 text-sm font-medium text-center">
            {error}
          </p>
        </div>
      )}
      
      {success && (
        <div className="w-full p-3 bg-green-50 border border-green-200 rounded-lg mb-2">
          <p className="text-green-600 text-sm font-medium text-center">
            {success}
          </p>
        </div>
      )}
    </div>
  );
};
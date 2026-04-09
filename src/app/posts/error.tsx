"use client";

interface ErrorProps {
  error: Error;
}

const Error = ({ error }: ErrorProps) => {
  return (
    <div className="text-xl font-semibold text-center text-red-600">
      Error - {error.message || "Something went wrong"}
    </div>
  );
};

export default Error;

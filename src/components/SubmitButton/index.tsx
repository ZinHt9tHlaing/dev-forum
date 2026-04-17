"use client";

import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  label: string;
  pendingLabel: string;
}

const SubmitButton = ({ label, pendingLabel }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <div className="flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          <p>{pendingLabel}</p>
        </div>
      ) : (
        label
      )}
    </Button>
  );
};

export default SubmitButton;

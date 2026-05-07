import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

interface SubmitButtonProps {
  label: string;
  pendingLabel: string;
  isPending: boolean;
}

const SubmitButton = ({
  label,
  pendingLabel,
  isPending,
}: SubmitButtonProps) => {
  return (
    <Button type="submit" disabled={isPending}>
      {isPending ? (
        <div className="flex items-center gap-2 animate-pulse disabled:opacity-40 disabled:cursor-not-allowed">
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

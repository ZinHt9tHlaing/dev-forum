import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { UseFormReturn, FieldValues } from "react-hook-form";

interface SubmitButtonProps<T extends FieldValues> {
  label: string;
  pendingLabel: string;
  isPending: boolean;
  form: UseFormReturn<T>;
}

const SubmitButton = <T extends FieldValues>({
  label,
  pendingLabel,
  isPending,
  form,
}: SubmitButtonProps<T>) => {
  return (
    <Button type="submit" disabled={isPending || !form.formState.isValid}>
      {isPending ? (
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

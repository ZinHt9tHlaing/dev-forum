"use client";

import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { deletePostAction } from "../actions/post-actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import { useEffect } from "react";
import { PATHS } from "@/path";
import { Loader2 } from "lucide-react";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const { execute, isPending, hasSucceeded, hasErrored } =
    useAction(deletePostAction);

  useEffect(() => {
    if (hasSucceeded) {
      toast.success("Post created successfully");
      router.push(PATHS.POSTS);
    }

    if (hasErrored) {
      toast.error("Failed to create post");
    }
  }, [hasSucceeded, hasErrored, router]);

  return (
    <CardFooter>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button disabled={isPending} variant={"destructive"} size={"sm"}>
            {isPending ? (
              <div className="flex items-center gap-2 animate-pulse disabled:opacity-40 disabled:cursor-not-allowed">
                <Loader2 className="w-4 h-4 animate-spin" />
                <p>Deleting...</p>
              </div>
            ) : (
              <p>Delete</p>
            )}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure want to delete this post?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              post.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={isPending}
              onClick={() => execute({ id })}
              variant={"destructive"}
            >
              {isPending ? (
                <div className="flex items-center gap-2 animate-pulse disabled:opacity-40 disabled:cursor-not-allowed">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <p>Deleting...</p>
                </div>
              ) : (
                <p>Delete</p>
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </CardFooter>
  );
};

export default DeleteButton;

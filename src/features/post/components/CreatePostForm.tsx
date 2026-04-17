"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createPost } from "@/features/post/actions/post-actions";
import { Loader2 } from "lucide-react";

const CreatePostForm = () => {
  const [isPending, startTransition] = useTransition();

  const createPostAction = async (formData: FormData) => {
    startTransition(async () => {
      await createPost(formData);
    });
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Create Post</CardTitle>
          <CardDescription>This will create new post.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createPostAction} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" name="title" />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" />
            </div>

            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <p>Creating...</p>
                </div>
              ) : (
                "Create"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePostForm;

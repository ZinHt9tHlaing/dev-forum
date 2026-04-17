"use client";

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
import { Post } from "../types/post";
import { updatePost } from "../actions/post-actions";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

interface EditPostFormProps {
  post: Post;
}

const EditPostForm = ({ post: { id, title, body } }: EditPostFormProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Update existing post
          </CardTitle>
          <CardDescription>
            This will update these existing post.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={updatePost.bind(null, id as string)}
            className="space-y-4"
          >
            {/* <Input type="hidden" id="id" name="id" defaultValue={id} /> */}

            <div>
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" name="title" defaultValue={title} />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                defaultValue={body}
              />
            </div>

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <div className="flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          <p>Updating...</p>
        </div>
      ) : (
        "Update"
      )}
    </Button>
  );
};

export default EditPostForm;

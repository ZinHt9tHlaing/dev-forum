import React from "react";
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

const CreatePostForm = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Create Post</CardTitle>
          <CardDescription>This will create new post.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createPost} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" name="title" />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" />
            </div>

            <Button type="submit">Create</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePostForm;

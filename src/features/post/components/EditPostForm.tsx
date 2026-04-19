import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Post } from "../types/post";
import { updatePost } from "../actions/post-actions";
import SubmitButton from "@/components/SubmitButton";
import CardWrapper from "@/components/CardWrapper";
import * as z from "zod";

const updatePostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

interface EditPostFormProps {
  post: Post;
}

const EditPostForm = ({ post: { id, title, body } }: EditPostFormProps) => {
  return (
    <div>
      <CardWrapper
        title="Update existing post"
        description="This will update these existing post."
      >
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
            <Textarea id="description" name="description" defaultValue={body} />
          </div>

          <SubmitButton label="Update" pendingLabel="Updating..." />
        </form>
      </CardWrapper>
    </div>
  );
};

export default EditPostForm;

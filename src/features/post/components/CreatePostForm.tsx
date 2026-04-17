import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createPost } from "@/features/post/actions/post-actions";
import SubmitButton from "@/components/SubmitButton";
import CardWrapper from "@/components/CardWrapper";

const CreatePostForm = () => {
  // const [isPending, startTransition] = useTransition();

  // const createPostAction = async (formData: FormData) => {
  //   startTransition(async () => {
  //     await createPost(formData);
  //   });
  // };

  return (
    <div>
      <CardWrapper title="Create Post" description="This will create new post.">
        <form action={createPost} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" />
          </div>

          <SubmitButton label="Create" pendingLabel="Creating..." />
        </form>
      </CardWrapper>
    </div>
  );
};

export default CreatePostForm;

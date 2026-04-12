import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "../types/post";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PATHS } from "@/path";
import { MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { deletePost } from "../actions/post-actions";

interface Props extends Post {
  isCard?: boolean;
}

const PostItem = ({ id, title, body, isCard = true }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className={cn(`text-sm ${isCard && "line-clamp-2"}`)}>
          {body}
        </CardDescription>
      </CardHeader>
      {isCard && (
        <CardContent>
          <Button variant={"outline"} size={"sm"} asChild>
            <Link href={PATHS.SINGLE_POST(id.toString())}>
              <MoveUpRight /> Read more
            </Link>
          </Button>
        </CardContent>
      )}

      {!isCard && (
        <CardFooter>
          <form action={deletePost.bind(null, id as string)}>
            <Button variant={"destructive"} size={"sm"}>
              Delete
            </Button>
          </form>
        </CardFooter>
      )}
    </Card>
  );
};

export default PostItem;

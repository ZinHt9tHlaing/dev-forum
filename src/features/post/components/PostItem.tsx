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
import { Edit, MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { deletePostAction } from "../actions/post-actions";

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
          <div className="flex items-center gap-2">
            <Button asChild>
              <Link href={PATHS.SINGLE_POST(id.toString())}>
                <MoveUpRight /> Read more
              </Link>
            </Button>

            <Button variant={"secondary"} asChild>
              <Link href={PATHS.EDIT_POST(id.toString())}>
                <Edit /> Edit
              </Link>
            </Button>
          </div>
        </CardContent>
      )}

      {!isCard && (
        <CardFooter>
          <form action={deletePostAction.bind(null, id as string)}>
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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PATHS } from "@/path";
import { Edit, MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { deletePostAction } from "../actions/post-actions";
import { Badge } from "@/components/ui/badge";
import { Post } from "../../../../generated/prisma/client";

interface Props extends Post {
  isCard?: boolean;
}

const PostItem = ({ id, title, body, status, isCard = true }: Props) => {
  return (
    <Card className="relative">
      <Badge
        variant={status === "IN_PROGRESS" ? "outline" : "default"}
        className="absolute top-5 right-4"
      >
        {status}
      </Badge>
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

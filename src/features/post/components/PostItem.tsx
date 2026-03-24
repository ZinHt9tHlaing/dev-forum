import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "../types/post";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PATHS } from "@/path";
import { MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    </Card>
  );
};

export default PostItem;

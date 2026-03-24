import { Separator } from "../ui/separator";

interface HeadingProps {
  title: string;
  description?: string;
}

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm font-medium text-muted-foreground">{description}</p>
      <Separator className="mt-2 mb-6" />
    </div>
  );
};

export default Heading;

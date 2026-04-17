import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const CardWrapper = ({ title, description, children }: CardWrapperProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

export default CardWrapper;

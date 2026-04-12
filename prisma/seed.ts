import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const prisma = new PrismaClient({
  adapter,
});

export const FAKE_POSTS = [
  {
    title: "First post",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, maiores. Quos unde voluptatum omnis corporis autem maiores quam. Maxime, veritatis possimus voluptatibus a vitae molestiae officia sequi illum expedita nobis?",
  },
  {
    title: "Second post",
    body: "Lorem ipsum dolor sit amet consectetur adipiscing elit at nec mi convallis, gravida porttitor imperdiet venenatis dis potenti vestibulum montes ante accumsan, proin egestas eleifend risus quam vulputate inceptos nulla id cursus. Fringilla massa metus ut purus nostra hendrerit dapibus lectus, imperdiet litora tristique cubilia nisl ac nullam cum pharetra, per nec sodales magna facilisis et arcu.",
  },
  {
    title: "Third post",
    body: "Lorem ipsum dolor sit amet consectetur adipiscing elit, per posuere senectus aliquet et ridiculus nibh, habitant magna platea quis ac fringilla. Suspendisse semper nisl purus rutrum sem cubilia ad est tincidunt, tempus cum in maecenas primis urna a nisi suscipit, at blandit sagittis enim condimentum libero dictumst nam.",
  },
];

const seed = async () => {
  await prisma.post.deleteMany();

  await prisma.post.createMany({
    data: FAKE_POSTS,
  });
  console.log("database seeded...");
};

seed();

export type Post = {
  id: number | string;
  title: string;
  body: string;
  status: "DONE" | "IN_PROGRESS";
};

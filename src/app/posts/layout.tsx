const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">I am post layout</h2>
      {children}
    </div>
  );
};

export default PostsLayout;

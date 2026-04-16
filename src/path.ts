export const PATHS = {
  ABOUT: "/about",
  CONTACT: "/contact",
  HOME: "/",
  POSTS: "/posts",
  SINGLE_POST: (id: string) => `${PATHS.POSTS}/${id}`,
  EDIT_POST: (id: string) => `${PATHS.POSTS}/${id}/edit`,
};

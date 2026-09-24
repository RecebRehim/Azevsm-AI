import type { Access } from "payload";

export const publishedOrUser: Access = ({ req }) => {
  if (req.user) return true;
  return { workflow: { equals: "published" } };
};

export const usersOnly: Access = ({ req }) => Boolean(req.user);

export const adminsOnly: Access = ({ req }) => req.user?.role === "admin";

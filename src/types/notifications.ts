export type Notification = {
  id: number;
  type: "COMMENT" | "LIKE" | "FOLLOW";
  postId: string;
  creatorId: string;
  read: boolean;
};
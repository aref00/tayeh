export type UserType = {};

export type NewUser = {
  mobile: string;
  name?: string;
  description?: string;
  image_id?: number;
};

export type UpdateUser = {
  user_id: number;
};

import { getFakerUsers } from "@/fakers/user";
import { EUserMembership, EUserRelationship, IUserOutDto } from "@/models";

export const searchUsers = async (search: string): Promise<IUserOutDto[]> => {
  if (!search) {
    return [];
  }
  return (await getFakerUsers(search)).map((user) => ({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    active: user.active === "true",
    relationship: user.relationship as EUserRelationship,
    avatar: user.avatar,
    membership:
      user.membership === "null" ? null : (user.membership as EUserMembership),
    phone: user.phone,
    emailAddress: user.email_address,
  }));
};

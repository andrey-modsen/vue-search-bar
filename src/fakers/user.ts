import { IUserInDto } from "@/models";

export const getFakerUsers = async (search: string): Promise<IUserInDto[]> => {
  const mockedData = await import("@/assets/mocked_data.json");
  const users = Array.from(mockedData) as IUserInDto[];

  return users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(search.toLowerCase()) ||
      user.last_name.toLowerCase().includes(search.toLowerCase())
  );
};

export const getFakeCurrentUser = async (): Promise<IUserInDto> => {
  const mockedData = await import("@/assets/mocked_data.json");
  const users = Array.from(mockedData) as IUserInDto[];

  return users[0];
};

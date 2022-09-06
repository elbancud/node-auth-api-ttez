export interface UserDTO {
  id: string;
  email: string;
  firstName: string;
  lastName?: string;
  password?: string;
  permissionLevel?: number;
}

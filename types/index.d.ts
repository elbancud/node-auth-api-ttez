export interface UserDTO {
  id: string;
  email: string;
  firstName: string;
  lastName?: string;
  password?: string;
  permissionLevel?: number;
}
export interface UserCRUD {
  list: (limit: number, page: number) => Promise<any>;
  create: (resource: any) => Promise<any>;
  updateById: (resourceId: any) => Promise<string>;
  readById: (resourceId: any) => Promise<any>;
  deleteById: (resourceId: any) => Promise<string>;
  patchById: (resource: any) => Promise<string>;
}

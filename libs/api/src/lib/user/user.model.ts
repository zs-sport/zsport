import { User } from './user';

export interface UserModel extends User {
    roleIds?: string[];
}

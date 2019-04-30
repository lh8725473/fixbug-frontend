/**
 * types
 * @author guobin201314@gmail.com on 2019-04-28
 */
import { User } from '@/types';

export interface RootStateTypes {
  author: string;
  token: string | null;
  login: boolean;
  user: User | null;
}

// mutations
export declare type AuthorMutation = (author: string) => void;
export declare type TokenMutation = (token: string) => void;
export declare type LoginMutation = (token: boolean) => void;
export declare type UserMutation = (user: User) => void;

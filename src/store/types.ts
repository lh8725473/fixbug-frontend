/**
 * types
 * @author guobin201314@gmail.com on 2019-04-28
 */
import { User } from '@/types/User';
import { Project } from '@/types/Project';

export interface RootStateTypes {
  author: string;
  token: string | null;
  login: boolean;
  user: User | null;
  project: Project | null;
}

// mutations
export declare type AuthorMutation = (author: string) => void;
export declare type TokenMutation = (token: string) => void;
export declare type LoginMutation = (token: boolean) => void;
export declare type UserMutation = (user: User) => void;
export declare type ProjectMutation = (project: Project) => void;

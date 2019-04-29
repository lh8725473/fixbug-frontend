/**
 * types
 * @author guobin201314@gmail.com on 2019-04-28
 */
export interface RootStateTypes {
  author: string;
  token: string;
}

// mutations
export declare type AuthorMutation = (author: string) => void;
export declare type TokenMutation = (token: string) => void;

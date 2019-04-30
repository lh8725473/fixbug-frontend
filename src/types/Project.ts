/**
 * Project
 * @author guobin201314@gmail.com on 2019-04-30
 */
import { User } from '@/types/User';

export class Project {
  // tslint:disable-next-line:variable-name
  _id: string;
  // tslint:disable-next-line:variable-name
  __v: string;
  projectName: string;
  projectDesc: string;
  createdTime: string;
  updatedTime: string;
  // 创建人
  creator: User;
  // 项目成员
  users: User[];

  constructor(data?: any) {
    if (data) {
      this._id = data._id;
      this.__v = data.___v;
      this.projectName = data.projectName;
      this.projectDesc = data.projectDesc;
      this.createdTime = data.createdTime;
      this.updatedTime = data.updatedTime;
      this.creator = data.creator;
      this.users = data.users;
    }
  }

  static getProject(): Project | null {
    const res = localStorage.getItem('project');
    if (res) {
      return JSON.parse(res);
    } else {
      return null;
    }
  }
}

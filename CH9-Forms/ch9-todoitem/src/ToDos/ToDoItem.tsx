export enum Priority{
  HIGH,
  MEDIUM,
  LOW,
}

export interface Props{
  title:string;
  content:string;
  priority:Priority;
  assignee?:string;
  resolved:boolean;
}


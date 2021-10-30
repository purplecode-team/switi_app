export interface ManageType {
  id: number;
  apply: number;
  nickname: string;
  email: string;
  apply_detail: string;
  profilepath: string;
  studyMember: { contact: string };
  User: any;
  idUser: number;
}

export interface ItemType {
  index: number;
  item: ManageType;
  desc?: boolean;
}

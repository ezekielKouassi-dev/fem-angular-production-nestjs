export interface Message {
  message: string;
}

export interface BaseEntity {
  id : string | null
}

export interface widget extends BaseEntity {
  title: string,
  description: string
}

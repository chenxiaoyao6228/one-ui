export interface AvatarPropsType {
  prefix?: string;
  shape?: 'circle' | 'square';
  size?: number | 'sm' | 'md' | 'lg';
  src?: string;
  alt?: string;
  style?: object;
}

export interface AvatarState {
  scale: number;
  isImgExist: boolean;
}

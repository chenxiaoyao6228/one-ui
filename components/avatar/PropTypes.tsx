export interface Props {
  prefix?: string
  shape?: 'circle' | 'square'
  size?: number | 'sm' | 'md' | 'lg'
  src?: string
  alt?: string
  style?: React.CSSProperties
  className?: string
  children?: React.ReactNode
}

export interface State {
  scale: number
  isImgExist: boolean
}

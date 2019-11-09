import * as React from 'react'

export interface PropsType {
  prefix?: string
  style?: React.CSSProperties
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: "text" | "password" | "range" | "date" | "number" | "color" | "email"
  readonly?: boolean
  value?: string
  defaultValue?: string
  disabled?: boolean
  placeholder?: any // todo
  addonBefore?: any
  addonAfter?: any
}

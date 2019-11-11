import * as React from 'react'

export interface Props {
  prefix?: string
  style?: React.CSSProperties
  className?: string
  onChange?: (e: any) => void
  value?: any // 元素的value值 
  checked?: any; // 选中元素的value值
  name: string; // 一组radio的name值
  disabled?: boolean;
}


export interface GroupProps {
  prefix?: string
  style?: React.CSSProperties
  className?: string
  onChange?: (e: any) => void
  value?: any
  disabled?: boolean;
}
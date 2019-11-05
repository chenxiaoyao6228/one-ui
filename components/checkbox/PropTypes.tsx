type ValueType = string | number | boolean

interface OptionsType {
  label: string
  value: ValueType
}

export interface GroupPropsTypes {
  prefix?: string
  defaultValue?: Array<ValueType>
  value?: Array<ValueType>
  disabled?: boolean
  options?: Array<OptionsType | string>
  onChange?: (e: any) => void
}

export interface PropsTypes {
  prefix?: string
  name?: string
  value?: any
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onChange?: (e: any) => void
}

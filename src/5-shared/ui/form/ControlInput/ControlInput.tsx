'use client'

import { Control, FieldValues, Path, PathValue, useController } from 'react-hook-form'
import { IInputProps, Input } from '../../input/input'

interface IProps<T extends FieldValues> extends Omit<IInputProps, 'value' | 'defaultValue'> {
  name: Path<T>
  control: Control<T, Path<T>>
  defaultValue?: PathValue<T, Path<T>>
}

export const ControlInput = <T extends FieldValues>({ name, control, defaultValue, ...rest }: IProps<T>) => {
  const {
    field: { value: value = '', onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
  })

  return (
    <Input
      value={value?.trimStart() ?? ''}
      onChange={(e) => {
        fieldOnChange(e)
      }}
      error={fieldState.error?.message}
      {...rest}
      {...field}
    />
  )
}

import cn from 'classnames'
import { ButtonHTMLAttributes, ReactNode } from 'react'

import s from './styles.module.scss'
import LoaderIcon from '../../../../public/loader.svg'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rightIcon?: ReactNode
  leftIcon?: ReactNode
  children: ReactNode
  loading?: boolean
  disabled?: boolean
  className?: string
}

export const Button = ({
  children,
  loading = false,
  type = 'button',
  className,
  leftIcon,
  rightIcon,
  disabled = false,
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={cn(s.button, { [s.hover]: loading }, { [s.disabled]: disabled }, className)}
      disabled={disabled}
      data-testid={'button'}
      type={type}
      {...rest}
    >
      <>
        <div>{leftIcon}</div>
        {loading && <LoaderIcon data-testid={'button_loader'} className={cn(s.loader)} />}
        {children}
        <div>{rightIcon}</div>
      </>
    </button>
  )
}

"use client";

import cn from "classnames";
import React, {
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
  RefAttributes,
  forwardRef,
  useId,
  useState,
} from "react";

import s from "./styles.module.scss";
import ClearIcon from "../../../../public/clear.svg";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  floatingLabel?: boolean;
  error?: string;
  isFilled?: boolean;
  isValid?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  isClear?: boolean;
}

const Input: ForwardRefRenderFunction<unknown, IInputProps> = (
  {
    floatingLabel = false,
    placeholder = "",
    error,
    isValid,
    isFilled,
    disabled,
    className,
    leftIcon,
    rightIcon,
    isClear = false,
    ...rest
  },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<string>("");
  const id = useId();

  // replace with controlled value
  const isShowClear = !!value && isClear;
  const onClear = () => {
    setValue("");
  };

  return (
    <div className={s.container}>
      {floatingLabel && (
        <label
          htmlFor={id}
          className={cn(s.placeholder, {
            [s.focus]: isFocused || value,
            [s.leftIconPlaceholder]: leftIcon,
          })}
        >
          {placeholder}
        </label>
      )}
      {leftIcon && (
        <label htmlFor={id} className={s.leftIcon}>
          {leftIcon}
        </label>
      )}
      <input
        className={cn(
          s.input,
          {
            [s.disabled]: disabled,
            [s.filled]: isFilled,
            [s.valid]: isValid,
            [s.error]: error,

            [s.rightIconInput]: !!rightIcon,
            [s.leftIconInput]: leftIcon,
            [s.floatingLabelInput]: floatingLabel,
            [s.rightIconInputIsShowClear]: !!rightIcon && isShowClear,
          },
          className,
        )}
        id={id}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder={floatingLabel ? "" : placeholder}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
      {rightIcon && (
        <label
          htmlFor={id}
          className={cn(s.rightIcon, {
            [s.rightIconIsShowClear]: isShowClear,
          })}
        >
          {rightIcon}
        </label>
      )}
      {isShowClear && (
        <label onClick={onClear} htmlFor={id} className={s.clearIcon}>
          <ClearIcon />
        </label>
      )}
    </div>
  );
};

const ForwardedInput: ForwardRefExoticComponent<
  IInputProps & RefAttributes<unknown>
> = forwardRef(Input);

export { ForwardedInput as Input };

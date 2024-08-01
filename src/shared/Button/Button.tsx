import type { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'outlined';

interface ButtonProps extends ComponentProps<'button'> {
  variant: ButtonVariant;
  children: React.ReactNode;
}

export const Button = ({ variant, className, children, ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.btn, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};

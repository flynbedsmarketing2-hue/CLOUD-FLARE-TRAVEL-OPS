import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-full px-4 py-2 text-sm font-semibold transition',
        variant === 'primary'
          ? 'bg-ink text-white shadow-soft hover:-translate-y-0.5'
          : 'border border-black/10 bg-white text-ink hover:bg-black/5',
        className
      )}
      {...props}
    />
  );
}

import React, { FC } from 'react';
import { GhostButton, FillButton } from './ButtonStyles';

type TSize = any;

type TSizes = {
  small: TSize;
  medium: TSize;
  large: TSize;
};

const SIZES: TSizes = {
  small: {
    '--borderRadius': `${10}px`,
    '--fontSize': `${16 / 16}rem`,
    '--padding': '8px 24px',
  },
  medium: {
    '--borderRadius': `${10}px`,
    '--fontSize': `${16 / 16}rem`,
    '--padding': '16px 32px',
  },
  large: {
    '--borderRadius': `${12}px`,
    '--fontSize': `${18 / 16}rem`,
    '--padding': '20px 32px',
  },
};

interface IButton {
  variant: 'fill' | 'ghost'; // This can be evolved in different variants & sizes
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size: 'large' | 'medium' | 'small';
  className?: string;
  children: any;
}
/**
 * Reusable Button component
 * @param {variant} string "fill | ghost" default style.
 * @param {size} size small, medium, large.
 * @param {className} className override style.
 * @returns {Button} JSX.Element.
 */
const Button: FC<IButton> = ({ variant = 'fill', onClick, size, className, children }): JSX.Element => {
  const styles = SIZES[`${size}`];

  let Component;
  if (variant === 'fill') {
    Component = FillButton;
  } else if (variant === 'ghost') {
    Component = GhostButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component style={styles} className={className} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Button;

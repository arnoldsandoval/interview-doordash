import React from 'react';
import type { FunctionComponent, MouseEventHandler, ReactText } from 'react';
import './Button.scss';
import classNames from 'classnames';
import { ReactComponent as IconClose } from '../../icons/close.svg';

export type Props = {
  /**
   * Describes the usage of the button and its visual appearance. For the sake of this project, there is only a primary and secondary button (default).
   * @default secondary
   */
  variant?: "primary" | "secondary" | "dismiss",

  /**
   * Text content to be rendered within the button, usualy label text.
   */
  children: ReactText,

  /**
   * Button click handler.
   */
   onClick?: MouseEventHandler<HTMLButtonElement>,
};

/**
 * A clickable button used for form submissions and most in-page interactions.
 *
 * @component
 * @example
 * <Button variant="primary" onClick={() => {}}>Button label</Button>
 */
 export const Button: FunctionComponent<Props> = ({ variant, children, ...props }) => {
  const componentClass = classNames("button", {
    [`variant-${variant}`]: variant
  })
  const labelClass= classNames("button--label", {
    'is-visually-hidden': variant === 'dismiss'
  })

  return (
    <button
      type="button"
      className={componentClass}
      {...props}
    >
      <span className={labelClass}>{children}</span>
      {variant === 'dismiss' && <IconClose />}
    </button>
  );
};
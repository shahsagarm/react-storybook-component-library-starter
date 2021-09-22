import React from 'react';
import styled, { css } from 'styled-components';

import {
  DANGER_COLOR,
  DANGER_TEXT_COLOR,
  DISABLED_OPASITY,
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR,
} from '../utils/styles';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  isFullWidth?: boolean;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  display: ${(p) => (p.isFullWidth ? 'block' : 'inline-block')};
  width: ${(p) => (p.isFullWidth ? '100%' : 'auto')};
  text-align: center;
  user-select: none;
  line-height: 1.5;
  border: 1px solid transparent;

  padding: ${(p) => {
    if (p.size === 'small') {
      return '6px 24px';
    } else if (p.size === 'large') {
      return '18px 48px';
    }
    return '12px 40px';
  }};

  font-size: ${(p) => {
    if (p.size === 'small') {
      return '12px';
    } else if (p.size === 'large') {
      return '24px';
    }
    return '18px';
  }};

  background-color: #000;
  color: #fff;

  ${(p) => {
    if (p.variant === 'secondary') {
      return css`
        background-color: ${SECONDARY_COLOR};
        color: ${SECONDARY_TEXT_COLOR};
      `;
    } else if (p.variant === 'danger') {
      return css`
        background-color: ${DANGER_COLOR};
        color: ${DANGER_TEXT_COLOR};
      `;
    }

    return css`
      background-color: ${PRIMARY_COLOR};
      color: ${PRIMARY_TEXT_COLOR};
    `;
  }}

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: inherit;
    opacity: ${DISABLED_OPASITY};
  }
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, variant, size, isFullWidth, ...props }, ref) => {
    return (
      <StyledButton
        type="button"
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        ref={ref}
        {...props}
      >
        {label}
      </StyledButton>
    );
  }
);

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  label: 'Button',
  isFullWidth: false,
};

Button.displayName = 'Button';

import React, { FC } from 'react';

interface Props {
  className?: string;
  fontSize?: string;
  color?: string;
}

export const PageText: FC<Props> = ({ className, children }) => {
  return <span className={className}>{children}</span>;
};

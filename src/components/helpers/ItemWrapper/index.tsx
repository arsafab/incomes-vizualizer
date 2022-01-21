import React, { FC } from 'react';

interface Props {
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: number | string;
  justifyContent?: string;
  width?: string;
}

export const ItemWrapper: FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

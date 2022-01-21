import React, { FC } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';

const override = css`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  border-width: 6px;
  width: 60px;
  height: 60px;

  &:after {
    content: ' ';
    display: block;
    width: 27px;
    height: 9px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface Props {
  loading: boolean;
  size?: number;
  color?: string;
}

export const Spinner: FC<Props> = ({ loading, size = 150, color = '#1976d2' }) => {
  return <ClipLoader color={color} loading={loading} css={override} size={size} />;
};

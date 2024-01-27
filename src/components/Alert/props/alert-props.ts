import { Dispatch, SetStateAction } from 'react';

export type OptionProps = {
  show?: boolean;
  setShow?: Dispatch<SetStateAction<boolean>>;
  type: 'success' | 'warning' | 'danger' | 'info' | 'error';
  title?: string;
  subtitle?: string;
  subContent?: () => JSX.Element;
  icon?:
    | (() => JSX.Element)
    | React.ReactNode
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'error';
  successButton?: {
    show?: boolean;
    displayText? : string;
    onClick?: (() => void);
    className?: string;
  };
  cancelButton?: {
    show?: boolean;
    displayText?: string;
    onClick?: (() => void);
    className?: string;
  };
  timer?: number;
  onClose?: () => void;
  onOpen?: () => void;
};

export const defaultOptions: OptionProps = {
  show: true,
  setShow: () => {},
  type: 'success',
  title: 'Success !',
  subtitle: '',
  icon: 'success',
  successButton: {
    show: true,
    displayText: 'OK',
    onClick: () => {},
    className: '',
  },

  cancelButton: {
    show: true,
    displayText: 'Cancel',
    onClick: () => {},
    className: '',
  },
};

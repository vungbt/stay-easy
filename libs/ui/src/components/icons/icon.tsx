import { CSSProperties, FC } from 'react';
import EyeHide from './assets/eye-hide';
export type IconProps = {
  className?: string;
  style?: CSSProperties;
  transform?: string;
  strokeWidth?: number;
};

export type Icon = FC<IconProps>;

const IconsDefine = {
  'eye-hide': 'eye-hide'
} as const;

export type IconName = keyof typeof IconsDefine;

export const IconsList = Object.keys(IconsDefine);

export type IconsType = Record<IconName, Icon>;

export const Icons: IconsType = {
  'eye-hide': (props: IconProps) => {
    return <EyeHide {...props} />;
  }
};

export const Icon = ({ name, ...reset }: IconProps & { name?: IconName }) => {
  if (!name) {
    return null;
  }
  const RenderIcon = Icons[name];
  return RenderIcon ? <RenderIcon {...reset} /> : null;
};

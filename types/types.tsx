import { LazyExoticComponent } from "react";

export type ProjectType = {
  title: string;
  description: string;
};
export type ProjectDeatailsType = {
  title: string;
  github?: string;
  image?: string;
  link?: string;
  description: string;
};
export type NavigationType = LazyExoticComponent<React.ComponentType<any>>;

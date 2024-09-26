import { LazyExoticComponent } from "react";

export type ProjectType = {
  title: string;
  description: string;
};

export type HomeNavigationItemTypes = {
  name: string;
  href: string;
  target: string;
  view: string;
};
export type HomeNavigationTypes = {
  Navigation: HomeNavigationItemTypes[];
};
export type ProjectDeatailsType = {
  title: string;
  github?: string;
  image?: string;
  link?: string;
  description: string;
};
export type NavigationType = LazyExoticComponent<React.ComponentType<any>>;

export interface ExtendedDocument extends Document {
  startViewTransition?: any;
}
export interface ExtendedWindow extends Window {}

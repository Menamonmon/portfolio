import { IconType } from "react-icons/lib";

export type Skill = {
  name: string;
  icon: IconType;
};

export type Link = {
  name: string;
  path: string;
};

export type SocialMediaLink = Link & {
  icon: IconType;
};

export type Project = {
  name: string;
  tags: string[];
  preview: string;
  description: string;
  createdAt: Date;
  link?: string;
  inProgress: boolean;
};

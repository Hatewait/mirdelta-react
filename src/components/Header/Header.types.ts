export type HeaderNavItem =
  | { text: string; isButton: true; linkTo?: never }
  | { text: string; linkTo: string; isButton?: false };

export type ButtonRef = { current: HTMLButtonElement | null };

export type CategoryItem = {
  title?: string;
  type: "category" | "banner";
  src: string;
};


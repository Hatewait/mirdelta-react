// src/declarations.d.ts

// Swiper CSS (и любые под-пути)
declare module "swiper/css";
declare module "swiper/css/*";

// Глобальные стили
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";

// CSS Modules
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module "*.module.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Изображения
declare module "*.png"  { const src: string; export default src; }
declare module "*.jpg"  { const src: string; export default src; }
declare module "*.jpeg" { const src: string; export default src; }
declare module "*.gif"  { const src: string; export default src; }
declare module "*.webp" { const src: string; export default src; }
declare module "*.avif" { const src: string; export default src; }
declare module "*.bmp"  { const src: string; export default src; }
declare module "*.svg"  {
  import * as React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default src;
}

// Медиа
declare module "*.mp4"  { const src: string; export default src; }
declare module "*.webm" { const src: string; export default src; }
declare module "*.mp3"  { const src: string; export default src; }
declare module "*.wav"  { const src: string; export default src; }
declare module "*.ogg"  { const src: string; export default src; }

// Шрифты
declare module "*.woff"  { const src: string; export default src; }
declare module "*.woff2" { const src: string; export default src; }
declare module "*.eot"   { const src: string; export default src; }
declare module "*.ttf"   { const src: string; export default src; }
declare module "*.otf"   { const src: string; export default src; }

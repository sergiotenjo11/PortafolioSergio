// Declarations for non-TS imports (CSS, images, modules)
declare module '*.css';
declare module '*.scss';
declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
  import * as React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

export {};

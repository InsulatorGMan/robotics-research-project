export interface Slide {
  elements: JSX.Element | JSX.Element[];
  index: number;
  transition: 'slideIn' | 'slideOut'
}
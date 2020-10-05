export interface LayoutProps {
  currentSection: string;
  menuItems: string[];
  onVisChange: (isVisible: boolean, tab: string) => void;
}

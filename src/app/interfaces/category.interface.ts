export interface Category {
  id: string;
  name: string;
  icon?: string;           
  count?: number;          
  expanded?: boolean;   
  link?: string;    
  children?: Category[];
}

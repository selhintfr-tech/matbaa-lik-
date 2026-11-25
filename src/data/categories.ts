// Backwards compatible proxy to centralized catalog
import { CATEGORIES, type Category as CatalogCategory } from "./catalog";

export interface Subcategory {
  name: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  shortName: string;
  iconName: string;
  image: string;
  description: string;
  keywords: string[];
  subcategories: Subcategory[];
}

// Map the 14 categories with their subcategories for components that expect the legacy shape
export const categories: Category[] = CATEGORIES.map(cat => ({
  id: cat.id,
  name: cat.name,
  shortName: cat.shortName,
  iconName: cat.iconName,
  image: cat.image,
  description: cat.description,
  keywords: cat.keywords,
  subcategories: cat.submenus.map(sub => ({
    name: sub.title,
    description: sub.items.map(i => i.label).slice(0, 3).join(", ")
  }))
}));

export default categories;

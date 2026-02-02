// src/data/blogCategories.js
// Categories du blog Foodmoov

export const blogCategories = [
  {
    id: "all",
    name: "Tous",
    slug: "tous",
    description: "Tous les articles du blog",
    color: "#333333"
  },
  {
    id: "conseils",
    name: "Conseils",
    slug: "conseils",
    description: "Astuces et guides pour les amateurs de street-food",
    color: "#fca922"
  },
  {
    id: "entreprises",
    name: "Entreprises",
    slug: "entreprises",
    description: "Solutions food truck pour les entreprises et evenements corporate",
    color: "#3b82f6"
  },
  {
    id: "collectivites",
    name: "Collectivites",
    slug: "collectivites",
    description: "Food trucks pour mairies, ecoles et evenements publics",
    color: "#10b981"
  },
  {
    id: "foodtruckers",
    name: "Food Truckers",
    slug: "foodtruckers",
    description: "Guides et ressources pour les professionnels du food truck",
    color: "#f59e0b"
  },
  {
    id: "tendances",
    name: "Tendances",
    slug: "tendances",
    description: "Les dernieres tendances de la street-food",
    color: "#ec4899"
  }
];

export const getCategoryById = (id) => {
  return blogCategories.find(cat => cat.id === id) || blogCategories[0];
};

export const getCategoryBySlug = (slug) => {
  return blogCategories.find(cat => cat.slug === slug) || blogCategories[0];
};

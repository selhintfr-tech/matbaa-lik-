export interface SiteConfig {
  name: string;
  tagline: string;
  announcement: string;
  city: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  workingHours: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
    whatsapp: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "MATBAA LIK",
  tagline: "IMPRESSION & CRÉATION AU MAROC",
  announcement: "Impression professionnelle | Création graphique | Livraison partout au Maroc",
  city: "Casablanca",
  country: "Maroc",
  phone: "+212522000000",
  phoneDisplay: "+212 522 00 00 00",
  whatsapp: "+212600000000",
  whatsappDisplay: "+212 600 00 00 00",
  email: "contact@matbaalik.ma",
  workingHours: "Lun - Ven: 8h30 - 18h30 | Sam: 9h00 - 13h00",
  socials: {
    instagram: "https://instagram.com/matbaalik",
    facebook: "https://facebook.com/matbaalik",
    tiktok: "https://tiktok.com/@matbaalik",
    whatsapp: "https://wa.me/212600000000?text=Bonjour%20MATBAA%20LIK,%20je%20souhaite%20un%20renseignement",
  },
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Produits", href: "/#categories" },
    { label: "Entreprises", href: "/devis?type=entreprise" },
    { label: "Réalisations", href: "/#realisations" },
    { label: "Création graphique", href: "/devis?type=creation" },
    { label: "Contact", href: "/#contact" },
    { label: "Conditions générales", href: "/conditions" },
  ],
};

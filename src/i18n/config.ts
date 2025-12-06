export type Dict = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    mission: {
      title: string;
      text: string;
    };
    philosophy: {
      title: string;
      text: string;
    };
    bio: {
      title: string;
      text: string;
      personal: string;
    };
  };
  services: {
    title: string;
    home: {
      title: string;
      description: string;
      areas: string[];
    };
    office: {
      title: string;
      description: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    location: string;
    instagram: string;
    whatsappButton?: string;
    whatsappDescription?: string;
    whatsappMessage?: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    rights: string;
  };
  inspiration: {
    text: string;
  };
};

export type Locale = "es" | "en";

export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("./dictionaries/en")).default as Dict;
    case "es":
    default:
      return (await import("./dictionaries/es")).default as Dict;
  }
}


/**
 * Template para contenido del negocio
 * Este archivo se completará con información real extraída del PDF
 * NO INVENTAR información - solo usar datos reales del portafolio
 */

export interface Service {
  title: string;
  description: string;
  features?: string[];
  icon?: string;
}

export interface BusinessValue {
  title: string;
  description: string;
}

export interface BusinessContent {
  services: Service[];
  values: BusinessValue[];
  contact: {
    email: string;
    phone: string;
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
    address?: string;
  };
  about: {
    description: string;
    mission?: string;
    vision?: string;
  };
}

// Este objeto se completará con información REAL del PDF
export const businessContent: BusinessContent = {
  services: [
    // TODO: Agregar servicios reales del PDF
    // Ejemplo estructura:
    // {
    //   title: "Nombre del servicio",
    //   description: "Descripción exacta del PDF",
    //   features: ["Feature 1", "Feature 2"],
    //   icon: "📦"
    // }
  ],
  
  values: [
    // TODO: Agregar valores reales del PDF
  ],
  
  contact: {
    email: "", // TODO: Del PDF
    phone: "", // TODO: Del PDF
    whatsapp: "", // TODO: Del PDF
    instagram: "", // TODO: Del PDF
  },
  
  about: {
    description: "", // TODO: Descripción real del PDF
  }
};


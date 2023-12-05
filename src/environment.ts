interface Environment {
  api: {
    roadmap: string;
  };
  contactUs: {
    templateId: string;
    serviceId: string;
    publicKey: string;
  };
}

export const env: Environment = {
  api: {
    roadmap: import.meta.env.VITE_API_ROADMAP,
  },
  contactUs: {
    templateId: import.meta.env.VITE_API_CONTACT_US_TEMPLATE_ID,
    serviceId: import.meta.env.VITE_API_CONTACT_US_SERVICE_ID,
    publicKey: import.meta.env.VITE_API_CONTACT_US_PUBLIC_KEY,
  },
};

const data: {
  name: string;
  phoneNumbers: {
    whatsapp: string;
    phone: string;
  };
  instagram: string;
} = {
  name: 'Ceren Tercan',
  phoneNumbers: {
    whatsapp: process.env.WHATSAPP_NUMBER || '+905555555555',
    phone: process.env.PHONE_NUMBER || '+905555555555',
  },
  instagram: `https://www.instagram.com/${process.env.INSTAGRAM_USERNAME || 'username'}`,
};

export { data };

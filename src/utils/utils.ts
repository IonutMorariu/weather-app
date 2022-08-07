const getISOLangCode = (lang: string) => {
  switch (lang) {
    case 'es':
      return 'es-ES';
    case 'en':
      return 'en-GB';
    default:
      return '';
  }
};

export { getISOLangCode };

export  const getLocalizedText = (item, field, locale) => {
    if (locale === 'en') return item[`${field}_en`];
    if (locale === 'ru') return item[`${field}_ru`];
    if (locale === 'kgz') return item[`${field}_kg`];
    return item[`${field}_ru`];
}
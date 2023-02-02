export const dateFormatter = (language: string) =>
  new Intl.DateTimeFormat(language)

export const priceFormatter = (language: string, currency: string) =>
  new Intl.NumberFormat(language, {
    style: 'currency',
    currency,
  })

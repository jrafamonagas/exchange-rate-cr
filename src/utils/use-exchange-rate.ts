import useFetch from 'fetch-suspense'

export default function useExchangeRate(lKey: string): number {
  const ENDPOINT =
    'https://cors-anywhere.herokuapp.com/https://www.bccr.fi.cr/_layouts/15/Recursos/services/CoopActions.ashx?op=consultaSDDE'

  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify({ lKey }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }

  const response = useFetch(ENDPOINT, OPTIONS)
  return parseFloat(JSON.parse(response)[0].Valor)
}

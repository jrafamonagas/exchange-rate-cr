/* @flow */
import { unstable_createResource as createResource } from 'react-cache'

function exchangeRateResource (lKey: string) {
  const ENDPOINT =
    'https://cors-anywhere.herokuapp.com/https://www.bccr.fi.cr/_layouts/15/Recursos/services/CoopActions.ashx?op=consultaSDDE'

  const options = {
    method: 'POST',
    body: JSON.stringify({ lKey }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  return fetch(ENDPOINT, options)
    .then(response => response.json())
    .then(response => response[0].Valor)
    .then(parseFloat)
}

export default createResource(exchangeRateResource)

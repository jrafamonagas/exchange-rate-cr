/* @flow */
import { unstable_createResource as createResource } from "react-cache";

export default createResource(async (lKey: string) => {
  const CORS = "https://cors-anywhere.herokuapp.com";
  const ENDPOINT =
    "https://www.bccr.fi.cr/_layouts/15/Recursos/services/CoopActions.ashx?op=consultaSDDE";

  const request = await fetch(`${CORS}/${ENDPOINT}`, {
    body: JSON.stringify({ lKey }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  });

  const value = (await request.json())[0].Valor;
  return parseFloat(value);
});

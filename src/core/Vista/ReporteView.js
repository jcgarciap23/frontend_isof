import { API } from '../../config';

export const getReportes = () => {
    return fetch(
      `${API}/reportes/reportes`,
      {
        method: 'GET'
      }
    )
      .then(response =>{ 
        console.log(response)
        return response.json()
      })
      .catch(err => console.log(err))
}
  
export const readReporte = (reportesId) => {
    return fetch(`${API}/reportes/${reportesId}`, {
      method: "GET"
    }).then(response => {
      return response.json();
    })
      .catch(err => console.log(err))
}
  
export const createReporte = (userId, token, reportes) => {
    
    return fetch(`${API}/reportes/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: reportes
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
}
import { API } from '../../config';

export const getAnimales = () => {
    return fetch(
      `${API}/animales/animales`,
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

export const createAnimales = (userId, token, animales) => {
    return fetch(`${API}/animales/create/${userId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: animales
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
}

export const read = (animalesId) => {
  return fetch(`${API}/animales/${animalesId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}
if (!window.fetch) { require('whatwg-fetch') }

function statusHelper (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export const apiFetchData = function (api_call) {
  return fetch(api_call)
  .then(statusHelper)
  .then(response => response.text())
  .catch(error => error)
  .then(data => data)
}

export const authApi = function (userData) {
  return fetch(`http://localhost/api/auth/local/register`, {
    method  : 'POST',
    headers : {
      'Accept'        : 'application/json',
      'Content-Type'  : 'application/json'
    },
    body    : JSON.stringify({
      name      : userData.name,
      email     : userData.email,
      password  : userData.password
    })
  })
  .then(statusHelper)
  .then(response => response.json())
  .catch(error => error)
  .then(data => {
    console.log(data) // The data does log!
    return data
  })
}

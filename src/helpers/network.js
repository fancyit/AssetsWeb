const API_ROOT = 'https://localhost:44383/api';

export const httpGet = async endPoint => {
  const response = await fetch(`${API_ROOT}/${endPoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('tkn')}`
    }
  });
  //console.log(response);
  try {
    if(response.status !==200){
      return { data: {loginError: response.statusText}, status: response.status }
    }
    const json = await response.json();
    return { data: json, status: response.status }
  }
  catch(err){
    console.log('error', err);
    return { data: {loginError: err.statusText}, status: err.status }
  }

};
export const httpPost = async (endPoint, cred) => {
  const response = await fetch(`${API_ROOT}/${endPoint}`, {
    method: 'POST', // или 'PUT'
    body: JSON.stringify(cred), // данные могут быть 'строкой' или {объектом}!
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return { data: data, status: response.status }
};
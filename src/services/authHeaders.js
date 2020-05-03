const getAuthHeaders = () => {
  return localStorage.getItem("currentUser") ? { Authorization: `Bearer ${JSON.parse(localStorage.getItem("currentUser")).data.access_token}`} : {}
}

export default getAuthHeaders;
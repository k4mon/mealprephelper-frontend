const getAuthHeaders = () => {
  return localStorage.getItem("currentUser") ? { Authorization: `Bearer ${localStorage.getItem("currentUser").access_token}`} : {}
}

export default getAuthHeaders;
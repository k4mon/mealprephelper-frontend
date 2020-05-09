const isUserAuthenticated = () => {
  return localStorage.getItem("currentUser") ? true : false;
}


const getAuthHeaders = () => {
  return isUserAuthenticated() ? { Authorization: `Bearer ${JSON.parse(localStorage.getItem("currentUser")).data.access_token}`} : {}
}


const logoutUser = () => {
  localStorage.removeItem("currentUser");
}

export {getAuthHeaders, isUserAuthenticated, logoutUser};
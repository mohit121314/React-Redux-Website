import axios from "axios";
import Cookie from "js-cookie"

export const getUser = (username, password) => {
  return dispatch => {
    dispatch({
      type: "GET_INFO"
    });

    let url = "https://hrtaskapi.dhwaniris.in/index.php/api/user/login";
    
    var bodyFormData = new FormData();
    bodyFormData.set("username", username);
    bodyFormData.set("password", password);
  
    const token =  Cookie.get("token") ? Cookie.get("token") : null;

    axios
      .post(url, bodyFormData, token)
      .then(response => {
        dispatch({
          type: "GET_INFO_SUCCESS",
          data: response.data,
         
        });
       document.cookie='token=[home]'
        window.location.href = "/home";
      })
      .catch(error => {
        dispatch({
          type: "GET_INFO_ERROR",
          error
        });
      });
  };
};

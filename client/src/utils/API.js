import axios from "axios";

export default {
    // SignUp post call
    newUser: function(userData) {
        return axios.post("/api/users/register", userData)
    },
    // LogIn post call
    logIn: function(userInfo) {
        return axios.post("/api/users/login", userInfo)
    },
    // SignUp post call
    getInfo: function(id) {
        return axios.get("/api/users/info/" + id)
    },
};

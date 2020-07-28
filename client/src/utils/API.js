import axios from "axios";
import {getJWT} from './token';

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
    // Add "like" call
    addLike: function(likeInfo) {
        const token = getJWT();

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        return axios.post( 
          '/api/likes',
          likeInfo,
          config
        );
    },
    // Get matches call
    getMatches: function(likeInfo) {
        const token = getJWT();

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        return axios.get( 
          '/api/matches',
          {},
          config
        );
    }
};

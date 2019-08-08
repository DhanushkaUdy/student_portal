import axios from 'axios';

export const register = newUser => {
    return axios
        .post('user/register', {
            first_name : newUser.first_name,
            last_name : newUser.last_name,
            email : newUser.email,
            password : newUser.password
        })
        .then( res=>{
            console.log('user Registered');
            window.alert("User Registered");
        } )
        .catch(err => {
            console.log(err);
        })
};
export const login = user => {
    return axios
        .post('/login', {
            email : user.email,
            password : user.password
        })
        .then( res => {
            localStorage.setItem('usertoken', res.data);
        })
        .catch(err => {
            console.log(err);
        })
};

import axios from 'axios'

export const register = newUser => {
    return axios
        .post('http://localhost:2000/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res => {
            console.log("registered");

        })
        .catch(error=>{
            console.log(error)
        });
}

export const login = user => {
    return axios
        .post('http://localhost:2000/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}


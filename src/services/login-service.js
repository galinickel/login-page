import axios from 'axios'

const LOGIN_URL = 'https://jupiter.d.greeninvoice.co.il/api/v1/account/login'

export const loginService = {
    login
}

async function login(user) {
    const res = await axios.post(LOGIN_URL, user)
    return res.data
}
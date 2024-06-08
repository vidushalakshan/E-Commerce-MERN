const backendDomain = "http://localhost:8080"

const SummaryApi = {
    SignUp: {
        url :`${backendDomain}/api/singup`,
        method : "post"
    },

    SignIn : {
        url :  `${backendDomain}/api/login`,
        method : "post"
    }
}

export default SummaryApi;
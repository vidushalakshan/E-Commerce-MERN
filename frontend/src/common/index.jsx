const backendDomain = "http://localhost:8080"

const SummaryApi = {
    SignUp: {
        url :`${backendDomain}/api/singup`,
        method : "post"
    },

    SignIn : {
        url :  `${backendDomain}/api/login`,
        method : "post"
    },

    current_user : {
        url : `${backendDomain}/api/user-details`,
        method : "get",
    }
}

export default SummaryApi;
import { 
    AUTH_EMAIL, 
    AUTH_PASSWORD, 
    handleJobSearchQuery, 
} from "../constants/exports.js"

const bypass = async( page ) => {

    await handleJobSearchQuery( page, AUTH_EMAIL, '#session_key' );
    await handleJobSearchQuery( page, AUTH_PASSWORD, '#session_password' );
}

export default bypass;
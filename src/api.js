import axios from "axios"


export const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID wztkTk1jI8xj9_pDGRnyk1T5Wkdz-xsISsMXXOiQKNk"
        }, 
        params: {
            query: term
        }
    });

    return response.data.results;
}

import env from "react-dotenv";

export const getViews = async () => {
    return fetch(`${env.BASE_URL}/view`).then(res => res.json())
}
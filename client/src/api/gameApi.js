import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/games';

export const useCreateGame = () => {
    const {accessToken} = useContext(UserContext);

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    }

    const create = (gameData) =>
        request.post(baseUrl, gameData, options);

    return {
        create,
    }
}
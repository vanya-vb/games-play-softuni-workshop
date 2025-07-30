import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/games';

export const useGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setGames)
    }, []);

    return {
        games,
    }
}

export const useGame = (gameId) => {
    const [game, setGame] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${gameId}`)
    }, [gameId])

    return {
        game,
    }
};

export const useCreateGame = () => {
    const { accessToken } = useContext(UserContext);

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
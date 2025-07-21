import { useEffect, useState } from "react"
import gameService from "../../services/gameService"
import GameCatalogItem from "./GameCatalogItem/GameCatalogItem";

export default function GameCatalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result));
    }, []);

    return (
        // <!-- Catalogue -->
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            
            {games.length > 0 ?
                games.map(game => <GameCatalogItem key={game._id} {...game} />)
                :
                <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    )
}
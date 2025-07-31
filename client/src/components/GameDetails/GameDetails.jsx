import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router"
import CommentsShow from "../CommentsShow/CommentsShow";
import CommentsCreate from "../CommentsCreate/CommentsCreate";
import commentService from "../../services/commentService";
import { useDeleteGame, useGame } from "../../api/gameApi";
import useAuth from "../../hooks/useAuth";

export default function GameDetails() {
    const navigate = useNavigate();
    const { email } = useAuth();
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();
    const { game } = useGame(gameId);
    const { deleteGame } = useDeleteGame();

    useEffect(() => {
        commentService.getAll(gameId)
            .then(setComments);
    }, [gameId]);

    const gameDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${game.title} game?`);

        if (!hasConfirm) {
            return;
        }

        await deleteGame(gameId);

        navigate('/games');
    };

    const commentsCreateHandler = (newComment) => {
        setComments(state => [...state, newComment]);
    };

    return (
        // <!--Details Page-->
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <CommentsShow comments={comments} />

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                    <button onClick={gameDeleteClickHandler} className="button">Delete</button>
                </div>
            </div>

            <CommentsCreate
                email={email}
                gameId={gameId}
                onCreate={commentsCreateHandler}
            />

        </section>
    )
}
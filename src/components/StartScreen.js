import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
    return (
        <div className="start">
            <h1>secret word</h1>
            <p>clique no botão para iniciar o jogo.</p>
            <button onClick={startGame} className="btnPlay">
            <span>PLAY</span>
            </button>
        </div>
    );
};

export default StartScreen;
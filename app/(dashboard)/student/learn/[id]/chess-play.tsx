"use client";

import { useCallback, useMemo, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

interface PropType {
  onPlay?: () => void;
}

const ChessPlay = ({ onPlay }: PropType) => {
  const chess = useMemo(() => new Chess(), []);
  const [fen, setFen] = useState(chess.fen());
  const [over, setOver] = useState("");

  const makeAMove = useCallback(
    (move: string | { from: string; to: string }) => {
      try {
        const result = chess.move(move); // update Chess instance
        setFen(chess.fen()); // update fen state to trigger a re-render

        if (chess.isGameOver()) {
          // check if move led to "game over"
          if (chess.isCheckmate()) {
            // if reason for game over is a checkmate
            // Set message to checkmate.
            setOver(
              `Checkmate! ${chess.turn() === "w" ? "black" : "white"} wins!`
            );
            // The winner is determined by checking which side made the last move
          } else if (chess.isDraw()) {
            // if it is a draw
            setOver("Draw"); // set message to "Draw"
          } else {
            setOver("Game over");
          }
        }

        return result;
      } catch (e) {
        return null;
      } // null if the move was illegal, the move object if the move was legal
    },
    [chess]
  );

  function onDrop(sourceSquare: string, targetSquare: string) {
    const moveData = {
      from: sourceSquare,
      to: targetSquare,
      color: chess.turn(),
    };

    const move = makeAMove(moveData);

    // illegal move
    if (move === null) return false;

    return true;
  }

  return (
    <div style={{ boxShadow: "0px 4.47px 13.42px 0px rgba(0,0,0,0.25)" }}>
      <Chessboard
        position={fen}
        onPieceDrop={onDrop}
        customDarkSquareStyle={{ backgroundColor: "#930000" }}
        customLightSquareStyle={{
          backgroundColor: "#FFF4F4",
        }}
        // Flip board from white to black
        boardOrientation="white"
      />
    </div>
  );
};

export default ChessPlay;

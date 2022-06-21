import "./styles/App.css";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import _ from "lodash";

import * as states from "./recoil/atoms";

import HomeCenter from "./components/homeCenter";
import StepsGrid from "./components/stepsGrid";
import HomeBox from "./components/homeBox";
import GameSetup from "./components/gameSetup";
import { colorMap, moves, playerOrder } from "./config/constants";

function Emulation() {
  const [currentPlayer, setCurrentPlayer] = useRecoilState(
    states.currentPlayerState
  );
  const [diceState, setDiceState] = useRecoilState(states.currentDiceState);
  const [blockState, setBlockState] = useRecoilState(states.allBlockState);
  const [coinState, setCoinState] = useRecoilState(states.allCoinState);
  const playersList = useRecoilValue(states.currentPlayersListState);

  // useEffect(() => {
  //   console.log(JSON.stringify({ blockState, coinState }, 0, 2));
  // }, [JSON.stringify(coinState), JSON.stringify(blockState)]);

  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <button
          key={i}
          onClick={() => {
            setDiceState({
              num: i,
              isLocked: false,
              lastRolledBy: currentPlayer,
            });
          }}
        >
          {i}
        </button>
      ))}
      <br />
      {playersList.map((elem, i) => (
        <button
          key={i}
          onClick={() => {
            setCurrentPlayer(elem);
          }}
          style={{ backgroundColor: elem }}
        >
          {elem}
        </button>
      ))}

    </div>
  );
}

function App() {
  return (
    <div>
      <GameSetup />
      <div className="App">
        <div className="boardWrapper">
          <div className="innerRow">
            <HomeBox parent="palegreen" />
            <StepsGrid parent="yellow" adjacentDirection="leftOrTop" />
            <HomeBox parent="yellow" />
          </div>
          <div className="innerRow">
            <StepsGrid
              style={{ transform: "rotate(90deg)" }}
              parent="palegreen"
              adjacentDirection="rightOrBottom"
            />
            <HomeCenter />
            <StepsGrid
              style={{ transform: "rotate(90deg)" }}
              parent="royalblue"
              adjacentDirection="leftOrTop"
            />
          </div>
          <div className="innerRow">
            <HomeBox parent="tomato" />
            <StepsGrid parent="tomato" adjacentDirection="rightOrBottom" />
            <HomeBox parent="royalblue" />
          </div>
        </div>
        <br />
        {process.env.NODE_ENV === "development" && <Emulation />}
      </div>
    </div>
  );
}

export default App;

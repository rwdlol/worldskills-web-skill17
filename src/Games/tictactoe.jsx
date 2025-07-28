import { useState } from "react";

export default function TicTacToeGame() {
  const [allow, setAllow] = useState(true);
  const [value, setValue] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  function click(i) {
    if (value[i] || calculateWinner(value)) return;
    const values = value.slice();
    if (allow) {
      values[i] = "x";
    } else {
      values[i] = "o";
    }
    setValue(values);
    setAllow(!allow);
  }

  const winner = calculateWinner(value);
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 h-fit w-fit">
        <Btn click={() => click(0)} value={value[0]} />
        <Btn click={() => click(1)} value={value[1]} />
        <Btn click={() => click(2)} value={value[2]} />
        <Btn click={() => click(3)} value={value[3]} />
        <Btn click={() => click(4)} value={value[4]} />
        <Btn click={() => click(5)} value={value[5]} />
        <Btn click={() => click(6)} value={value[6]} />
        <Btn click={() => click(7)} value={value[7]} />
        <Btn click={() => click(8)} value={value[8]} />
      </div>
      {winner ? <p>Winner: {winner}</p> : <p>Next Player: {allow}</p>}
    </div>
  );
}

function Btn({ value, click }) {
  return (
    <button
      className="border h-12 w-12 grid place-items-center"
      onClick={click}
    >
      {value}
    </button>
  );
}

function calculateWinner(v) {
  const checks = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < checks.length; index++) {
    const [a, b, c] = checks[index];

    if (v[a] && v[a] === v[b] && v[a] === v[c]) return v[a];
  }

  return null;
}

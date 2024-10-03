import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h2>useCounter:</h2>

      <div>
        <h4>{counter}</h4>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => increment(1)}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => decrement(1)}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => reset()}
        >
          Reset
        </button>
        <hr />
      </div>
    </>
  );
};

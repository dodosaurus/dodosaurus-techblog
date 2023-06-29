import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button class="bg-red-600 p-5 rounded-xl shadow-md" onClick={() => setCount(count() + 1)}>
      Clicks: <b>{count()}</b>
    </button>
  );
}

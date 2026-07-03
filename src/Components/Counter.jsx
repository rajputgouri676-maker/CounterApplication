import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div class="min-h-screen  p-5   flex-col  bg-slate-100">
      <div class=" bg-slate-100 w-md mt-20 m-auto shadow-2xl shadow-black rounded-2xl p-8">
        <br />
        <h1 class=" p-5 bg-slate-800  text-white rounded-xl text-4xl  w-sm text-center mt-5 m-auto shadow-lg shadow-slate-800">
          Counter Application
        </h1>
        <br />
        <br />
        <p>
          <strong class="p-2 ml-30 text-shadow-sky-300 text-4xl text-slate-800 font-bold">
            Count:
          </strong>

          {count}
          <br />
          <br />
        </p>
        <button
          onClick={() => setCount(count + 1)}
          class="    text-white rounded-xl p-4 bg-blue-600 shadow-xl ml-7 w-xs hover:bg-blue-800 py-3  text-base font-semibold space-y-4"
        >
          {" "}
          Increament
        </button>
        <br />
        <br />

        <button
          onClick={() => setCount(count - 1)}
          class="bg-blue-600 text-white gap-30 rounded-xl p-2 ml-7 w-xs drop-shadow-xl hover:bg-blue-800 py-3 text-base font-semibold space-y-4"
        >
          Decreament
        </button>
        <br />
        <br />
        <button
          onClick={() => setCount(0)}
          class="bg-gray-600 text-white rounded-xl p-3 w-30 ml-30 hover:bg-gray-700 mb-2 text-base font-semibold space-y-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter;

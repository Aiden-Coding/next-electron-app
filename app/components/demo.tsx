"use client";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { increment } from "@/store/counterSlice";
export default function Demo() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const [latestCount, setLatestCount] = useState(count);
  useEffect(() => {
    setLatestCount(count);
  }, [count]);
  function handleCountIncrement(event: any): void {
    console.log("old count:", latestCount);
    dispatch(increment());

    console.log("New count:", latestCount);
    console.log("New count:", latestCount + 1); // 这里打印的是更新后的值
  }

  return (
    <div>
      <div>
        <div>Count: {count}</div>
        <Button onClick={handleCountIncrement}>Increment</Button>
      </div>
    </div>
  );
}

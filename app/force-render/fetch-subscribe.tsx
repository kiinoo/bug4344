import { useEffect } from "react"
import { EventEmitter } from "stream";

function fetch(url: string, subscribe: (fn: () => void) => () => void) {
  let res = false;
  const unsubscribe = subscribe(onAbort);

  while (true) {
    if (res) break
  }
  function onAbort() {
    res = true
    unsubscribe()
  }
}

function AbortController() {
  const listeners: Array<() => void> = [];
  // 模拟一个订阅-取消订阅机制
  const subscribe = function (onAbort: () => void): () => void {
    listeners.push(onAbort);
    return () => {
      listeners.splice(listeners.indexOf(onAbort), 1);
    }
  }

  function abort() {
    // 通知外部
    listeners.forEach((listener) => listener());
  }
  return {
    subscribe,
    abort,
  }
}

function test() {
  const controller = AbortController();
  fetch('http://example.com', controller.subscribe);
  setTimeout(() => {
    controller.abort();
  }, 1000);
}

import { useEffect } from "react"
import { EventEmitter } from "stream";

function fetch(url: string, signal: EventEmitter) {
  let res = false;
  signal.on('change', onAbort);
  
  while (true) {
    if (res) break
  }
  function onAbort() {
    res = true
    signal.off('change', onAbort);
  }
}

function AbortController() {
  const signal = new EventEmitter();

  function abort() {
    signal.emit('change');
  }
  return {
    signal,
    abort,
  }
}

function test () {
  const controller = AbortController();
  fetch('http://example.com', controller.signal);
  setTimeout(() => {
    controller.abort();
  }, 1000);
}
function test1 () {
  const signal = new EventEmitter();
  fetch('http://example.com', signal);
  setTimeout(() => {
    signal.emit('change');
  }, 1000);
}
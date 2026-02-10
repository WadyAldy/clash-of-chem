import { writable } from "svelte/store";
import { io } from "socket.io-client";

export const socket = writable(null);

export function initSocket(username) {
  const s = io("https://<YOUR-RENDER-APP>.onrender.com", {
    transports: ["websocket"],
    auth: {
      username
    }
  });

  socket.set(s);

  return s;
}

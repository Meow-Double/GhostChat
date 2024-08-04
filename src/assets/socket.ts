import io from 'socket.io-client';

const socket = io('https://ghostchat-server.onrender.com');

export default socket;

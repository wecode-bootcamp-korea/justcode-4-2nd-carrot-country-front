import { io } from 'socket.io-client';
import { SERVER_PORT } from 'config';

const socket = io.connect(SERVER_PORT);

const handleCreateRoom = (userId, productId, callback) => {
  socket.emit('create_room', userId, productId, callback);
};

const handleNewText = (userId, roomId, text, callback) => {
  socket.emit('new_text', userId, roomId, text, callback);
};

const handleEnterRoom = (roomId, callback) => {
  socket.emit('enter_room', roomId, callback);
};

export { socket, handleCreateRoom, handleNewText, handleEnterRoom };

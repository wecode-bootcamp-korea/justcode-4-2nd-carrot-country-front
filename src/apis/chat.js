import { SERVER_PORT } from 'config';

async function getChatRooms(userId) {
  return await fetch(`${SERVER_PORT}/chats?userId=${userId}`)
    .then(res => res.json())
    .then(data => data);
}

async function getChats(roomId) {
  return await fetch(`${SERVER_PORT}/chats/${roomId}`)
    .then(res => res.json())
    .then(data => data);
}

export { getChatRooms, getChats };

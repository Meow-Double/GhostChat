import { useEffect, useState } from 'react';
import styles from './ChatPage.module.css';
import { ChatBlock, UserCard } from './components';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addChat, fetchGetChats, selectChats } from '@/store/slices/chatsSlice/chatSlice';
import { fetchGetChatUsers, selectMessages } from '@/store/slices/messagesSlice/messagesSlice';
import socket from '@/assets/socket';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '@/components';

export const ChatPage = () => {
  const [activeUserId, setActiveUserId] = useState<null | string>(null);
  // const [activeChatId, setActiveChatId] = useState<null | string>(null);

  const { chats } = useAppSelector(selectChats);
  const { messages } = useAppSelector(selectMessages);
  const userId = useAppSelector((state) => state.user.id);
  const dispatch = useAppDispatch();
  const token = window.localStorage.getItem('token') ?? '';
  const tokenParse = JSON.parse(token);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchGetChats(tokenParse));
  }, []);

  useEffect(() => {
    socket.on('CHAT:CREATE', (data) => {
      dispatch(addChat(data));
    });
  }, []);

  useEffect(() => {
    if (id) {
      setActiveUserId(id);
    }
  }, []);

  const openChat = (chatId: string) => {
    // setActiveChatId(chatId);
    dispatch(fetchGetChatUsers(chatId));
    setActiveUserId(chatId);
    navigate(`/chat/${chatId}`);

    socket.emit('CHAT:JOIN', { chatId });
  };

  return (
    <div className={styles.inner}>
      {id ? (
        <ChatBlock
          messages={messages}
          userId={userId}
          dispatch={dispatch}
          chatId={activeUserId}
        />
      ) : (
       <Typography className={styles.chat_text} tag='h3' variant='title24_bold'>Выберите чат 💬</Typography>
      )}

      <ul className={styles.menu}>
        {chats.map((chat) => (
          <UserCard
            key={chat.chatId}
            {...chat}
            className={clsx(activeUserId === chat.chatId && styles.active_user)}
            onClick={() => openChat(chat.chatId)}
          />
        ))}
      </ul>
    </div>
  );
};

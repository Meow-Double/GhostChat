import { Button, Input } from '@/shared';
import styles from './ChatBlock.module.css';
import clsx from 'clsx';
import store from '@/store/store';
import { setMessages } from '@/store/slices/messagesSlice/messagesSlice';
import { useEffect, useRef, useState } from 'react';
import socket from '@/assets/socket';
import EmojiPicker from 'emoji-picker-react';
import EmojiSvg from "@/assets/svg/emoji.svg";

interface ChatBlockParams {
  messages: GetChatMessages;
  userId: string;
  chatId: string | null;
  dispatch: typeof store.dispatch;
}
export const ChatBlock = ({ messages, userId, dispatch, chatId }: ChatBlockParams) => {
  const [isOpen, setOpen] = useState(false);

  const [messageText, setMessageText] = useState('');
  const blockRef = useRef(null);

  useEffect(() => {
    socket.on('CHAT:ADD_MESSAGE', (data) => {
      dispatch(setMessages({ ...data }));
    });
    // console.log();
  }, []);

  const sendMessage = () => {
    // const messageParams = {
    //   chatId: chatId ? chatId : '',
    //   sendId: userId,
    //   message: messageText
    // };

    socket.emit('CHAT:ADD_MESSAGE', { chatId, sendId: userId, message: messageText });
    dispatch(setMessages({ message: messageText, sendId: userId }));
    setMessageText('');
  };

  const onEmojiClick = ({ emoji }: any) => setMessageText(`${messageText} ${emoji}`);

  return (
    <div className={styles.inner}>
      <ul className={styles.chat} ref={blockRef}>
        {messages.map((message, index) =>
          userId === message.sendId ? (
            <li key={message.message + index} className={clsx(styles.message, styles.me)}>
              {message.message}
            </li>
          ) : (
            <li key={message.message + index} className={clsx(styles.message)}>
              {message.message}
            </li>
          )
        )}
      </ul>
      <div className={styles.send_block}>
        <Input
          className={styles.input}
          placeholder='Введите сообщение...'
          variant='primary'
          component='input'
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          tabIndex={1}
          role='button'
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <div className={styles.emoji}>
          <img className={styles.emoji_icon} src={EmojiSvg} alt='emoji' onClick={() => setOpen((prev) => !prev)} />

          {isOpen && (
            <div className={styles.emojies}>
              <EmojiPicker className={styles.picker} onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>
        <Button variant='primary' onClick={sendMessage}>
          Отправить
        </Button>
      </div>
    </div>
  );
};

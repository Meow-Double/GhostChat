import styles from './ChatPage.module.css';

const users = ['user1', 'user2', 'user3'];

export const ChatPage = () => {
  return (
    <div className='inner'>
      <ul className={styles.menu}>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

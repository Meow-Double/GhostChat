import { FriendCard, Typography } from '@/components';
import { Button, Input } from '@/shared';
import styles from './FriendsPage.module.css';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchUsers } from '@/store/slices/usersSlice/usersSlice';
import { userSelect } from '@/store/slices/userSlice';

export const FriendsPage = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(userSelect);
  const { users } = useAppSelector((state) => state.users);

  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(fetchUsers({ token: token ?? '' }));
  }, []);

  const onSearchFriens = () => {
    dispatch(fetchUsers({ token: token ?? '', params: { title: value } }));
  };

  return (
    <div>
      <Typography className={styles.title} tag='h2' variant='title24_bold'>
        Найди друга!
      </Typography>
      <div className={styles.search}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant='primary'
          component='input'
          placeholder='Введите имя'
        />
        <Button variant='primary' onClick={onSearchFriens}>
          Найти
        </Button>
      </div>
      <ul className={styles.people}>
        {users.map((user: GetUser) => (
          <FriendCard key={user._id} {...user} />
        ))}
      </ul>
    </div>
  );
};

import { Typography } from '@/components';

import styles from './HomePage.module.css';
import { useAppSelector } from '@/store/hooks';
import { userSelect } from '@/store/slices/userSlice';

export const HomePage = () => {

  const user = useAppSelector(userSelect)
  return (
    <div>
      <div className={styles.profile_info}>
        <img
          className={styles.profile_avatarka}
          src={user.avatarUrl}
          alt='avatarka'
        />
        <div className={styles.info_data}>
          <Typography tag='h2' variant='title24_bold'>
            {user.name}
          </Typography>
          <Typography className={styles.email} tag='h4' variant='title16_bold'>
            {user.email}
          </Typography>
        </div>
      </div>
    </div>
  );
};

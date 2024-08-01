import { Typography } from '@/components';

import styles from './HomePage.module.css';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { userSelect } from '@/store/slices/userSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUser } from '@/store/slices/profileSlice/profileSlice';
import { AnotherProfile } from './components/AnotherProfile/AnotherProfile';

export const HomePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const meProfileData = useAppSelector(userSelect);
  const { user: userProfileData } = useAppSelector((state) => state.profile);

  useEffect(() => {
    if (id && id !== meProfileData.id) {
      dispatch(fetchUser(id));
    }
  }, [id]);

  return (
    <div>
      {id === meProfileData.id ? (
        <div className={styles.profile_info}>
          <img className={styles.profile_avatarka} src={meProfileData.avatarUrl} alt='avatarka' />
          <div className={styles.info_data}>
            <Typography tag='h2' variant='title24_bold'>
              {meProfileData.name}
            </Typography>
            <Typography className={styles.email} tag='h4' variant='title16_bold'>
              {meProfileData.email}
            </Typography>
          </div>
        </div>
      ) : (
        <AnotherProfile {...userProfileData} />
      )}
    </div>
  );
};

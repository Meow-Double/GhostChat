import { Typography } from '@/components';

import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div>
      <div className={styles.profile_info}>
        <img
          className={styles.profile_avatarka}
          src='https://avatars.dzeninfra.ru/get-zen_doc/3963198/pub_5f459a20399c585d21b14752_5f459db39017592ff324e667/scale_1200'
          alt='avatarka'
        />
        <div className={styles.info_data}>
          <Typography tag='h2' variant='title24_bold'>
            User1
          </Typography>
          <Typography className={styles.email} tag='h4' variant='title16_bold'>
            User1@mail.ru
          </Typography>
        </div>
      </div>
    </div>
  );
};

import { Typography } from '@/components';

import styles from './Navbar.module.css';

export const Navbar = () => {
  const onExit = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <nav className={styles.wrapper}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Typography tag='h2' variant='title24_bold'>
              Ghost
            </Typography>
            <Typography className={styles.title_accent} tag='h2' variant='title24_bold'>
              Chat
            </Typography>
          </div>
          <div className={styles.profile_info}>
            <Typography className={styles.title_accent} tag='h4' variant='title20_bold'>
              User1
            </Typography>
            <img
              className={styles.profile_img}
              src='https://avatars.dzeninfra.ru/get-zen_doc/3963198/pub_5f459a20399c585d21b14752_5f459db39017592ff324e667/scale_1200'
              alt='avatarka'
            />
          </div>
          <button onClick={onExit}>exit</button>
        </div>
      </div>
    </nav>
  );
};



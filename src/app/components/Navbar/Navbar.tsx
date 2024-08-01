import { Typography } from '@/components';

import styles from './Navbar.module.css';
import { Button } from '@/shared';
import { useAppSelector } from '@/store/hooks';
import { userSelect } from '@/store/slices/userSlice';
import ExitSvg from '@/assets/svg/exit.svg';

export const Navbar = () => {
  const user = useAppSelector(userSelect);

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
            <div className={styles.profile_info}>
              <Typography className={styles.title_accent} tag='h4' variant='title20_bold'>
                {user.name}
              </Typography>
              <img className={styles.profile_img} src={user.avatarUrl} alt='avatarka' />
            </div>
            <Button variant='outlined' onClick={onExit}>
              <img className={styles.exit} src={ExitSvg} alt='exit' />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

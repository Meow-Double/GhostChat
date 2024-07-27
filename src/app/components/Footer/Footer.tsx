import { Typography } from '@/components';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className='container'>
        <div className={styles.inner}>
          <Typography tag='h2' variant='paragraph16_regular'>
            <a href='https://github.com/Meow-Double'>© Made by Meow-double 2024</a>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

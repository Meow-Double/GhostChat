import { Typography } from '@/components';
import styles from '../../HomePage.module.css';

interface AnotherProfileProps {
  name?: string;
  avatarUrl?: string;
}

export const AnotherProfile = ({ name, avatarUrl }: AnotherProfileProps) => {
  return (
    <div className={styles.profile_info}>
      <img className={styles.profile_avatarka} src={avatarUrl} alt='avatarka' />
      <div className={styles.info_data}>
        <Typography tag='h2' variant='title24_bold'>
          {name}
        </Typography>
      </div>
    </div>
  );
};

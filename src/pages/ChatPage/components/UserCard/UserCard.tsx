import { Typography } from '@/components';
import styles from './UserCard.module.css';
import clsx from 'clsx';
import { ComponentProps } from 'react';

type UserCardProps = ComponentProps<'li'> & GetChat;

export const UserCard = ({ avatarUrl, name, className, onClick }: UserCardProps) => {

  return (
    <li className={clsx(styles.user, className)} onClick={onClick}>
      <img className={styles.img} src={avatarUrl} alt='avatarka' />
      <Typography tag='h4' variant='paragraph16_regular'>
        {name}
      </Typography>
    </li>
  );
};

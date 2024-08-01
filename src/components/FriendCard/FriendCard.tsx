import { Button } from '@/shared';
import styles from './FriendCard.module.css';
import { Typography } from '@/components';
import MessageSvg from '@/assets/svg/message.svg';
import AddFriendSvg from '@/assets/svg/addFriend.svg';
import { useNavigate } from 'react-router-dom';

interface FriendCardProps {
  _id: string;
  avatarUrl: string;
  name: string;
}

export const FriendCard = ({ _id, avatarUrl, name }: FriendCardProps) => {
  const navigate = useNavigate();

  const onOpenProfile = () => {
    navigate(`/profile/${_id}`);
  };

  const openChat = () => {
    
  }

  return (
    <li className={styles.person}>
      <div className={styles.info}>
        <img className={styles.img} src={avatarUrl} alt='avatarka' />
        <Typography
          className={styles.title}
          tag='h3'
          variant='title20_bold'
          onClick={onOpenProfile}
        >
          {name}
        </Typography>
      </div>
      <div className={styles.btn_block}>
        <Button className={styles.btn} variant='outlined' onClick={openChat}>
          <img className={styles.icon} src={MessageSvg} alt='write message' />
        </Button>
        <Button className={styles.btn} variant='outlined'>
          <img className={styles.icon} src={AddFriendSvg} alt='add to friends' />
        </Button>
      </div>
    </li>
  );
};

import React, { useEffect } from 'react';
import clsx from 'clsx';

import { Typography } from '../Typography/Typography';

import styles from './AsideMenu.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { userSelect } from '@/store/slices/userSlice';

export const AsideMenu = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const navigate = useNavigate();
  const { id } = useAppSelector(userSelect);
  const location = useLocation().pathname;

  const menuItems = [
    { name: 'Profile', path: `/profile/${id}` },
    { name: 'Chat', path: '/chat' },
    { name: 'Friends', path: '/friends' },
    { name: 'News', path: '/news' }
  ];

  useEffect(() => {
    const containsMenuName = menuItems.find((item) =>
      location.toLowerCase().includes(item.name.toLowerCase())
    );

    const idx = menuItems.findIndex((item) => item.name === containsMenuName?.name);

    setActiveItem(idx);
  }, [location]);

  const onHandleItem = (index: number, path: string) => {
    setActiveItem(index);
    navigate(path);
  };

  return (
    <aside className={styles.aside}>
      <ul className={styles.menu}>
        {menuItems.map((menuItem, index) => (
          <li
            key={menuItem.name}
            className={styles.menu_item}
            onClick={() => onHandleItem(index, menuItem.path)}
          >
            <Typography
              className={clsx(activeItem === index && styles.active)}
              tag='h4'
              variant='title16_bold'
            >
              {menuItem.name}
            </Typography>
          </li>
        ))}
      </ul>
    </aside>
  );
};

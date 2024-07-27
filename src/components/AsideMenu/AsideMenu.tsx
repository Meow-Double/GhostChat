import React from 'react';
import clsx from 'clsx';

import { Typography } from '../Typography/Typography';

import styles from './AsideMenu.module.css';

const menuItems = ['Profile', 'Chats', 'Friends'];

export const AsideMenu = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  return (
    <aside className={styles.aside}>
      <ul className={styles.menu}>
        {menuItems.map((menuItem, index) => (
          <li key={menuItem} className={styles.menu_item} onClick={() => setActiveItem(index)}>
            <Typography
              className={clsx(activeItem === index && styles.active)}
              tag='h4'
              variant='title16_bold'
            >
              {menuItem}
            </Typography>
          </li>
        ))}
      </ul>
    </aside>
  );
};

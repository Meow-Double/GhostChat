import clsx from 'clsx';

import styles from './Typography.module.css';

type TypographyTag = 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TypographyParagraph = 'paragraph16_regular';

type TypographyTitle = 'title24_bold' | 'title20_bold' | 'title16_bold';

type TypographyVariant = TypographyTitle | TypographyParagraph;

type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  tag: TypographyTag;
  variant: TypographyVariant;
  children: React.ReactNode;
};

export const Typography = <Tag extends TypographyTag = 'div'>({
  tag = 'div',
  variant,
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;
  return (
    <Component className={clsx(styles.typography, styles[variant], className)} {...props}>
      {children}
    </Component>
  );
};

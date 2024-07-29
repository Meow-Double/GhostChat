import { Link } from 'react-router-dom';

import { Typography } from '@/components';
import { Button, Input } from '@/shared';

import styles from '../../styles/Auth.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from '../../constans/LoginSchema';
import { useAppDispatch } from '@/store/hooks/useAppDispatch';
import { fetchLogin } from '@/store/slices/userSlice/userSlice';

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur'
  });

  const onSubmit = (values: LoginSchema) => {
    dispatch(fetchLogin({ ...values }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}>
        <div className='container'>
          <div className={styles.inner}>
            <img
              className={styles.decor_img}
              src='https://moon.ly/uploads/nft/72cdf845-728b-4cb3-89f4-35524ec291d1.jpg'
              alt=''
            />
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.title}>
                <Typography tag='h3' variant='title20_bold'>
                  GhostChar
                </Typography>
                <Typography className={styles.title_acent} tag='h3' variant='title20_bold'>
                  - Login
                </Typography>
              </div>
              <Input
                variant='primary'
                component='input'
                placeholder='Введите email'
                type='email'
                {...register('email')}
                error={errors.email?.message}
              />
              <Input
                variant='primary'
                component='input'
                placeholder='Введите password'
                type='password'
                {...register('password')}
                error={errors.password?.message}
              />
              <Link to='/register' className={styles.link}>
                Sign In
              </Link>
              <Button variant='primary'>Login</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

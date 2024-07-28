import { Link } from 'react-router-dom';

import { Typography } from '@/components';
import { Button, Input } from '@/shared';

import styles from '../../styles/Auth.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, registerSchema } from '../../constans/RegisterSchema';
import { useAppDispatch } from '@/store/hooks/useAppDispatch';
import { fetchRegister } from '@/store/slices/userSlice/userSlice';

export const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur'
  });

  const onSubmit = (values: RegisterSchema) => {
    const { confirmPassword, ...data } = values;
    dispatch(fetchRegister(data));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}>
        <div className='container'>
          <div className={styles.inner}>
            <img
              className={styles.decor_img}
              src='https://nftcalendar.io/storage/uploads/events/2022/1/BHaUTSa5mwDpOo40gCAASl23VhwjOtG6PVEiFtFV.png'
              alt=''
            />
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.title}>
                <Typography tag='h3' variant='title20_bold'>
                  GhostChar
                </Typography>
                <Typography className={styles.title_acent} tag='h3' variant='title20_bold'>
                  - Sign In
                </Typography>
              </div>
              <Input
                variant='primary'
                component='input'
                placeholder='Введите name'
                type='text'
                {...register('name')}
                error={errors.name?.message}
              />
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
              <Input
                variant='primary'
                component='input'
                placeholder='Повторите password'
                type='password'
                {...register('confirmPassword')}
                error={errors.confirmPassword?.message}
              />
              <Link to='/login' className={styles.link}>
                login
              </Link>
              <Button variant='primary'>Login</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

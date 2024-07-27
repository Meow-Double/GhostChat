import { Link } from 'react-router-dom';

import { Typography } from '@/components';
import { Button, Input } from '@/shared';

import styles from '../../styles/Auth.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, registerSchema } from '../../constans/RegisterSchema';

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur'
  });

  const onSubmit = (values: RegisterSchema) => {
    alert(JSON.stringify(values));
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

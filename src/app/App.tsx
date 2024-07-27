import { Route, Routes } from 'react-router-dom';

import { ChatPage, HomePage, LoginPage, NotFound, RegisterPage } from '@/pages';

import { Layout } from './configs/Layout';
import { ROUTES } from './configs/routes';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={ROUTES.CHAT} element={<Layout />}>
        <Route index element={<ChatPage />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.NOTFOUND} element={<Layout />}>
        <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selector';
import { lazy } from 'react';
import { Loader } from './Loader/Loader';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hooks';
import { fetchContacts } from 'redux/operations';

export function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const HomePage = lazy(() => import('../pages/Home'));
  const RegisterPage = lazy(() => import('../pages/Register'));
  const LoginPage = lazy(() => import('../pages/Login'));
  // const TasksPage = lazy(() => import('../pages/Tasks'));

  // export const App = () => {
  //   const dispatch = useDispatch();
  //   const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isRefreshing ? (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        flexWrap: 'nowrap',
        alignContent: 'normal',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <h1>Phonebooks</h1>
      <ContactForm />
      <h2> Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  ) : (
    // <b>Refreshing user...</b>
    // <Suspense>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
}

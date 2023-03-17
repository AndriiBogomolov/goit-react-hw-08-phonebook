import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';

export function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
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
  );
}

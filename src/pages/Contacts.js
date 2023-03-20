import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';

import { Container } from '../components/App/App.styled';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
//import Filter from '../components/Filter/Filter';
import Section from '../components/Section/Section';
import { selectError, selectIsLoading } from 'redux/selector';

function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Section>
    </Container>
  );
}
export default Contacts;

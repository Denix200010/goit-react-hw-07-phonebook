import style from './app.module.css';

import { PhonebookList } from "./PhonebookList/PhonebookList";
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { FilterInput } from "./FilterForm/FilterInput";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, selectError, selectIsLoading } from "redux/selectors";
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(getContacts); 
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return <div className={style.container}>
    <h1>Phonebook</h1>
    <ContactsForm />
    <FilterInput/>
    <h2>Contacts</h2>
    {isLoading && !error && <b>Request in progress...</b>}
    {contacts.length > 0 && <PhonebookList/>}
  </div>
};

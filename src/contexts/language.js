import { createContext } from "react";

export const LanguageContext = createContext('');

export const languages = {
  UA: 'Українська',
  EN: 'English',
  PL: 'Polski'
};

export const translations = {
  UA: {
    main: 'Головна',
    home: 'На головну',
    contacts: 'Контакти',
    add: 'Додати',
    list: 'Список контактів',
    firstName: "Ім’я",
    lastName: 'Прізвище',
    phone: 'Телефон',
    actions: 'Дії',
    delete: 'Видалити',
    save: 'Зберегти',
    fillAll: 'Заповніть всі поля!',
    validation: {
      required: 'Це поле обов’язкове',
      min5: 'Мінімум 5 символів',
      phone: 'Телефон має починатися з 380 і містити 12 цифр',
      name: 'Ім’я не повинно містити цифр або символів',
    },
  },
  EN: {
    main: 'Main',
    home: 'Go Home',
    contacts: 'Contacts',
    add: 'Add',
    list: 'Contact List',
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone',
    actions: 'Actions',
    delete: 'Delete',
    save: 'Save',
    fillAll: 'Please fill all fields!',
    validation: {
      required: 'This field is required',
      min5: 'Minimum 5 characters',
      phone: 'Phone must start with 380 and contain 12 digits',
      name: 'Name should not contain numbers or symbols',
    },
  },
  PL: {
    main: 'Strona główna',
    home: 'Do strony głównej',
    contacts: 'Kontakty',
    add: 'Dodaj',
    list: 'Lista kontaktów',
    firstName: 'Imię',
    lastName: 'Nazwisko',
    phone: 'Telefon',
    actions: 'Akcje',
    delete: 'Usuń',
    save: 'Zapisz',
    fillAll: 'Wypełnij wszystkie pola!',
    validation: {
      required: 'To pole jest wymagane',
      min5: 'Minimum 5 znaki',
      phone: 'Telefon musi zaczynać się od 380 i mieć 12 cyfr',
      name: 'Imię nie może zawierać cyfr ani znaków',
    },
  },
};
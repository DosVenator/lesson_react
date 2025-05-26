import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router';
import { LanguageContext, translations } from './contexts/language';

export default function AddContactForm({ onAdd }) {
  const { value: language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const t = translations[language];

  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЇїІіЄєҐґ'’\- ]+$/, translations[language].validation.name)
      .min(5, t.validation.min5)
      .required(t.validation.required),
    lastName: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЇїІіЄєҐґ'’\- ]+$/, translations[language].validation.name)
      .min(5, t.validation.min5)
      .required(t.validation.required),
    phone: Yup.string()
      .matches(/^380\d{9}$/, t.validation.phone)
      .required(t.validation.required),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: Date.now(),
      ...values,
    };
    onAdd(newContact);
    resetForm();
    navigate('/contact');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <Field name="firstName" placeholder={t.firstName} />
          <ErrorMessage name="firstName" component="div" className="field-error" />
        </div>
        <div>
          <Field name="lastName" placeholder={t.lastName} />
          <ErrorMessage name="lastName" component="div" className="field-error" />
        </div>
        <div>
          <Field name="phone" placeholder={t.phone} />
          <ErrorMessage name="phone" component="div" className="field-error" />
        </div>
        <button type="submit">{t.save}</button>
        <Link to="/main">{t.home}</Link>
      </Form>
    </Formik>
  );
}
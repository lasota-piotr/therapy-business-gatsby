import React, { useState } from 'react'
import styled from 'styled-components'
import media from '../styleUtils/media'
import Button from './Button'
import Modal from './Modal'
import ContactFormRecaptcha from './ContactFormRecaptcha'
import useForm from '../hooks/useForm'

const encode = data =>
  Object.entries(data)
    .map(
      ([key, value]) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(value)
    )
    .join('&')

const initialValues = {
  name: '',
  email: '',
  bot: '',
  message: '',
}

const ContactForm = () => {
  const [recaptchaResponse, setRecaptchaResponse] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleSuccess = ({ setValues }) => {
    setValues(initialValues)
    setShowModal(true)
  }

  const onSubmitHandle = ({ values, setValues }) => {
    if (!recaptchaResponse) {
      return
    }

    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        'g-recaptcha-response': recaptchaResponse,
        ...values,
      }),
    })
      .then(() => handleSuccess({ values, setValues }))
      // eslint-disable-next-line no-console
      .catch(error => console.error(error.message))
  }
  const { onChange, onSubmit, values } = useForm({
    onSubmitHandle,
    initialValues,
  })

  return (
    <>
      <ContactFormContainer
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot"
        data-netlify-recaptcha="true"
        onSubmit={onSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <input name="bot" value={values.bot} onChange={onChange} />
        </p>
        <ContactFormLabel css={{ gridArea: 'name' }}>
          Imię:
          <Input
            placeholder="Wpisz swoje imię"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={onChange}
          />
        </ContactFormLabel>
        <ContactFormLabel css={{ gridArea: 'email' }}>
          Adres email:
          <Input
            type="email"
            placeholder="Wpisz swój adres email"
            name="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={onChange}
          />
        </ContactFormLabel>

        <ContactFormLabelTextArea css={{ gridArea: 'textarea' }}>
          Wiadomość:
          <Input
            as="textarea"
            rows={9}
            placeholder="Treść widomości"
            name="message"
            required
            value={values.message}
            onChange={onChange}
          />
        </ContactFormLabelTextArea>
        <ContactFormRecaptcha
          css={{ gridArea: 'recaptcha' }}
          isChecked={!!recaptchaResponse}
          onChange={value => setRecaptchaResponse(value)}
        />
        <ContactFormSubmit
          type="submit"
          value="Wyślij wiadomość"
          css={{ gridArea: 'submit' }}
        >
          Wyślij wiadomość
        </ContactFormSubmit>
        {showModal && (
          <Modal showModal={showModal} closeHandle={() => setShowModal(false)}>
            Dziękuję za wiadomość. Postaram się odpowiedzieć najszybciej jak to
            możliwe.
          </Modal>
        )}
      </ContactFormContainer>
    </>
  )
}

const ContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.7;
`

const ContactFormLabelTextArea = styled(ContactFormLabel)`
  height: 100%;
`
const ContactFormContainer = styled.form`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'name email'
    'textarea textarea'
    'recaptcha recaptcha'
    'submit .';
  grid-auto-rows: max-content;
  ${media.tablet`
    grid-template-columns: 1fr;
    grid-template-areas: 
    'name'
    'email'
    'textarea'
    'recaptcha'
    'submit';
  `};
`

const ContactFormSubmit = styled(Button)`
  justify-self: start;
`

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.colors.gray};
  width: 100%;
  font-size: 0.8rem;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue};
  }
`

export default ContactForm

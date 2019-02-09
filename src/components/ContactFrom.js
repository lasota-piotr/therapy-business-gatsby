import React, { useState } from 'react'
import styled from 'styled-components'
import media from '../styleUtils/media'
import Button from './Button'
import Modal from './Modal'

const encode = data =>
  Object.entries(data)
    .map(
      ([key, value]) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(value)
    )
    .join('&')

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [bot, setBot] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSuccess = () => {
    setName('')
    setEmail('')
    setMessage('')
    setShowModal(true)
  }

  const handleSubmit = event => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, bot, message }),
    })
      .then(handleSuccess)
      // eslint-disable-next-line no-console
      .catch(error => console.error(error.message))
    event.preventDefault()
  }

  return (
    <>
      <ContactFormContainer
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <input
            name="bot"
            value={bot}
            onChange={event => setBot(event.target.value)}
          />
        </p>
        <ContactFormLabel>
          Imię:
          <Input
            placeholder="Wpisz swoje imię"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </ContactFormLabel>
        <ContactFormLabel>
          Adres email:
          <Input
            type="email"
            placeholder="Wpisz swój adres email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </ContactFormLabel>
        <Input type="hidden" name="_language" value="pl" />

        <ContactFormLabelTextArea>
          Wiadomość:
          <Input
            as="textarea"
            rows={9}
            placeholder="Treść widomości"
            name="message"
            required
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
        </ContactFormLabelTextArea>
        <div
          data-netlify-recaptcha="true"
          css={`
            grid-column: 1/-1;
          `}
        />
        <ContactFormSubmit type="submit" value="Wyślij wiadomość">
          Wyślij wiadomość
        </ContactFormSubmit>
        {showModal && (
          <Modal showModal={showModal} closeHandle={() => setShowModal(false)}>
            Twoja wiadomość została wysłana poprawnie
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

const ContactFormContainer = styled.form`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: max-content;
  ${media.tablet`
    grid-template-columns: 1fr;
  `};
`
const ContactFormLabelTextArea = styled(ContactFormLabel)`
  grid-column: 1 / -1;
  height: 100%;
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

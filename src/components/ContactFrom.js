import React from 'react'
import { Input, Label, Textarea } from 'rebass'
import styled from 'styled-components'
import media from '../styleUtils/media'
import Button from './Button'

const ContactForm = () => {
  return (
    <ContactFormContainer
      action="https://formspree.io/ilona.lasota@twoj-terapeuta.pl"
      method="POST"
    >
      <ContactFormLabel>
        Imię:
        <Input
          placeholder="Wpisz swoje imię"
          name="name"
          autoComplete="name"
          required
        />
      </ContactFormLabel>
      <ContactFormLabel>
        Adres email:
        <Input
          type="email"
          placeholder="Wpisz swój adres email"
          name="_replyto"
          autoComplete="email"
          required
        />
      </ContactFormLabel>
      <input type="hidden" name="_language" value="pl" />
      <input
        type="hidden"
        name="_subject"
        value="Nowa wiadomość - twoj-terapeuta.pl"
      />
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <ContactFormLabelTextArea>
        Wiadomość:
        <Textarea
          rows={9}
          placeholder="Treść widomości"
          name="message"
          required
        />
      </ContactFormLabelTextArea>
      <ContactFormSubmit type="submit" value="Wyślij wiadomość">
        Wyślij wiadomość
      </ContactFormSubmit>
    </ContactFormContainer>
  )
}

const ContactFormLabel = styled(Label)`
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

export default ContactForm

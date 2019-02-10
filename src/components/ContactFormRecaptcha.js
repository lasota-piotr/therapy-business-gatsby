import React from 'react'
import Recaptcha from 'react-google-recaptcha'
import media from '../styleUtils/media'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

const ContactFormRecaptcha = ({ className, isChecked, ...restProps }) => {
  return (
    <div
      className={className}
      css={`
        position: relative;
      `}
    >
      <div
        css={`
          background-color: white;
          min-height: 78px;
          ${media.phone`
            margin-left: -${({ theme }) => theme.containerPaddingHorizontal};
            margin-right: -${({ theme }) => theme.containerPaddingHorizontal};
            display: flex;
            justify-content: center;
          `};
        `}
      >
        <Recaptcha sitekey={RECAPTCHA_KEY} {...restProps} />
      </div>
      <input
        type="checkbox"
        required
        aria-hidden="true"
        checked={!!isChecked}
        onChange={() => {}}
        css={`
          position: absolute;
          bottom: 1.5rem;
          left: 1.25rem;
          z-index: -1;
        `}
      />
    </div>
  )
}

export default ContactFormRecaptcha

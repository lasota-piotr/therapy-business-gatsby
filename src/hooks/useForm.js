import React from 'react'

const useForm = ({ initialValues = {}, onSubmitHandle }) => {
  const [values, setValues] = React.useState(initialValues)

  const onChange = event => {
    event.persist()
    setValues(prevValues => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }))
  }

  const onSubmit = event => {
    if (typeof onSubmitHandle === 'function') {
      onSubmitHandle({ values, setValues })
    }
    if (event) {
      event.preventDefault()
    }
  }

  return {
    onChange,
    onSubmit,
    values,
  }
}

export default useForm

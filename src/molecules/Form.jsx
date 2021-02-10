import React from 'react'

import style from './Form.style'

const Form = () => {
  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <form className={style.Form} onSubmit={onSubmit}>
      <input className={style.input} type="text" placeholder="Name" />
      <input className={style.input} type="email" placeholder="Email" />
      <textarea
        className={style.textarea}
        placeholder="A short description of your project"
      />
      <button type="submit" className={style.submit}>
        Send
      </button>
    </form>
  )
}

export default Form

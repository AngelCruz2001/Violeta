import React, { useState } from 'react'
import { useForm } from './hooks/useForm'

export const App = () => {
  const [correct, setCorrect] = useState(false);
  const [formValues, handleInputChange, reset] = useForm({
    password: '',
  })
  const password = formValues.password;
  const [gif, setGif] = useState("https://media0.giphy.com/media/13Ytgot8tO2pfa/giphy.gif?cid=ecf05e47cvwkj1cg11eccc06f02xg6cvc4407zpb5j4mj4ap&rid=giphy.gif&ct=g")
  const [text, setText] = useState("¡Aquí esta tu regalo!")
  const handleClic = (e) => {
    e.preventDefault()
    if (password === "It's brutal out there".trim()) {
      setCorrect(true);
      setTimeout(() => {
        setText("Aquí estará mañana")
        setGif("https://media0.giphy.com/media/6qmOIwxEJnt96/giphy.gif?cid=ecf05e47vpezl7w79mp8a88x1eygie27t9vasy1sdtdxb4nj&rid=giphy.gif&ct=g");
      }, 8000);
    }
  }

  return (
    <>
      <div className="App">
        {!correct &&
          <div>
            <h1 className="animate__animated animate__fadeInLeft ">Hola Violeta...</h1>
            <p className="animate__animated animate__fadeInLeftBig " style={{ textAlign: "center" }}>Necesitas una contraseña</p>
            <div className="input-pass input-group mb-3"></div>
            <input
              className="form-control animate__animated animate__fadeInUpBig "
              value={password}
              onChange={handleInputChange} name="password"
              type="text"
              placeholder="¿Cúal será?" aria-label="Recipient's username"
              autoComplete="on"
              aria-describedby="button-addon2" />


            <div className="buttonContainer animate__animated animate__fadeInDownBig ">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClic}>Enviar</button>
            </div>
          </div>
        }
        {
          correct && <div className="giftCard animate__animated animate__fadeInDownBig">
            <div className="giftCard-content">
              <h1>{text}</h1>
            </div>
            <div className="gifCardIMG">
              <img src={gif} alt="giftCard" />
            </div>
          </div>
        }
      </div>


    </>



  )
}

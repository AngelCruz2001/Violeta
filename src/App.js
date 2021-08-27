import React, { useState } from 'react'
import { useForm } from './hooks/useForm'
import carRed from './res/carRed.jpeg';

export const App = () => {
  const [correct, setCorrect] = useState(false);
  const [formValues, handleInputChange] = useForm({
    password: '',
  })
  const password = formValues.password;
  const handleClic = (e) => {
    e.preventDefault()
    if (password === "28".trim()) {
      setCorrect(true);


    }
  }

  return (
    <div>
      <div className="App">
        {!correct &&
          <div>
            <h1 className="animate__animated animate__fadeInLeft ">Hola Violeta...</h1>
            <p className="animate__animated animate__fadeInLeftBig " style={{ textAlign: "center" }}>Ya no creo que sea la misma contraseña</p>
            <p className="animate__animated animate__fadeInLeftBig " style={{ textAlign: "center" }}>Lamentablemente solo tienes un intento esta vez</p>
            <p className="animate__animated animate__fadeInLeftBig " style={{ textAlign: "center" }}>Si tuvieras que elegir un numero entre el 0 y 5 millones ¿Cuál elegirías?</p>
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
            <img style={{maxWidth:"30%"}} src={carRed} alt="Carro de Diego" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Carro de Diego</p>

          </div>
        }
      </div>


    </div>



  )
}
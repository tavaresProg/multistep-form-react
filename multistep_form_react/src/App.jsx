/* eslint-disable react/jsx-key */
import './App.css'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';

//components
import Steps from './components/Steps';
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

//custom hook
import { useForm } from './hooks/useForm';
import { useState } from 'react';

const formTemplate = {
  name: '',
  email: '',
  review: '',
  comment: '',
}

function App() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useForm(formComponents);

  return (
    <div className="app">

      <header className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar o produto.</p>
      </header>

      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>

          <div className="inputs-container">
            {currentComponent}
          </div>


          <div className="actions">
            {!isFirstStep &&
              (<button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>voltar</span>
              </button>)
            }
            {!isLastStep ? (
              <button type='submit'>
                <span>avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'>
                <span>enviar</span>
                <FiSend />
              </button>
            )}
          </div>

        </form>

      </div>

    </div>
  )
}

export default App

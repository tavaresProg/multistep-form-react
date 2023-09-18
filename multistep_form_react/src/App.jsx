import './App.css'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

//components
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

//hook
import { useForm } from './hooks/useForm';

function App() {

  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <Thanks />
  ];

  const {currentStep, currentComponent } = useForm(formComponents);

  return (
    <div className="app">

      <header className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar o produto.</p>
      </header>

      <div className="form-container">
        <p>etapas</p>
        <form>

          <div className="inputs-container">
            {currentComponent}
          </div>


          <div className="actions">
            <button type='button'>
              <GrFormPrevious />
              <span>voltar</span>
            </button>

            <button type='submit'>
              <span>avançar</span>
              <GrFormNext />
            </button>
          </div>

        </form>

      </div>

    </div>
  )
}

export default App

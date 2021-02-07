import React from 'react'; 
function App() {

  const [questionPosition, setQuestionPosition] = React.useState(0);  
  const [answers, setAnswers] = React.useState([]); 
  const [error, setError] = React.useState(null);
  const [markedAnswer, setMarkedAnswer] = React.useState(null);
  const questions = [
    {
      question: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      question: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      question: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      question: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

  const handleSubmit = (event) => 
  {
    event.preventDefault(); 
  
    if(!markedAnswer)
    {
      setError('Vocês precisa escolher uma resposta antes de avançar!'); 
    }
    else if(questionPosition < questions.length -1)
    {
      setQuestionPosition(questionPosition + 1); 
      setAnswers([...answers, markedAnswer ]);
      setMarkedAnswer(null);
      setError(null);
    }
    else if(questionPosition === questions.length -1)
    {
      setQuestionPosition(questionPosition + 1); 
      setAnswers([...answers, markedAnswer ]);
      setMarkedAnswer(null);
      setError(null);
      setQuestionPosition('done'); 
    }
  }
  const handleRightAnswers = () => 
  {
    let rightAnswers = 0; 
    for (let i= 0; i < questions.length; i++) {
        if(questions[i].resposta === answers[i])
            rightAnswers++; 
    }  
    return rightAnswers;
  }
  const handleRestart = () =>
  {
    setAnswers([]); 
    setQuestionPosition(0); 
  } 
  
  return (
    <>
    {questionPosition <= questions.length && 
    <form onSubmit={handleSubmit}>
      <fieldset style={{'marginBottom': '1rem' }}>
        <legend>{questions[questionPosition].question}</legend>
        
        {questions[questionPosition].options.map((options, index) =>
        {
          return(
              <label key={options}>
                {index === 0 &&
                 <input 
                  type="radio" 
                  value={options} 
                  onChange={({target}) => setMarkedAnswer(target.value)}
                  checked={markedAnswer === options}
                  required={true}
                  />
                  }
               {index > 0 &&
                 <input 
                  type="radio" 
                  value={options} 
                  onChange={({target}) => setMarkedAnswer(target.value)}
                  checked={markedAnswer === options}
                  />
                  }
              {options} 
              </label> 
          );
        })}
        {error && <small style={{color: 'red'}}> {error}</small>}
      </fieldset>
     {questionPosition < questions.length -1 ? <button>Avançar</button> : <button>Terminar</button>}
     
    </form>
  }
  {questionPosition === 'done' && (
    <p>Você acertou {handleRightAnswers()}  de {questions.length} <br/> <br/>
    <button onClick={handleRestart}>Responder Novamente</button>
    </p>
    
    )}
    </>
  );
}

export default App;

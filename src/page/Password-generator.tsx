import '../style/passwordegn.scss';
import {toast, Toaster}from 'react-hot-toast'
import { useState } from 'react';
import { getRandomChar, getSpecialChar } from '../components/Utilits';
import {useForm} from '../components/useForm'

function PasswordGen() {
const[values, setValues] = useForm({
    length:6,
    capital: true,
    small: true,
    number: false,
    symbol: false,
});
const[result, setResult] = useState('');
const fieldsArray = [
    {
      field: values.capital,
      getChar: () => getRandomChar(65, 90),
    },
    {
      field: values.small,
      getChar: () => getRandomChar(97, 122),
    },
    {
      field: values.number,
      getChar: () => getRandomChar(48, 57),
    },
    {
      field: values.symbol,
      getChar: () => getSpecialChar(),
    },
  ];
  const handleOnSubmit = (e:any) => {
    e.preventDefault();
    let generatedPassword = '';
    const checkedFields = fieldsArray.filter(({ field }) => field);

    for (let i = 0; i < values.length; i++) {
      const index = Math.floor(Math.random() * checkedFields.length);
      const letter = checkedFields[index]?.getChar();

      if (letter) {
        generatedPassword += letter;
      }
    }
    if (generatedPassword) {
      setResult(generatedPassword);
    } else {
        toast.error("Ошибка: выберите хоть один из пунков генерации паролей");
    }
  };


  return (
    
    <div>
    <form className="PasswordGen" onSubmit={handleOnSubmit}>
    <span className="subtitle">Пароль:</span>
      <div className="result">
        <input 
        className="resultIn" 
        type='text' 
        id='result' 
        placeholder="Миним. длина пароля 6" 
        readOnly 
        value={result}
        />
      </div>

      <div className="row">
        <span>Длина паролья:</span>
        <input 
        className="pwg-length" 
        type="number"  
        name='length' 
        min={6} 
        max={20} 
        value={values.length}
        onChange={setValues}
        />
      </div>
      
      <div className="row">
        <span>Прописные буквы:</span>
        <input 
        className="styled-checkbox" 
        id="capital"  
        type="checkbox"
        name='capital' 
        checked={values.capital}
        onChange={setValues}
        />
        <label htmlFor="capital" />
      </div>

      <div className="row">
        <span>Строчные буквы:</span>
        <input  
        className="styled-checkbox" 
        id="small"   
        name='small' 
        type="checkbox" 
        checked={values.small}
        onChange={setValues}
        />
        <label htmlFor="small" />
      </div>
      <div className="row">
        <span>Цифры:</span>
        <input 
        className="styled-checkbox" 
        id="number"  
        name='number'  
        type="checkbox" 
        checked={values.number}
        onChange={setValues}
        />
        <label htmlFor="number" />
      </div>
      <div className="row">
        <span>Символы:</span>
        <input 
        className="styled-checkbox" 
        id="symbol"  
        name='symbol' 
        type="checkbox" 
        checked={values.symbol}
        onChange={setValues}
        />
        <label htmlFor="symbol" />
      </div>
      <button type='submit'>Сгенерировать</button>
    </form>
    <Toaster position="top-center" reverseOrder={false}/>
    </div>
  );
}

export default PasswordGen;
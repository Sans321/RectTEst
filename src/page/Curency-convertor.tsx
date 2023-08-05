import React from 'react';
import { Block } from '../components/Block';
import '../style/currecy.scss'; 

function Curencyconvertor() {
  
  const apiUrl = `https://www.cbr-xml-daily.ru/latest.js`;
  const[fromCurrency, setFromCurrency] = React.useState<string>('USD');
  const[toCurrency, setToCurrency] = React.useState<string>('EUR');
  const[fromPrice, setFromPrice] = React.useState<number>(0);
  const[toPrice, setToPrice] = React.useState<number>(0);

  const ratesRef=React.useRef({});
  React.useEffect(()=>{
    fetch(apiUrl)
    .then(res=>res.json())
    .then((json)=>{
      ratesRef.current=json.rates;
    })
    .catch((error)=>{
      console.warn(error);
      alert('Не у далось получить данные');
    });
  })

  const onChangeFromPrice = (value:any) => {
    const price = value/ratesRef.current[fromCurrency];
    const result=Math.round((price*ratesRef.current[toCurrency]) * 100) / 100;
    setToPrice(result);
    setFromPrice(value);
  };
  const onChangeToPrice = (value:any) => {
    const result=Math.round(((ratesRef.current[fromCurrency]/ratesRef.current[toCurrency])*value)*100)/100;
    setFromPrice(result); 
  };

  React.useEffect(()=>{
    onChangeFromPrice(fromPrice);
  }, [fromCurrency,fromPrice])
  
  React.useEffect(()=>{
    onChangeToPrice(toPrice);
  }, [toCurrency,toPrice])

  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} onChangeValue={onChangeFromPrice} onChangeCurrency={setFromCurrency} />
      <Block value={toPrice} currency={toCurrency} onChangeValue={onChangeToPrice} onChangeCurrency={setToCurrency}/>
    </div>
  );
}

export default Curencyconvertor;
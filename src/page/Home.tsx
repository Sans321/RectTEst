import '../style/home.scss';
import { Link } from 'react-router-dom';
import gifquiz from '../assets/test.gif';
import gifList from '../assets/list.gif';
import gifPassword from '../assets/password.gif';


function Home() {
    return (
      
      <div className="Home"> 
      <h1 className='homeH1'>Главная страница</h1>
      <div className='from'>
      <div className="flex-container">
        <div className='mCountry'>
        <Link to="/counter" ><p>Счетчик</p></Link>
        <svg className='Svg' viewBox="-500 -500 1000 1000" width='100%' height='100%' preserveAspectRatio="xMidYMin slice">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="bl ur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -5" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
          </defs>
          <circle fill='hsla(0, 100%, 50%, 0.25)' cx="0" cy="0" r="300" />
          <g filter='url(#goo)'>
            <text x="0" y="150">10</text>
            <text x="0" y="150">9</text>
            <text x="0" y="150">8</text>
            <text x="0" y="150">7</text>
            <text x="0" y="150">6</text>
            <text x="0" y="150">5</text>
            <text x="0" y="150">4</text>
            <text x="0" y="150">3</text>
            <text x="0" y="150">2</text>
            <text x="0" y="150">1</text>
            <text x="0" y="150">GO</text>
          </g>
        </svg>
        </div>
        <div className='mModa'>
          <Link to="/modal" ><p>Модаль</p></Link>
          <div className="container">
              <div className="interior">
                <a className="btn" href="#open-modal">👋 Хай тыкай на меня</a>
              </div>
          </div>
          <div id="open-modal" className="modal-window">
          <div>
            <a href="#" title="Close" className="modal-close">X</a>
            <h1>Здраствуй</h1>
          <div>Модальное окно только для CSS, основанное на псевдоклассе :target. Надеюсь, вы найдете это полезным</div>
        </div>
        </div>
        </div>
        <div className='mQuiz'>
          <Link to="/quiz" ><p>Опрос</p></Link>
          <img src={gifquiz} className="gif" alt="gif" />
        </div>
      </div>
      <div className="flex-container2row">
        <div className='mList'>
          <Link to="/user" ><p>Список</p></Link>
          <img src={gifList} className="gif" alt="gif" />
        </div>
        <div className='mCurConv'>
        <Link to="/curencyconvertor" ><p>Конвертер<br/>валюты</p></Link>
        <div className="animation-container">
        <div className="y-axis-container">
        <div className="container">
        <div className="flash"></div>
        <div className="coin side">
          <div className="shine"></div>
        </div>
        <div className="side-coin"></div>
        <div className="coin">
        <div className="dai">
          <div className="inner-dai">
            <div className="inner-inner-dai"></div>
          </div>
          <div className="cutout"></div>
          <div className="dai-shadow"></div>
        </div>
          <div className="shine"></div>
        </div>
        </div>
        </div>
        <div className="shadow"></div>
        </div>
        </div>
        <div className='mPassworGen'>
        <Link to="/passwordgenerator"><p>Генератор<br/>пароля</p></Link>
        <img src={gifPassword} className="gif" alt="gif" />
      </div>
      </div>
      <Link to="/todo" ><p>Список дел</p></Link>      
      <Link to="/paperrock" ><p>Игра</p></Link>    
      </div>
      </div>
      
    );
  }
  
export default Home
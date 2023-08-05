import '../style/counter.scss';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <ul>
          <li><Link to="/counter" >Counter</Link></li>
          <li><Link to="/modal" >Modal</Link></li>
          <li><Link to="/quiz" >Quiz</Link></li>
          <li><Link to="/user" >List</Link></li>
          <li><Link to="/curencyconvertor" >Curency-Convertor</Link></li>
        </ul>
        
      </div>
    );
  }
  
export default Home
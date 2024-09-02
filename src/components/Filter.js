import logo from './logo.svg';
import './App.css';

function Filter({changeCategory}) {


  return (
    <div className="App">
        <ul>
          <li>
            <input
              onClick={changeCategory('Pavers & Slabs')}
              type='checkbox'>
                Pavers & Slabs
            </input>
          </li>
          <li>
            <input
              onClick={changeCategory('Permeable Pavements')}
              type='checkbox'>
              Permeable Pavements
            </input>
          </li>
          <li>
            <input
              onClick={changeCategory('Walls')}
              type='checkbox'>
              Walls
            </input>
          </li>
          <li>
            <input
              onClick={changeCategory('Steps')}
              type='checkbox'>
              Steps
            </input>
          </li>
          <li>
            <input
              onClick={changeCategory('Edgers')}
              type='checkbox'>
              Edgers
            </input>
          </li>
          <li>
            <input
              onClick={changeCategory('Caps')}
              type='checkbox'>
              Caps
            </input>
          </li>
          <li>
            <input
              onClick={changeCategory('Accessories')}
              type='checkbox'>
              Accessories
            </input>
          </li>
        </ul>
    </div>
  );
}

export default Filter;

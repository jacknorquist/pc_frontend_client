

function Filter({changeCategory}) {


  return (
    <div className="App">
        <ul>
          <li>
          <input
            onClick={() => changeCategory('Pavers & Slabs')}
            type="checkbox"
            id="paversSlabs"
          />
          <label htmlFor="pavers-slabs">Pavers & Slabs</label>
          </li>
          <li>
            <input
              onClick={() => changeCategory('Permeable Pavements')}
              type='checkbox'
              id="permeablePavements"
            />
            <label htmlFor="permeablePavements">Permeable Pavements</label>
          </li>
          <li>
            <input
              onClick={() => changeCategory('Walls')}
              type='checkbox'
              id="walls"
            />
            <label htmlFor="walls">Walls</label>
          </li>
          <li>
          <input
            onClick={() => changeCategory('Steps')}
            type="checkbox"
            id="steps"
          />
          <label htmlFor="steps">Steps</label>
        </li>
        <li>
          <input
            onClick={() => changeCategory('Edgers')}
            type="checkbox"
            id="edgers"
          />
          <label htmlFor="edgers">Edgers</label>
        </li>
        <li>
          <input
            onClick={() => changeCategory('Caps')}
            type="checkbox"
            id="caps"
          />
          <label htmlFor="caps">Caps</label>
        </li>
        <li>
          <input
            onClick={() => changeCategory('Accessories')}
            type="checkbox"
            id="accessories"
          />
          <label htmlFor="accessories">Accessories</label>
        </li>
        </ul>
    </div>
  );
}

export default Filter;

import { SetStateAction, useState } from 'react';

import Navbar from '../../components/navbar';
import homeStyles from '../../styles/Home.module.css';
import pageStyles from '../../styles/Page.module.css';
import newStyles from '../../styles/New.module.css';

export default function New() {

  const [numItems, setNumItems] = useState('');

  const onChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    console.log(numItems);
    setNumItems(event.target.value);
  };

  const listNum = () => {
    let list = [];
    for (let i = 0; i < Number(numItems); i++) {
      list.push(i);
    }
    return list;
  };

  const inputs = listNum().map(num =>
    (<li key={num.toString()}><input className={newStyles.input}
                                     type='text'
                                     placeholder='List items here'
                                     name={`list-${num}`} /></li>)
  );


  return (
    <div className={homeStyles.main}>
      <Navbar />
      <h1 className={homeStyles.title}>Create New Generator</h1>
      <p className={pageStyles.subtext}>Input number of lists you would like to generate from, and then values for each list separated by a comma</p>
      <input className={newStyles.inputMain}
             type='text'
             placeholder='How many lists of items?'
             name='numLists' value={numItems}
             onChange={onChange} />
      <ul className={newStyles.inputList}>{inputs}</ul>
      <button className={pageStyles.button}>Create</button>
    </div>

  )
    ;
}
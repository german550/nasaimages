import React, {useState, useEffect} from 'react';
import './App.css';

function App(){
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  // const [fact, setFact] = useState('')

  function getNasImage(){
    fetch('https://spaceimages.herokuapp.com')
          .then(response => response.json())
          .then(data => {setImage(data.hdurl); setText(data.description)});

    }

  //   function getCatFact(){
  //     fetch('http://localhost:3001/cats_facts')
  //           .then(response => response.json())
  //           .then(data => setFact(data.text))
  // }
  useEffect(()=>{
    getNasImage();
    // getCatFact()
  },[])
  //
  // const showImage = () =>
  // images.forEach(image => (
  //   <img src={image} alt="">
  // ))

  return (
    <div className="App">
      <img className="pic" src={image} alt=""/>
      <p>{text}</p>
    </div>
  );
}

export default App;

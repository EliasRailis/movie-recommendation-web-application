import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [inputMovieText, setInputMovieText] = useState("");
  const [inputYearText, setInputYearText] = useState("");
  const [inputDirectorsName, setInputDirectorsName] = useState("");
  const [inputDesrciption, setInputDescription] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [imageURL, setImageURL] = useState("");

  return (
    <div>
      <Form inputMovieText={inputMovieText}
            setInputMovieText={setInputMovieText}
            inputYearText={inputYearText}
            setInputYearText={setInputYearText}
            inputDirectorsName={inputDirectorsName}
            setInputDirectorsName={setInputDirectorsName}
            inputDesrciption={inputDesrciption}
            setInputDescription={setInputDescription} 
            inputCategory={inputCategory}
            setInputCategory={setInputCategory}
            imageURL={imageURL}
            setImageURL={setImageURL}/>
    </div>
  );
}

export default App;

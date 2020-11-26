import React from 'react';
import Logo from '../images/filmLogo.png';


const Form = (props) => {

    const inputMovieTextHandler = (e) => {
        // getting the input value for the movie name
        props.setInputMovieText(e.target.value);
    };

    const inputYearTextHandler = (e) => {
        // getting the input value of the year that was created
        props.setInputYearText(e.target.value);
    };

    const inputCategoryHandler = (e) => {
        // getting the category of the movie
        props.setInputCategory(e.target.value);
    };

    const inputDirectorsNameHandler = (e) => {
        // getting the directors name of the movie
        props.setInputDirectorsName(e.target.value);
    };

    const inputDescriptionHandler = (e) => {
        // getting the description of the movie
        props.setInputDescription(e.target.value);
    };

    const imageURLHandler = (e) => {
        // getting the image url of the movie
        props.setImageURL(e.target.value);
    };

    // the dropDownValues will hold all the values that will be displayed 
    // dynamicly in the <option/> element 
    const dropDownValues = [
        {value: 'Action', name: 'Action'},
        {value: 'Adventure', name: 'Adventure'},
        {value: 'Avant-garde / Experimental', name: 'Avant-garde / Experimental'},
        {value: 'Childrens / Family', name: 'Childrens / Family'},
        {value: 'Comedy', name: 'Comedy'},
        {value: 'Crime', name: 'Crime'},
        {value: 'Drama', name: 'Drama'},
        {value: 'Fantasy', name: 'Fantasy'},
        {value: 'Horror', name: 'Horror'},
        {value: 'Fiction', name: 'Fiction'},
        {value: 'Thriller', name: 'Thriller'},
    ];

    const submitMovieHandler = (e) => {
        e.preventDefault(); // will not allow to reload the page
        
        // making the post call to the backend api
        fetch("https://localhost:44301/api/movies", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({   // passing in the JSON object as the data
                'Name': props.inputMovieText,
                'Year': props.inputYearText,
                'Director': props.inputDirectorsName,
                'Description': props.inputDesrciption,
                'Category': props.inputCategory,
                'ImageURL': props.imageURL
            })
        }).then(data => data.json())
          .catch(err => console.log('Unable to add item. ' + err.message));

        props.setInputMovieText("");      // empty the input fileds for movie name
        props.setInputYearText("");       // year of creation
        props.setInputDirectorsName("");  // the director that created the movie
        props.setImageURL("");            // the image that will be displayed
        props.setInputDescription("");    // the description of the movie
        props.setInputCategory("-Select a category-"); // and the category
    }

    return (
        <form className="form-style">
            <h1 className="movie-info">Movie Info
                <img src={Logo} className="film-logo" alt="Film Logo"/>
            </h1>
            <input className="form-input" value={props.inputMovieText} onChange={inputMovieTextHandler} type="text" placeholder="Enter the movie name"></input><br/>
            <input className="form-input" value={props.inputYearText} onChange={inputYearTextHandler} type="text" placeholder="Enter the year created"></input><br/>
            <input className="form-input" value={props.inputDirectorsName} onChange={inputDirectorsNameHandler} type="text" placeholder="The directors name"></input>
            <input className="form-input" value={props.imageURL} onChange={imageURLHandler} type="text" placeholder="Image URL"></input>
            <textarea className="form-textarea" value={props.inputDesrciption} onChange={inputDescriptionHandler} placeholder="Enter description of movie..." type="text"></textarea>
            <div>
                <select className="category-select" value={props.inputCategory} onChange={inputCategoryHandler}>
                    <option value="">-Select a category-</option>
                    {dropDownValues.map((e) => {
                        return <option key={e.value} value={e.value}>{e.name}</option>;
                    })}
                </select>
            </div>
            <button className="submit-btn" type="submit" onClick={submitMovieHandler}>Submit Movie</button>
        </form>
    );
};

export default Form;
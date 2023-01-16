import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from "../data/questions.json"
import './QuesInfo.css'

const QuesInfo = () => {

    const { questions, setting } = data

    const [number, setNumber] = useState(0)

    const handlePreviousButton = () => {

        if (number === 0) {
            return alert("Button Disable")
        } else {
            setNumber(number - 1)
        }
    }

    const handleNextButton = () => {
        if (number === questions.length - 1) {
            return alert("Button Disable")
        } else {
            setNumber(number + 1)
        }

    }

    const display = questions[number]

    return (
        <div>
            <h1 className='comp-center '>{setting.title}</h1>
            <div className='container'>
                <div>
                    {
                        questions[number].question_type === 1 &&
                        <>
                            <p className='que-mqrgin'>Question {questions[number].question_type}</p>
                            {

                                <h3 className='que-mqrgin'>{questions[number].question_text}</h3>
                            }
                            {
                                display?.choices?.map(choice => <> <br />
                                    <p className='input'> <input type="radio" name="form" id={choice.choice_text} value={choice.id} /> {choice.choice_text}</p>

                                </>)
                            }
                        </>
                    }

                    {
                        questions[number].question_type === 2 &&
                        <>
                            <p className='que-mqrgin'>Question {questions[number].question_type}</p>
                            {
                                <h3 className='que-mqrgin'>{questions[number].question_text}</h3>
                            }
                            <br /><select name="" id="">
                                {
                                    display?.choices?.map(choice =>
                                        <option className='drop-down' value={choice.id}><span className='drop-down'>{choice.choice_text}</span></option>
                                    )
                                }
                            </select>
                        </>
                    }

                    {
                        questions[number].question_type === 3 &&
                        <>
                            <p className='que-mqrgin'>Question {questions[number].question_type}</p>
                            {
                                <h3 className='que-mqrgin'>{questions[number].question_text}</h3>
                            }
                            {
                                display?.choices?.map(choice => <> <br />

                                    <p className='input'> <input type="checkbox" name="form" id={choice.choice_text} value={choice.id} />  {choice.choice_text}</p>
                                </>)
                            }
                        </>
                    }

                    {
                        questions[number].question_type === 4 &&
                        <>
                            <p className='que-mqrgin'>Question {questions[number].question_type}</p>
                            {
                                <h3 className='que-mqrgin'>{questions[number].question_text}</h3>
                            } <br />
                            <input type="text" name="" id="" required />
                        </>
                    }

                    {
                        questions[number].question_type === 5 &&
                        <>
                            <p className='que-mqrgin'>Question {questions[number].question_type}</p>
                            {
                                <h3 className='que-mqrgin'>{questions[number].question_text}</h3>
                            } <br />
                            <input lassName='input' type="file" name="" id="" />
                        </>
                    }
                    <div>
                    </div>
                </div>
                <div className='btn-box'>
                    <button onClick={handlePreviousButton} className='pre-btn'>Prev</button>
                    <button onClick={handleNextButton} className='next-btn'>Next</button>

                    {
                        number === questions.length - 1 && <Link to="/complete"><button className='sub-btn'>Submit</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default QuesInfo;
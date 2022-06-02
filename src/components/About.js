          import { buildQueries } from '@testing-library/react'
import React from 'react'

          function About(props) {
            return (
              <div className='containner'>
              <h1 style={{color : props.mode === 'light'?'black':'white'}}>About Us</h1>
                <div className="accordion" id="accordionPanelsStayOpenExample" >
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{backgroundColor : props.mode==='dark'?'#1e3243':'white', color : props.mode==='light'?'black':'white'}}>
                  About TextUtils
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body" style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='light'?'black':'white'}}>
                  <strong>We provide free tools to help you with your daily tasks.</strong><br/>TextUtility is a website which is used to manipulate your text in the way you want. You can manipulate data in many ways- <br/>1. Convert your text into uppercase.<br/>2. Convert your text into lowercase.<br/>3. Remove extra spaces in your text.<br/>4. Remove line breaks without space.<br/>5. Remove line breaks with space.<br/>6. Display words in list.<br/>7. Isolate alphabets.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{backgroundColor : props.mode==='dark'?'#1e3243':'white', color : props.mode==='light'?'black':'white'}}>
                 Teach Used  
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body" style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='light'?'black':'white'}}>
                  <strong>React.js</strong><br/> React is a free and open-source front-end JavaScript library. I've followed Code with Harry playlist which you can find on youtube. One of the best playlist to learn react from the ground!<br/>pre-requisite = HTML, CSS, JavaScript
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{backgroundColor : props.mode==='dark'?'#1e3243':'white', color : props.mode==='light'?'black':'white'}}>
                  Important Links
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body" style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='light'?'black':'white'}}>
                  <strong>GitHub code - </strong><a href="url">Access Code</a><br/>
                  <strong>Playlist code - </strong><a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt">Access Playlist</a><br/>
                  </div>
              </div>
            </div>
          </div>
          </div>
            )
          }

          export default About

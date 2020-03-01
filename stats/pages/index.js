import React from "react";
import Router from 'next/router'

class Hello extends React.Component {

    componentDidMount(){
        setTimeout(() => {
            const {pathname} = Router;
            if(pathname == '/' ){
                Router.push('/questions')
            }
        }, 5000);
    }

    render() {
        return <div className="loading">
            <header className="loading-header">
                <img className="loading-logo" src={require('../images/green.png')}/>
                <p className="loading-text">
                    Habitainable...
                </p>

                <p className="loading-description">
                    HACK4CLIMATE
                </p>
            </header>


            <style jsx global>{`
            body {
                display: block;
                margin: 0px;
            }
            .loading {
              text-align: center;
            }
            
            .loading-logo {
              height: 40vmin;
              pointer-events: none;
            }
            
            .loading-header {
              background-color: #008000;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: calc(10px + 2vmin);
              color: white;
            }
            
            .loading-text {
                margin-top: 80px;
                font-weight: bold;
                font-size: 40px;
            }
            
            .loading-description {
                margin-top: 20px;
                font-weight: bold;
                font-size: 30px;
            }
            
            @keyframes loading-logo-spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            
             @media (prefers-reduced-motion: no-preference) {
              .loading-logo {
                animation: loading-logo-spin infinite 20s linear;
              }
            }

		`}</style>
        </div>;
    }
}

export default Hello;


// export default App;

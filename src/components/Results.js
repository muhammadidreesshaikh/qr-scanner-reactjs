import React from 'react';
import '../assets/css/results.css';

import axios from 'axios';

class Results extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            ResultsData: []
        };
    }

    componentDidMount() {
    }


    render() {
        return(
            <div>
                
                <div className="results">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12">
                               <h1>Results</h1>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    } 
}



export default Results;
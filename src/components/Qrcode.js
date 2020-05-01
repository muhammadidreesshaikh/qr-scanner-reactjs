import React from 'react';
import '../assets/css/qrcode.css';
import QrReader from 'react-qr-reader'

class Qrcode extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            QrcodeData: {},
            result: 'No result'
        };
    }

    componentDidMount() {
    }

    handleScan = data => {
        if (data) {
          this.setState({
            result: data
          })
        }
      }

      handleError = err => {
        console.error(err)
      }

    render() {
        return(
            <div>
                
                <div className="qrcode">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12">
                               <h1>Qrcode</h1>

                               <QrReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{ width: '100%' }}
                                />

                                <p>{this.state.result}</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    } 
}



export default Qrcode;
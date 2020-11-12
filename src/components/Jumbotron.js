import React from 'react';
import './css/jumbotron.css';

function Jumbotron() {
    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <center>
                                <img src="https://avatars3.githubusercontent.com/u/48494012?s=460&u=7b497ce088bbfc83d42340cd016dcc291b05f4a4&v=4" id="adminPic" alt="adminPic" />
                                <h3 className="display-4">hkm007</h3>
                            </center>
                        </div>
                        <div className="col-lg-8 mt-4">
                            <h1 className="display-4">Welcome to BitFields</h1>
                            <p className="lead">Have a Dalgona Coffee and dive deeper into the techy world with hkm007.</p>
                            <p className="lead">I'm a computer science undergraduate and love to explore the tech stuffs.</p>
                            
                            <a className="social" href="https://www.linkedin.com/in/hkm007/"><i className="fa fa-linkedin-square"></i></a>{'  '}<a className="social" href="https://github.com/hkm007"><i className="fa fa-github-square"></i></a>{'  '}<a className="social" href="https://www.instagram.com/_hkm007_/"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Jumbotron

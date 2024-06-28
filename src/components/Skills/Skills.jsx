import React from 'react';
import './Skills.css';
import C from '../../img/c++.png';
import Python from '../../img/python.jpg';
import Html from '../../img/html.png';
import Css from '../../img/css.png';
import Bootstrap from '../../img/bootstrap.jpg';
import Java from '../../img/java.png';
import Reactpng from '../../img/react1.png';
import Node from '../../img/node.png';
import Express from '../../img/express.png';
import Mongo from '../../img/mongo.png';
import Sql from '../../img/sql1.png';
import gitpng from '../../img/git.png';
import github from '../../img/github.png';
import vscode from '../../img/vscode.jpg';
import jupyter from '../../img/jupyter.png';

const Skills=()=>{
    return (
        <>
        <section className="skills" id="Skills">
            <h1 className="skills heading">My Skills</h1>
            <div className="container">
                   {/* <div className="row"> */}
                    <div className="col">
                        <img src={C} alt="" />
                    </div>
                    <div className="col">
                        <img src={Python} alt="" />
                    </div>
                    <div className="col">
                        <img src={Html} alt="" />
                    </div>
                    <div className="col">
                        <img src={Css} alt="" />
                    </div>
                    <div className="col">
                        <img src={Bootstrap} alt="" />
                    </div>
                   {/* </div>
                   <div className="row"> */}
                    <div className="col">
                        <img src={Java} alt="" />
                    </div>
                    <div className="col">
                        <img src={Reactpng} alt="" />
                    </div>
                    <div className="col">
                        <img src={Node} alt="" />
                    </div>
                    <div className="col">
                        <img src={Express} alt="" />
                    </div>
                    <div className="col">
                        <img src={Mongo} alt="" />
                    </div>
                   {/* </div>
                   <div className="row"> */}
                    <div className="col">
                        <img src={Sql} alt="" />
                    </div>
                    <div className="col">
                        <img src={gitpng} alt="" />
                    </div>
                    <div className="col">
                        <img src={github} alt="" />
                    </div>
                    <div className="col">
                        <img src={vscode} alt="" />
                    </div>
                    <div className="col">
                        <img src={jupyter} alt="" />
                    </div>
                   {/* </div> */}
            </div>
        </section>
        </>
    );
};

export default Skills;
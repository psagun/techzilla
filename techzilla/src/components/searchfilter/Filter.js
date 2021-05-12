import React from 'react'
import './Filter.css'

function Filter() {
    return (
        <div className="row1">
            <form className="filter-box">
            <form className="form2" >
                <input className="bar" type='text' placeholder="search..."></input>
                {/* <button className="btn" type="button">Go</button> */}
            </form>
            
            <div className="row1">

                <form className="filter" >

                    <h4>Filter Product</h4>

                    <hr ></hr>
                    <h6 className="textInfo">Operating System</h6>
                    <p> <input type="checkbox" name="windows" />Windows   <input type="checkbox" name="IOS" />IOS</p>
                    <p><input type="checkbox" name="MAC" /> MAC         <input type="checkbox" name="Android" /> Android</p>
                    <p><input type="checkbox" name="Linux" /> Linux         <input type="checkbox" name="Berry" /> Berry</p>
                    <hr ></hr>
                    <h6 className="textInfo">Purpose</h6>
                    <p><input type="checkbox" name="windows" />Business</p>
                    <p><input type="checkbox" name="windows" />Gaming</p>
                    <p><input type="checkbox" name="windows" />Education</p>
                    <hr ></hr>
                    <h6 className="textInfo">Architecture</h6>
                    <p><input type="checkbox" name="windows" />ARM</p>
                    <p><input type="checkbox" name="windows" />MIPS</p>
                    <p><input type="checkbox" name="windows" />NVIDIA</p>
                </form>
                



            </div>

            </form>

        </div>
    )
}


export default Filter


import React from 'react'
import ReactDOM from 'react-dom';
import './Filter.css';
function Fillter() {
  return (
    <div className="row1">
       <form className="form2" >


        </form>
           <div className="row1">

             <form className="form1" >

             <h4>Filter Product</h4>

           <hr ></hr>
           <h6 >Operating System</h6>
           <p> <input type = "checkbox" name="windows" />Windows  </p>
           <p><input type = "checkbox" name="MAC" /> MAC        </p>
           <p><input type = "checkbox" name="Linux" /> Linux        </p>
           <p> <input type = "checkbox" name="IOS" />IOS</p>
           <p> <input type = "checkbox" name="Android" /> Android</p>
           <p> <input type = "checkbox" name="Berry" /> Berry</p>
           <hr ></hr>
           <h6 >Purpose</h6>
           <p><input type = "checkbox" name="windows" />Business</p>
           <p><input type = "checkbox" name="windows" />Gaming</p>
           <p><input type = "checkbox" name="windows" />Education</p>
           <hr ></hr>
           <h6 >Architecture</h6>
           <p><input type = "checkbox" name="windows" />ARM</p>
           <p><input type = "checkbox" name="windows" />MIPS</p>
           <p><input type = "checkbox" name="windows" />NVIDIA</p>
             </form>



           </div>



    </div>
  );
}

export default Fillter;

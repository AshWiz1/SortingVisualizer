import React,{Component} from 'react';
//import  './sorting.css';
import './jsforslider.js'

class Header extends Component
{
    onclick = () =>
    {
        const slider = document.getElementById("myRange1");
        this.props.createarray(slider.value);
    }

    onchange = () =>
    {
        const val = document.getElementsByClassName("dropdownbox");
        //console.log(val[0].value);
        if(val[0].value === 'merge')
            this.props.sortapp(0);
        else if(val[0].value === 'bubble')
            this.props.sortapp(1);
        else if(val[0].value === 'insertion')
            this.props.sortapp(2);
        else if(val[0].value === 'quick')
            this.props.sortapp(3);
    }

    oninput = (e) =>
    {
        this.props.createarray(e.target.value);
    }

    changespeed = (e)=>
    {
        console.log(e.target.value);
        this.props.changespeed(e.target.value);
    }

    stop = () =>
    {
        this.props.stop();
    }
//b80000
    render()
    {
        return (
            <div className="Header" >
                <header style = {headStyle}>
                    <h1  style={{flexGrow : '1',fontFamily : 'ariel'}}><font face='helvetica' color = '#000'>S</font>orting <font face='helvetica' color = '#000'>V</font>isualizer</h1>
                    <div style = {{flexGrow : '2',display : 'flex', alignItems : 'center' ,flexDirection : 'row', justifyContent:'flex-end'}}>
                        <div className="slidecontainer" style={sliderstyle}>
                            <input type="range" min="1" max="99" onInput={this.changespeed} className="slider" id="myRange2"  polyfill = "false"></input>
                        </div>
                        <div className="slidecontainer" style={sliderstyle}>
                            <input type="range" min="30" max="200" onInput={this.oninput} className="slider" id="myRange1"  polyfill = "false"></input>
                        </div>
                        <button type="button" style = {btn1} onClick = {this.stop}>Stop</button>
                        <button type="button" style = {btn1} onClick = {this.onclick}>Generate Array</button>
                        <select className = 'dropdownbox' style={btn2}>
                            <option value="merge">Merge</option>
                            <option value="bubble">Bubble</option>
                            <option value="insertion">Insertion</option>
                            <option value="quick">Quick</option>
                        </select>
                        <button type="button" style = {btn1} onClick = {this.onchange}>Start</button>
                    </div>
                </header>
            </div>
        )
    }

   
}

const sliderstyle = {

}

const headStyle = {
    color : '#f1f5f9',
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    background : '#7E8D88',
    textAlign : 'center'
}



const btn1 = {
    border : 'none',
   // alignSelf : 'centre',
    background : '#555',
   //background : 'green',
    color : '#fff',
    padding : '7px 20px',
    cursor : 'pointer',
    borderRadius: '12px',
    margin : '7px 5px',
    fontFamily : 'helvetica'
}

const btn2 = {
    border : 'none',

   // alignSelf : 'centre',
    background : '#555',
    color : '#fff',
    padding : '7px 20px',
    cursor : 'pointer',
    borderRadius : '12px',
    margin : '7px 5px',
    fontFamily : 'helvetica'
}

export default Header;

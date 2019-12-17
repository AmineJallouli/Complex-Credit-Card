import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num:"**** **** **** ****",
            name:"FOULEN",
            month:"MM",
            ValidThru:"12/08"
         }
         this.Name=this.Name.bind(this)
         this.Number=this.Number.bind(this)
         this.Changedate=this.Changedate.bind(this)
    }
 

 Number (n) {
        var regex = /^[0-9\b]+$/;
        if(regex.test(n.target.value)) {
           this.setState({
                num: (n.target.value.padEnd(16,"*").replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,''))
             })  
        }
    }
    

Name (n){

    var regex = /^([a-z ]+)$/;
    if(regex.test(n.target.value)){
        this.setState({name:n.target.value.toUpperCase()})
    }
    
     

}



 Changedate (event){
    var regex = /^[1-9\b]+$/;
    if(event.target.value.slice(0,2)<=12){
        if ((event.target.value.slice(0,2).match(regex))){
            this.setState({ValidThru: event.target.value.slice(0,1).padStart(1,"0")+"/" + event.target.value.slice(2,4)})
        }
        
            this.setState({
                ValidThru:
           event.target.value.slice(0,2) + "/" + event.target.value.slice(2,4),
            })
        
        
    }
     
     
     
 }


    render() { 
        return (<div className="myCard">
                    <div className="Card">
                        <h1>Company name</h1>
                        <img className="sim" src="http://pngtransparent.com/images/sim-card-png-347x231_715f7ac2.png"/>
                        <div className="number">{this.state.num}</div>
                        <div>
                        <h4>{this.state.ValidThru}</h4>
                            <p>{this.state.name}</p>
                            <img className="master" src="https://icon-library.net/images/mastercard-icon-png/mastercard-icon-png-16.jpg"/>
                        </div>

                    </div>
                    <div className="Edit">
                        <input type="text" placeholder="**** **** **** ****" maxLength="16" onChange={this.Number}/>
                        <input type="text" maxLength="20" placeholder="FOULEN"  onChange={this.Name}/>
                        <input maxLength="4"
                               type="text"
                               className="date"
                               datatype="DD MM"
                               placeholder="12/08" 
                               onChange={this.Changedate}/>
                    </div>
                </div>  );
    }
}
 
export default Card ;
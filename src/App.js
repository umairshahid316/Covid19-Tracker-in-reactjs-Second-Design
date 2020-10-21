import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Chart} from './Component/Charts/Chart';
import {Cards} from './Component/Cards/Cards';
import {CountryPicker} from './Component/CountryPicker/CountryPicker';
import Styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png'

class App extends React.Component{


state={
  data:{},
  country:'',
}
  async componentDidMount(){
    const fetchedData=await fetchData();
  this.setState({data:fetchedData});  
  }

  handleCountryChange= async (country)=>{
    const fetchedData=await fetchData(country);
    this.setState({data:fetchedData, country: country});  
  
  }

  render(){
const {data, country} =this.state;

return(
          <div className={Styles.container}>
            <img src={coronaImage} className={Styles.image} alt="COVID-19"/>
          <Cards data={data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={data} country={country} />
         
           </div>

    )
  }
}

export default App;




// function App() {
//   return (
//     <div className={Styles.container}>
//    <Cards/>
//    <CountryPicker/>
//    <Chart/>
   
//     </div>
//   );
// }


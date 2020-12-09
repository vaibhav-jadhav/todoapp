import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import TodoCard from './TodoCard';import './index.css'
import {Container} from 'reactstrap';

import {Row} from 'reactstrap';
import {Col} from 'reactstrap';
// import Example from './Example'
const axios = require('axios');


// let onceLoaded=false;
function Home(props){
    console.log(props.prevData.parentState.isLoaded)
    // const [isLoaded, Loaded] = useState(false);
    async function LoadData(){
        await   axios.get('https://todonotesapp.herokuapp.com/getall')
        .then(function (response) {
        //   console.log(response.data);
          props.prevData.parentState.dataState.UpdateRect(response.data);
          props.prevData.parentState.Loaded(true);
        //   onceLoaded=true;
        //   data = response;
        }).catch(function (error) {
          console.log(error);
        }).then(function () {
        });
    }
    if(!props.prevData.parentState.isLoaded)
        LoadData(); 
    return(
        
        ( props.prevData.parentState.isLoaded)  ?
        <Container fluid style={{display:"flex", justifyContent:"center", paddingLeft: 0, paddingRight: 0 }}>
                {/* <Example></Example> */}
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
                { 
                props.prevData.parentState.dataState.record.map((item,index)=>{
                        return <Col className="todsad" lg="2" md="5" sm="10" key ={index}>
                            < TodoCard data={item}/>
                            </Col> })
                }
            </Row>
        </Container>   
        :
        <Loader
         type="ThreeDots"
         color="blue"
         height={500}
         width={100}
         timeout={10000} //3 secs
 
      />
    
    );
}
export default Home;
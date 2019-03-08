import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers =[{
  'id' : 1 ,
  'image' :"https://placeimg.com/64/64/any" ,
  'name' : '홍성인',
  'brithday' : 810227,
  'gender' : '남자',
  'job' :'개발자'
},
{
  'id' : 2 ,
  'image' :"https://placeimg.com/64/64/any" ,
  'name' : '홍지유',
  'brithday' : 120424,
  'gender' : '여자',
  'job' :'초등학생'
},
{
  'id' : 3 ,
  'image' :"https://placeimg.com/64/64/any" ,
  'name' : '홍지유',
  'brithday' : 150921,
  'gender' : '여자',
  'job' :'어린이'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map( c =>{
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              brithday={c.brithday}
              gender={c.gender}
              jobs={c.job}    
              />          
            );
          })
        }
      </div>      
    );
  }
}

export default App;

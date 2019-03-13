import React from 'react'
import { post } from 'axios'

class CustomerAdd extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            file: null,
            userName:'',
            birthday:'',
            gender:'',
            job:'',
            fileName:''
        }
   }

    handleFormSubmit = (e) =>{
        e.preventDefault() 
        this.addCustomer()
            .then((response) =>{
                console.log("리스폰 "+ response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file:null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        })
    }

    handleFileChange =(e) =>{
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    hanldeValueChange = (e) =>{
        let nexState ={};
        nexState[e.target.name] = e.target.value;
        this.setState(nexState);
    }

    addCustomer = () =>{
        const url ='/api/customers'
        const formData = new FormData();
        formData.append('image',this.state.file);
        formData.append('userName',this.state.userName);
        formData.append('birthday',this.state.birthday);
        formData.append('gender',this.state.gender);
        formData.append('job',this.state.job);
        const config = {
            headers:{
                'content-type' : 'mutipart/form-data'
            }
        }
        return post(url,formData,config);
    }
    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
            <h1>고객 추가</h1>
            프로필 이미지:
            <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/>
            이름:<input type="text" name="userName" value={this.state.userName} onChange={this.hanldeValueChange} />
            생년월일:<input type="text" name="birthday" value={this.state.birthday} onChange={this.hanldeValueChange} />
            성별:<input type="text" name="gender" value={this.state.gender} onChange={this.hanldeValueChange} />
            직업:<input type="text" name="job" value={this.state.job} onChange={this.hanldeValueChange} />
            <button type="submit">추가하기</button>
            </form>
        )
    }

}

export default CustomerAdd;
import axios from 'axios'
// https://trykutnykserver-8fc5c4b665c4.herokuapp.com/
const requiredAddress = "https://trykutnykserver-8fc5c4b665c4.herokuapp.com/";
export class Http{
    async newPost (data) {
        await axios.post(`${requiredAddress}admin/post`, data, {
            headers: {
                "content-type":"mulpipart/form-data"
            }
        });
    }
    async deletePost (data) {
        await axios.delete(`${requiredAddress}admin/deletepost`, {data:data});
    }
    async login (data) {
        await axios.post(`${requiredAddress}admin/login`, data).then((res)=>{
            if(res.data.status === false){
                window.location = "/";
            }
        });
    }
    async users () {
        await axios.get(`${requiredAddress}admin/users`, {
            headers: {
                
            }
        })
    }
}

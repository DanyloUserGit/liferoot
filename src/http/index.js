import axios from 'axios'
// https://trykutnykserver.onrender.com/
const requiredAddress = "https://trykutnykserver.onrender.com/";
export class Http{
    async newPost (data) {
        await axios.post(`${requiredAddress}admin/post`, data, {
            // headers: {
            //     "content-type":"mulpipart/form-data"
            // }
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

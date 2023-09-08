import axios from 'axios'
// https://trykutnykserver.onrender.com/
const requiredAddress = "https://trykutnykserver.onrender.com/";
export class Http{
    async newPage (data) {
        /*
            {
                name: "...",
                location: "https://.../posts/name"
            }
        */
        await axios.post(`${requiredAddress}admin/page`, data, {
            headers: {
                "content-type":"mulpipart/form-data"
            }
        });
    }
    async addElement (data, handler) {
        // by page name
        await axios.post(`${requiredAddress}admin/addElement`, data, {
            headers: {
                "content-type":"mulpipart/form-data"
            }
        }).then(handler());
    }
}

import axios from 'axios'

const url="http://localhost:3000/users";

class ApiServices{
    static getUsers(){
        return new Promise(async (resolve,reject)=>{
            try {
                const res=await axios.get(url);
                const data=res.data;
                
                resolve(
                    data.map(users=>({
                        ...users,
                        createdAt:new Date()
                    }))
                )
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default ApiServices
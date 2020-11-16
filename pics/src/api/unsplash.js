import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID -DC55Ckm5q_L1whTRu1hwIBSdUenpEevWGqpR-HLB6M'
    }

});
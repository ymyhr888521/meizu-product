import {index} from '../commons/URLSchema';

export default {
    getData(cb){
      fetch(index).then(res=>{
          res.json().then(data=>{
              cb(data);
          })
      })
    }
}

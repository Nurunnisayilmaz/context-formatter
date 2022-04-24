
const context = async (req,res) =>{

     const {value} = req.body;
     const valueId = [];
     const list = [];
     const duplicateList = [];
     const uniqueList  = [];

    for (let i = 0; i < value.length; i++) {

        if (typeof value[i]==='object'){
            if(valueId.includes(value[i].id)){
                duplicateList.push(value[i]);
            }else {
                valueId.push(value[i].id);
                uniqueList.push(value[i]);
            }

        }else{
            if (list.includes(value[i])){
                duplicateList.push(value[i]);
            }else {
                list.push(value[i]);
                uniqueList.push(value[i]);
            }
        }
    }



    return res.send(duplicateList);

}




module.exports = {context};
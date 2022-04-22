
const context = async (req,res) =>{

     const {value} = req.body;

    const uniqueList = Array.from(new Set(value.map(JSON.stringify))).map(JSON.parse);

    return res.send(uniqueList);

}





module.exports = {context};
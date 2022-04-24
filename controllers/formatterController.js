const context = async (req, res) => {

    const {value} = req.body;
    const valueId = [];
    const duplicateList = [];
    const uniqueList = [];

    for (let i = 0; i < value.length; i++) {
        const isDuplicateObject = typeof value[i] === 'object' ? (value[i].id !== undefined && value[i].id !== null && valueId.includes(value[i].id)) : false

        if (isDuplicateObject || uniqueList.includes(value[i])) {
            duplicateList.push(value[i]);
        } else {

            if (value[i].id !== undefined && value[i].id !== null) {
                valueId.push(value[i].id);
            }

            uniqueList.push(value[i]);
        }
    }

    return res.status(200).json({status: 'success', duplicatedData: duplicateList, uniqueData: uniqueList})
}

module.exports = {context};
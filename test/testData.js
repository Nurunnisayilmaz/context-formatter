module.exports.fakeContext = {
    data : { value: [2, 2, 5, {id:0,name:'nisa'}, {id: 0, name: 'nisan'}, 66]},
    result: {
        status: "success",
        duplicatedData: [
            2,
            {
                id: 0,
                name: "nisan"
            }
        ],
        uniqueData: [
            2,
            5,
            {
                id: 0,
                name: "nisa"
            },
            66
        ]
    }
}

module.exports.errorContext = {
    data : 'vvvv'
}


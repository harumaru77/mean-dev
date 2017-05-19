// Create a new 'getHeroes' controller method
exports.getHeroes = function(req, res) {
    const heroes = [
        {
            id: 11,
            name: '똘이장군11'
        },
        {
            id: 12,
            name: '똘이장군12'
        },
        {
            id: 13,
            name: '똘이장군13'
        },
        {
            id: 14,
            name: '똘이장군14'
        },
        {
            id: 15,
            name: '똘이장군15'
        },
        {
            id: 16,
            name: '똘이장군16'
        },
        {
            id: 17,
            name: '똘이장군17'
        },
        {
            id: 18,
            name: '똘이장군18'
        },
        {
            id: 19,
            name: '똘이장군19'
        },
        {
            id: 20,
            name: '똘이장군20'
        }
    ];

    res.json(heroes);
};

exports.getNewHeroes = (req, res) => {
    let fromClient = req.body.key;
    console.log(fromClient);

    const heroes = [
        { id: 11, name: '아이언맨11' },
        { id: 12, name: '아이언맨12' },
        { id: 13, name: '아이언맨13' },
        { id: 14, name: '아이언맨14' },
        { id: 15, name: '아이언맨15' },
        { id: 16, name: '아이언맨16' },
        { id: 17, name: '아이언맨17' },
        { id: 18, name: '아이언맨18' },
        { id: 19, name: '아이언맨19' },
        { id: 20, name: '아이언맨20' },
    ];

    res.json(heroes);
};
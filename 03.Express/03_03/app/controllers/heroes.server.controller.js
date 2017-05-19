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

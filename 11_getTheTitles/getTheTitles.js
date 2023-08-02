const getTheTitles = function(objs) {
    let titles = [];
    for (let obj in objs) {
        titles.push(objs[obj].title);
    }
    return titles;
};          

// Do not edit below this line
module.exports = getTheTitles;

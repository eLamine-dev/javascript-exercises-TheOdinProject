const findTheOldest = function(people) {
    let sorted = people.sort((a, b)=>{
        let currentYear = new Date().getFullYear();
        let aLived = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        let bLived = (b.yearOfDeath || currentYear) - b.yearOfBirth;
        if (aLived > bLived) return -1;
        if (aLived < bLived) return 1;
    })

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;

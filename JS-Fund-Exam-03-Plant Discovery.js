function solve(input) {

    let lines = Number(input.shift());
    let plants = {};

    for(let i = 0; i < lines; i++) {
        let [plant, rarity] = input.shift().split('<->');
        rarity = Number(rarity);
        plants[plant] = {rarity, rating: [] };
    }

    let commandLine = input.shift();

    while (commandLine !== 'Exhibition') {
        let [command, ...data] = commandLine.split(": ");
        let [plantName, argument] = data[0].split(' - ');
        let newRarity;

        if (plants.hasOwnProperty(plantName)) {
            switch (command) {
                case 'Rate':
                    let plantRating = Number(argument);
                    plants[plantName].rating.push(plantRating);
                    break;
                case 'Update':
                    newRarity = Number(argument);
                    plants[plantName].rarity = newRarity;
                    break;
                case 'Reset':
                    plants[plantName].rating = [];
                    break;
            }
        } else {
            console.log('error');
        }
        
        commandLine = input.shift();
        
    }

    function averageRating(ratingArray) {
        if (!ratingArray.length) { return 0; }
        return ratingArray.reduce((a, b) => a + b, 0) / ratingArray.length;
    }

    let sortedPlants = Object.keys(plants).sort((a, b) =>
            plants[b].rarity - plants[a].rarity || averageRating(plants[b].rating) - averageRating(plants[a].rating));

    console.log(`Plants for the exhibition:`);

    for (let plantName of sortedPlants) {
        console.log(`- ${plantName}; Rarity: ${plants[plantName].rarity}; Rating: ${averageRating(plants[plantName].rating).toFixed(2)}`);
    }

}


solve();
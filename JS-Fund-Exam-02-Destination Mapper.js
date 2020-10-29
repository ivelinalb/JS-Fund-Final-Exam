function solve(input) {

    let validation = /((=[A-Z][A-Za-z]{2,}=)|(\/[A-Z][A-Za-z]{2,}\/))/gi;
    let points;

    if (!validation.test(input)) {
        console.log(`Destinations:`);
        console.log(`Travel Points: 0`);
    } else {
        let valid = input.match(validation);
        let stringDestinations = valid.join(', ');
        let validDestinations = stringDestinations.match(/[\w]+/g);
    
        function travelPoints(arr) {
            let allSymbols = validDestinations.join('');
            points = allSymbols.length;
            return points;
        }
        
        console.log(`Destinations: ${validDestinations.join(', ')}`);
        console.log(`Travel Points: ${travelPoints()}`);

    }

}

solve();
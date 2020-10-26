function solve(input) {

    let stops = input.shift();
    let lineOfCommands = input.shift();

    while (lineOfCommands !== 'Travel') {
        let [command, ...rest] = lineOfCommands.split(':');
            //rest[0] and rest[1]

        switch (command.trim()) {
            case 'Add Stop':
                if (rest[0] >= 0 && rest[0] <= stops.length) {
                    stops = stops.split('');
                    stops.splice(rest[0], 0, rest[1]);
                    stops = stops.join('');
                }
                break;

            case 'Remove Stop':
                let start = Number(rest[0]);
                let end = Number(rest[1]);

                if (start >= 0 && start < stops.length && end >= 0 && end < stops.length && start <= end) {
                    stops = stops.split('');
                    stops.splice(start, (end - start + 1));
                    stops = stops.join('');
                }
                break;

            case 'Switch':
                stops = stops.replace(rest[0], rest[1])               
                break;
            default:
                break;
        }
        
        console.log(stops);
        lineOfCommands = input.shift();
        
    }
    
    console.log(`Ready for world tour! Planned stops: ${stops}`);
    
}
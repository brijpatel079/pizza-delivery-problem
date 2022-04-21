const fs = require('fs');
let command = fs.readFileSync('./PizzaDeliveryInput.txt', 'UTF-8');

exports.executeCommand = function (command) {

    // split the commands into array of string
    let commandArray = command.split("");

    // initialize the current position of agent and goat
    let currentDeliveryAgentPosition = [0, 0];
    let currentGoatPosition = [0, 0];

    // create set of houses travelled once and add first item as initial position
    // have used set so that it can keep track of unique houses
    let houses = new Set([currentDeliveryAgentPosition.join(",")]);

    for (const [i, exec] of commandArray.entries()) {

        // if the current index is first
        let currentPosition = ((i % 2) == 0) ? [...currentDeliveryAgentPosition] : [...currentGoatPosition];

        if (exec == "^") {
            currentPosition = [currentPosition[0] + 1, currentPosition[1]];
            houses.add(currentPosition.join(","));
        } else if (exec == "v") {
            currentPosition = [currentPosition[0] - 1, currentPosition[1]];
            houses.add(currentPosition.join(","));
        } else if (exec == ">") {
            currentPosition = [currentPosition[0], currentPosition[1] + 1];
            houses.add(currentPosition.join(","));
        } else if (exec == "<") {
            currentPosition = [currentPosition[0], currentPosition[1] - 1];
            houses.add(currentPosition.join(","));
        }

        // set the current position of respective move
        if ((i % 2) == 0) {
            currentDeliveryAgentPosition = currentPosition;
        } else {
            currentGoatPosition = currentPosition;
        }

    }

    return houses.size;

}


// print
console.log('Output of part 2 file:',exports.executeCommand(command));




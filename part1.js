const fs = require('fs');
let command = fs.readFileSync('./PizzaDeliveryInput.txt', 'UTF-8');

exports.executeCommand = function (command) {

    // split the command line into array
    let commandArray = command.split("");

    // Initialize the current position
    let currentPosition = [0, 0];
    let houses = new Set([currentPosition.join(",")]);

    for (exec of commandArray) {

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

    }

    return houses.size;

}


// print the final output
console.log('Output of part 1 file:',exports.executeCommand(command));



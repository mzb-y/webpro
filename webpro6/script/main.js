// set paragraph for generated story
var newStory = document.querySelector('.generatedStory');

// get button
var paramsSubmit = document.querySelector('.paramsSubmit')

// story format
var story = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised - :insertx: weighs 300 pounds, and it was a hot day.";

// random elements
x_array = ["Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
];

y_array = ["the soup kitchen",
    "Disneyland",
    "the White House"
];

z_array = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
];


// define a function to replace :insert*: with random variable
function story_generator() {
    // declaration of variables
    var random_num = Math.floor(Math.random() * 3);
    console.log(random_num);
    var ins_len = ":insertx:".length;
    var regExp = /:insert[a-z]:/g;

    // copy 
    newStory = story;

    // get custom name
    var customName = document.querySelector('.customName').value;

    if (customName !== "") {
        newStory = newStory.replace("Bob", customName);
    }

    // replace /:insert[x-z]:/g with x_array element
    while (/:insertx:/.exec(newStory) !== null) {
        newStory = newStory.replace(":insertx:", x_array[random_num]);
    }

    while (/:inserty:/.exec(newStory) !== null) {
        newStory = newStory.replace(":inserty:", y_array[random_num]);
    }

    while (/:insertz:/.exec(newStory) !== null) {
        newStory = newStory.replace(":insertz:", z_array[random_num]);
    }

    // get country
    var country = document.getElementById('selectCountry').country.value;

    if (country === "UK") {
        newStory = newStory.replace("94", 94 - 32);
        newStory = newStory.replace("fahrenheit", "Celsius");
        newStory = newStory.replace("300", Math.round(300 * 0.0714286));
        newStory = newStory.replace("pounds", "stones");
    }

    newStory.textContent = newStory;
}

// set function on paramsSubmit button
paramsSubmit.addEventListener('click', story_generator);

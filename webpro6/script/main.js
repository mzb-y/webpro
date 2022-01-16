// get button
var paramsSubmit = document.querySelector('.paramsSubmit')

// story format
var story = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised - :insertx: weighs 300 pounds, and it was a hot day.";

// define a function to replace :insert*: with random variable
function story_generator() {
    // declaration of variables
    var random_num = Math.floor(Math.random() * 3);
    var ins_len = ":insertx:".length
    var regExp = /:insert[a-z]:/g;

    // copy 
    new_story = story;

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

    var replace_strings = [x_array[random_num - 1],
        y_array[random_num - 1],
        z_array[random_num - 1]
    ]

    // get custom name
    var customName = document.querySelector('.customName').value;

    if (customName !== null) {
        new_story = new_story.replace("Bob", customName);
    }

    // replace /:insert[x-z]:/g with x_array element
    while (/:insertx:/.exec(new_story) !== null) {
        new_story = new_story.replace(":insertx:", x_array[random_num - 1])
    }

    while (/:inserty:/.exec(new_story) !== null) {
        new_story = new_story.replace(":inserty:", y_array[random_num - 1])
    }

    while (/:insertz:/.exec(new_story) !== null) {
        new_story = new_story.replace(":insertz:", z_array[random_num - 1])
    }

    // get country
    var country = document.getElementById('selectCountry').country.value;

    if (country === "UK") {
        new_story = new_story.replace("94", 94 - 32);
        new_story = new_story.replace("fahrenheit", "Celsius");
        new_story = new_story.replace("300", Math.round(300 * 0.0714286));
        new_story = new_story.replace("pounds", "stone");
    }

    // set paragraph for generated story
    var newStory = document.querySelector('.generatedStory');
    newStory.textContent = new_story;

    console.log(new_story)
}

// set function on paramsSubmit button
paramsSubmit.addEventListener('click', story_generator); 
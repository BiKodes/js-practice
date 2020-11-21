// JavaScript Object Notation (JSON) is a standard text-based format for representing structured 
// data based on JavaScript object syntax.
// It is commonly used for transmitting data in web applications 
// (e.g., sending some data from the server to the client, so it can be displayed on a web page, 
// or vice versa). 

// Converting a string to a native object is called deserialization, 
// Converting a native object to a string so it can be transmitted across the network is called serialization.

const superHeroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]

}


// Arrays as JSON:
// an array is also valid JSON

[
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
]



// JSON is purely a data format — it contains only properties, no methods.
// JSON requires double quotes to be used around strings and property names. 
// Single quotes are not valid.
// Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. 


// Converting between objects and text:

// Built-in JSON object is available in browsers, which contains the following two methods:

// parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
// stringify(): Accepts an object as a parameter, and returns the equivalent JSON string form.









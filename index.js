// TO DO - clean up to do
    // remove console.logs / add semi-colons
    // remove clickable options
    // on profile page, remove clickable options
    // store all jquery as variables
    // review last projects feedback and apply
    // make all images a lower res
    // change all image files to camelCase


let yogaApp = {};

// create class for iteration of session to hold yoga sessions. Inside the class use a static function to allow easy creation of new session classes
yogaApp.Session = class Session {
    constructor({ city, day, experience, yoga, atmosphere, imageURL, name}) {
        this.city = city;
        this.day = day;
        this.experience = experience;
        this.yoga = yoga;
        this.atmosphere = atmosphere;
        this.imageURL = imageURL;
        this.name = name
    }

    static createSession({ city, day, experience, yoga, atmosphere, imageURL, name }) {
        return new this({
            city, day, experience, yoga, atmosphere, imageURL, name
        })
    }
}

// created some dummy data that always exists ont he page and stored them in grouped sessions. 
// Will also use this object to add future sessions based on host
// 
// Will also use this object to filter and pull data to put on the page
yogaApp.groupedSessions = {
    yogiTom: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'beginner',
        yoga: 'restorative',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/artem-beliaikin-nKCtkaW4JU4-unsplash.jpg',
        name: 'yogiTom',

    }),

    yogiAlex: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'intermediate',
        yoga: 'ashtanga', 
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/jonathan-borba-5IjWRNGbkYI-unsplash.jpg',
        name: 'yogiAlex',
        
    }),

    yogiSofia: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/patrick-kool-zTwmxau8DlQ-unsplash.jpg',
        name: 'yogiSofia',
    }),

    yogiZac: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'intermediate',
        yoga: 'restorative',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/rima-kruciene-Tq9Ln3gpiG4-unsplash.jpg',
        name: 'yogiZac',
    }),

    yogiSandy: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'intermediate',
        yoga: 'ashtanga',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/nate-johnston-2gBpsNuHcyA-unsplash.jpg',
        name: 'yogiSandy',
    }),

    yogiJames: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/simon-raeker.jpg',
        name: 'yogiJames',
    }),

    yogiJohn: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'beginner',
        yoga: 'restorative',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/scott-broome-cuOHHP5tx5g-unsplash.jpg',
        name: 'yogiJohn',

    }),

    yogiSam: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'intermediate',
        yoga: 'ashtanga',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/ruslan-zh-i_DN1jo1iTU-unsplash.jpg',
        name: 'yogiSam',

    }),

    yogiElise: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/kike-vega-F2qh3yjz6Jk-unsplash.jpg',
        name: 'yogiElise',
    }),

    yogiBella: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'beginner',
        yoga: 'restorative',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/mark-zamora-7fcSXSU-zhY-unsplash.jpg',
        name: 'yogiBella',
    }),

    yogiSean: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'intermediate',
        yoga: 'ashtanga',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/ashes-sitoula--8ZESyFapTk-unsplash.jpg',
        name: 'yogiSean',
    }),

    yogiRachita: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/dane-wetton-t1NEMSm1rgI-unsplash.jpg',
        name: 'yogiRachita',
    }),

    yogiPaul: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'beginner',
        yoga: 'restorative',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/isabell-winter-lzYZEDJ8fbo-unsplash.jpg',
        name: 'yogiPaul',
    }),

    yogiCatri: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'intermediate',
        yoga: 'ashtanga',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/form-w0YIvob3LlI-unsplash.jpg',
        name: 'yogiCatri',
    }),

    yogiLucy: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/wesley-tingey-57wo9F-r2-A-unsplash.jpg',
        name: 'yogiLucy',
    }),

    yogiDom: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'beginner',
        yoga: 'restorative',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/samuel-austin-0tTA6cewPr8-unsplash.jpg',
        name: 'yogiDom',

    }),

    yogiGenene: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'intermediate',
        yoga: 'ashtanga',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/zoltan-tasi-vHnVtLK8rCc-unsplash.jpg',
        name: 'yogiGenene',

    }),

    yogiSarah: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/mark-zamora-Y9jpiiiAAOQ-unsplash.jpg',
        name: 'yogiSarah',
    }),

    yogiJack: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'advanced',
        yoga: 'restorative',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/carl-newton-iX7WedkjpUY-unsplash.jpg',
        name: 'yogiJack',

    }),

    yogiGeorgia: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'beginner',
        yoga: 'ashtanga',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/farsai-chaikulngamdee-L2wq7Y3h7ag-unsplash.jpg',
        name: 'yogiGeorgia',

    }),

    yogiSally: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'intermediate',
        yoga: 'vinyasa',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/max-rovensky-fGUmhLROnPc-unsplash.jpg',
        name: 'yogiSally',
    }),

    yogiRussell: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'intermediate',
        yoga: 'restorative',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/chris-ensey-16QrjudiZnE-unsplash.jpg',
        name: 'yogiRussell',

    }),

    yogiJanet: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'advanced',
        yoga: 'ashtanga',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/alexander-mils-bpoSU5kmUfo-unsplash.jpg',
        name: 'yogiJanet',

    }),

    yogiTara: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'beginner',
        yoga: 'vinyasa',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/william-farlow-IevaZPwq0mw-unsplash.jpg',
        name: 'yogiTara',
    }),

    yogiTim: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'intermediate',
        yoga: 'restorative',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/fabian-moller-gI7zgb80QWY-unsplash.jpg',
        name: 'yogiTim',

    }),

    yogiPaula: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'beginner',
        yoga: 'ashtanga',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/steve-halama-tyCVZ1Aaqxo-unsplash.jpg',
        name: 'yogiPaula',

    }),

    yogiBonnie: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'beginner',
        yoga: 'vinyasa',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/bekir-donmez-eofm5R5f9Kw-unsplash.jpg',
        name: 'yogiBonnie',
    }),

    yogiIdris: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'beginner',
        yoga: 'restorative',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/patrick-malleret-p-v1DBkTrgo-unsplash.jpg',
        name: 'yogiIdris',

    }),

    yogiHarry: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'intermediate',
        yoga: 'ashtanga',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/mark-adriane-muS2RraYRuQ-unsplash(1).jpg',
        name: 'yogiHarry',

    }),

    yogiHolly: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/annie-spratt-8mqOw4DBBSg-unsplash.jpg',
        name: 'yogiHolly',
    }),

    yogiStar: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'beginner',
        yoga: 'vinyasa',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/wesley-tingey-dlxNvA7pVwU-unsplash.jpg',
        name: 'yogiStar',
    }),

    yogiJosh: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'beginner',
        yoga: 'vinyasa',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/ksenia-makagonova-V-TIPBoC_2M-unsplash.jpg',
        name: 'yogiJosh',
    }),

    yogiCharlotte: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/bruce-mars-pFyKRmDiWEA-unsplash(1).jpg',
        name: 'yogiCharlotte',
    }),

    yogiCres: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'intermediate',
        yoga: 'vinyasa',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/natalie-grainger-8uB5kFKWWkk-unsplash.jpg',
        name: 'yogiCres',
    }),

    yogiChris: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/jay-castor-7AcMUSYRZpU-unsplash.jpg',
        name: 'yogiChris',
    }),

    

    
}

yogaApp.userTickedOptions = [['toronto'], ['beginner', 'intermediate', 'advanced'], ['studio', 'home', 'outdoor'], ['any']];
// use a function loop through each form item choice object to deliver the choices we want in an array 
yogaApp.findChoicesItems = (choiceObj, finalArray) => {
    let newArray = [];
    // push each item in the chosen object into an array
    for (i = 0; i < 10; i++) {
        newArray.push(choiceObj[i]);
    };

    // remove all null / undefined elements in this array in case nothing is chosen
    const cleanedArray = newArray.filter(function (item) {
        return item != null;
    });

    // create final array of choices
    let finalChoiceArray = [];
    for (i in cleanedArray) {
        finalChoiceArray.push(cleanedArray[i].id);
    };
    finalArray.push(finalChoiceArray);
}

// write a function that removes any currently appended data to the page
yogaApp.removeCurrentData = function(toBeRemoved) {
    $(toBeRemoved).remove();
}

// use if function to remove any undefined or replicated items
// then collate the accurate items in an array
yogaApp.cleanSimilarItems = function(incomingArray, outgoingArray) {
    if (incomingArray[0] == null || outgoingArray.includes(incomingArray[0])) {
        outgoingArray;
    } else {
        outgoingArray.push(incomingArray[0]);
    }
}

yogaApp.checkForAnyCity = function (incomingArray, outgoingArray) {
    if (incomingArray.length > 0) {
        outgoingArray.push('toronto');
        outgoingArray.push('london');
        outgoingArray.push('new-york');
    }
}

yogaApp.checkForAnyExperience = function (incomingArray, outgoingArray) {
    if (incomingArray.length > 0) {
        outgoingArray.push('beginner');
        outgoingArray.push('intermediate');
        outgoingArray.push('advanced');
    }
}

yogaApp.checkForAnyAtmosphere = function (incomingArray, outgoingArray) {
    if (incomingArray.length > 0) {
        // console.log(incomingArray)
        outgoingArray.push('outdoor');
        outgoingArray.push('studio');
        outgoingArray.push('home');
        // console.log(outgoingArray)
    }
}

yogaApp.checkForAnyDay = function (incomingArray, outgoingArray) {
    if (incomingArray.length > 0) {
        outgoingArray.push('morning');
        outgoingArray.push('evening');
        outgoingArray.push('weekend');
    }
}



// if no user input, then provide an error message under the button asking for input. Also add a class to style this and use removeClass to remove any background styling for any prior searches
// yogaApp.noUserInputError = function (userInputArray) {
//     if (userInputArray.length === 0) {
//         $('.title4').toggleClass('hide')
//     } 
// } 
yogaApp.saveUserToLocalStorage = function(userInputArrays) {
    // currently we have an array holding multiple arrays for each user input (e.g. array[0] holds all cities clicked /  array[1] holds all levels clicked)
    // convert these to local storage key value pairs
        // for each item in array[0], localStorage.setItem('city', array[0)[i]
        // if counter at 0 , put city, if counter +1 do x, etc
        
        let counter = 0;

        userInputArrays.forEach(function (choice) {
            counter = counter + 1;

            if (counter === 1) {
                localStorage.setItem('city', `${choice}`)
            } 
            else if (counter === 2){
                localStorage.setItem('experience', `${choice}`)
            } 
            else if (counter === 3) {
                localStorage.setItem('atmosphere', `${choice}`)
            } else if (counter === 4) {
                localStorage.setItem('day', `${choice}`)
            }

            
        })
        // for each item in array[1], localStorage.setItem('city', array[0)[i]
    // before this run data to delete all localStorage.clear    
}


yogaApp.saveHostToLocalStorage = function (userInputArrays) {
    // currently we have an array holding multiple arrays for each host input (e.g. array[0] holds all cities clicked /  array[1] holds all levels clicked)
    // similar to above we need to convert these to local storage key value pairs but without overitting the user input above
        // for each item in array[0], localStorage.setItem('city', array[0)[i]
        // if counter at 0 , put city, if counter +1 do x, etc
    let counter = 0;
    
    console.log(userInputArrays)

    userInputArrays.forEach(function (choice) {
        counter = counter + 1;

        if (counter === 1) {
            localStorage.setItem('hostCity', `${choice}`)
        }
        else if (counter === 2) {
            localStorage.setItem('hostExperience', `${choice}`)
        }
        else if (counter === 3) {
            localStorage.setItem('hostAtmosphere', `${choice}`)
        } else if (counter === 4) {
            localStorage.setItem('hostName', `${choice}`)
        } else if (counter === 5) {
            localStorage.setItem('hostEmail', `${choice}`)
        } else if (counter === 6) {
            localStorage.setItem('hostYoga', `${choice}`)
        } else if (counter === 7) {
            localStorage.setItem('hostDay', `${choice}`)
        } else if (counter === 8) {
            localStorage.setItem('hostPrice', `${choice}`)
        }


    })

}

yogaApp.saveObjToLocalStorage = function(object) {
    localStorage.setItem('groupedSessions', JSON.stringify(object))
}

yogaApp.pullAndConvertFromLocalStorage = function () {
    let postStorageArrays = [];
    // console.log(localStorage)
    // readd to an array so appendToPage can run on it. Make sure it is using the right order using splice, unshift and push
    for (i in localStorage) {
  
        if (i === 'city') {
            let miniArray = [];
            miniArray.push(localStorage[i])
            let cleanMiniArray = miniArray[0].split(',');
            postStorageArrays[0] = cleanMiniArray;
        } else if (i === 'experience') {            
            let miniArray = [];
            miniArray.push(localStorage[i])
            let cleanMiniArray = miniArray[0].split(',');
            postStorageArrays[1] = cleanMiniArray;
        } else if (i === 'atmosphere') {
            let miniArray = [];
            miniArray.push(localStorage[i])
            let cleanMiniArray = miniArray[0].split(',');
            postStorageArrays[2] = cleanMiniArray;
        } 
        else if (i === 'day') {
            let miniArray = [];
            miniArray.push(localStorage[i])
            let cleanMiniArray = miniArray[0].split(',');

            postStorageArrays[3] = cleanMiniArray;

        }
    }
    return postStorageArrays;
}

// yogaApp.pullAndConvertHostFromLocalStorage = function () {
//     console.log('profile and pulling')
//     let postStorageArrays = [];
    
//     // readd to an array so appendToPage can run on it. Make sure it is using the right order using splice, unshift and push
//     for (i in localStorage) {

//         if (i === 'hostCity') {
//             let miniArray = [];
//             miniArray.push(localStorage[i])
//             let cleanMiniArray = miniArray[0].split(',');
//             postStorageArrays[0] = cleanMiniArray;
//         } else if (i === 'hostExperience') {
//             let miniArray = [];
//             miniArray.push(localStorage[i])
//             let cleanMiniArray = miniArray[0].split(',');
//             postStorageArrays[1] = cleanMiniArray;
//         } else if (i === 'hostAtmosphere') {
//             let miniArray = [];
//             miniArray.push(localStorage[i])
//             let cleanMiniArray = miniArray[0].split(',');
//             postStorageArrays[2] = cleanMiniArray;
//         }
//         else if (i === 'hostDay') {
//             let miniArray = [];
//             miniArray.push(localStorage[i])
//             let cleanMiniArray = miniArray[0].split(',');

//             postStorageArrays[3] = cleanMiniArray;

//         } else if (i === 'hostEmail') {
//             let miniArray = [];
//             miniArray.push(localStorage[i])
//             let cleanMiniArray = miniArray[0].split(',');

//             postStorageArrays[4] = cleanMiniArray;

//         } else if (i === 'hostName') {
//             let miniArray = [];
//             miniArray.push(localStorage[i])
//             let cleanMiniArray = miniArray[0].split(',');

//             postStorageArrays[5] = cleanMiniArray;

//         } else if (i === 'hostYoga') {
//             let miniArray = [];
//             miniArray.push(localStorage[i])
//             let cleanMiniArray = miniArray[0].split(',');

//             postStorageArrays[6] = cleanMiniArray;

//         } else if (i === 'hostPrice') {
//             let miniArray = [];
//             miniArray.push(localStorage[i])
//             let cleanMiniArray = miniArray[0].split(',');

//             postStorageArrays[7] = cleanMiniArray;

//         }
//     }
//     return postStorageArrays;
// }


// function:
    // run through the object and the array holdiing the user input. 
    // if they are the same, append the data from the object to the page with .append. 
    // Also call removeCurrentData funciton above to remove data each time the user searches
    // for each city in the object, run .filter(array[array])

    
yogaApp.appendToPage = function(userInputArrays) {
    // variable to collate all similar items
    let sameItems = [];
    // set a checker if some is appended to page or not (if not, we'll ask for them to input more filter)
    let checker = 0;
    // remove current appended data if exists
    yogaApp.removeCurrentData('.results');
    
    // loop through the object
    for (i in yogaApp.groupedSessions) {        
        // loop through the array and compare array city item to object city item. Return only those that are the same
        let sameCity;
        
        let sameExperience;
        let sameAtmosphere;
        let sameDay;

        // console.log(userInputArrays);

        sameCity = userInputArrays[0].filter(function (option) {
            return option === yogaApp.groupedSessions[i]['city'];
        })
        // console.log(sameCity);

        sameExperience = userInputArrays[1].filter(function (option) {
                return option === yogaApp.groupedSessions[i]['experience'];
        })
        // console.log(sameExperience);

        sameAtmosphere = userInputArrays[2].filter(function (option) {
            return option === yogaApp.groupedSessions[i]['atmosphere'];
        })
        // console.log(sameAtmosphere);

        sameDay = userInputArrays[3].filter(function (option) {
            return option === yogaApp.groupedSessions[i]['day'];
        })
        // console.log(sameDay)
        

        sameAnyCity = userInputArrays[0].filter(function (option) {
                return option === 'any';
        })
        // console.log(sameAnyCity);

        sameAnyExperience = userInputArrays[1].filter(function (option) {
            return option === 'any';
        })
        // console.log(sameAnyExperience);

        sameAnyAtmosphere = userInputArrays[2].filter(function (option) {
            return option === 'any';
        })
        // console.log(userInputArrays[2]);


        sameAnyDay = userInputArrays[3].filter(function (option) {
            return option === 'any';
        })
        // console.log(sameAnyDay);


        // use if function to remove any undefined or replicated items of each user input (city, experience and atmosphere)
        // then collate the accurate items into one single array called sameItems
        yogaApp.cleanSimilarItems(sameCity, sameItems)
        yogaApp.cleanSimilarItems(sameExperience, sameItems)
        yogaApp.cleanSimilarItems(sameAtmosphere, sameItems)
        yogaApp.cleanSimilarItems(sameDay, sameItems)
        yogaApp.checkForAnyCity(sameAnyCity, sameItems)
        yogaApp.checkForAnyExperience(sameAnyExperience, sameItems)
        yogaApp.checkForAnyAtmosphere(sameAnyAtmosphere, sameItems)
        
        yogaApp.checkForAnyDay(sameAnyDay, sameItems)
        


        

        // grab objects with these similarities
        if (sameItems.includes(yogaApp.groupedSessions[i]['city']) && sameItems.includes(yogaApp.groupedSessions[i]['atmosphere']) && sameItems.includes(yogaApp.groupedSessions[i]['experience']) && sameItems.includes(yogaApp.groupedSessions[i]['day']) || sameItems.includes(yogaApp.groupedSessions[i]['any'])) {
            checker = checker + 1;
            $('.reveal-data').addClass('reveal-data-style');

            $('.reveal-data').append(
                
                `
                <section class='results'>
                
                <div class='option'>
                    <section class='wrapper'>
                        <div class='option-image'>
                            
                                <img alt='yoga-class-visual' class='image' src='${yogaApp.groupedSessions[i]['imageURL']}'>
                            
                        </div>
                        <div class='option-text'>
                            <p class='normal-paragraph'>Lead: </p>
                            <p class='normal-paragraph'>${yogaApp.groupedSessions[i]['name']} </p>
                            <p class='normal-paragraph'>Cost: </p>
                            <p class='normal-paragraph'>$10 </p>
                            <p class='normal-paragraph'>Where:</p>
                            <p class='normal-paragraph'>${yogaApp.groupedSessions[i]['city']}</p>
                            <p class='normal-paragraph'>Type:</p>
                            <p class='normal-paragraph'>${yogaApp.groupedSessions[i]['yoga']}</p>
                            <p class='normal-paragraph'>Area: </p>
                            <p class='normal-paragraph'>${yogaApp.groupedSessions[i]['atmosphere']}</p>
                            <p class='normal-paragraph'>Rating:</p>
                            <p class='normal-paragraph'>4.8*</p>
                        </div>
                    </section>
                </div>
                </section>
                `)  
            if (checker % 2 === 0) {
                console.log(checker)
                // $('.option').removeClass('option-one')
                $('.option').toggleClass('option-one');
                $('.normal-paragraph').toggleClass('alt-text');
                $('.image').toggleClass('box-shadow');
            } else {
                $('.normal-paragraph').toggleClass('alt-text')
                $('.option').toggleClass('option-one')
                $('.image').toggleClass('box-shadow');
            }
        } 
        

        
        

    }  
    
    // finally, outside of the for loop, scroll down to the content
    // $('html, body').animate({
    //     scrollTop: $(".reveal-data").offset().top
    // });
    // finally check that if nothing is input on the page then user gets a notification
    // yogaApp.noUserInputError(sameItems);
    // original test header
    // <div class='results'>
    //     <h1> ${yogaApp.groupedSessions[i]['name']} </h1>
    // </div >`)
}

yogaApp.appendHeader = function() {
    yogaApp.removeCurrentData('.header-wrapper')
    if ($('.title5').hasClass('hide') === false) {
        $('.title5').addClass('hide')
    }
    $('.reveal-data').prepend(
                `
                <section class='wrapper header-wrapper'>
                    <h2 class='title title2'> Personalised Options:</h2>
                </section>`)
    
}

yogaApp.appendProfile = function () {
    $('.profile-name').text(`yogi${localStorage.hostName}`)
    $('.profile-email').text(`${localStorage.hostEmail}`)
    $('.profile-price').text(`$${localStorage.hostPrice} per class`)
    $('.profile-experience').text(`${localStorage.hostExperience}`)
    $('.profile-city').text(`${localStorage.hostCity}`)
    $('.profile-atmosphere').text(`${localStorage.hostAtmosphere}`)
    $('.profile-yoga').text(`${localStorage.hostYoga}`)
    $('.profile-day').text(`${localStorage.hostDay}`)

}

// The event function that kicks off everything. This runs all the functions aboves
yogaApp.events = function() {
    console.log(localStorage);
    var $hamburger = $(".hamburger");
    var $dropdown = $(".dropdown");
    $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
        console.log('click')
        $dropdown.toggleClass('dropdown-start')
    });

    let $formExplore = $('.form-explore')
    $formExplore.on('submit', function (event) {
        // prevent default form action
        event.preventDefault();
        // create arrays to store answers
        let dayChoicesArray = [];
        let cityChoicesArray = [];
        let expChoicesArray = [];
        let atmosChoicesArray = [];

        //pull the answers
        const $dayChoice = $('select[name=date]').val();
        const $cityChoice = $('select[name=city]').val();
        const $expChoice= $('select[name=experience]').val();
        const $atmosChoice = $('select[name=atmosphere]').val();
        
        
        // store answers in individual arrays
        dayChoicesArray.push($dayChoice)
        cityChoicesArray.push($cityChoice)
        expChoicesArray.push($expChoice)
        atmosChoicesArray.push($atmosChoice)

        // then put them in one larger array of arrays
        let allChoices = [];
        allChoices[0] = cityChoicesArray;
        allChoices[1] = expChoicesArray;
        allChoices[2] = atmosChoicesArray;
        allChoices[3] = dayChoicesArray;
        console.log(allChoices)

        // collate all harder user choices into a final array
        yogaApp.saveUserToLocalStorage(allChoices);
        // yogaApp.appendHeader();
        yogaApp.appendToPage(allChoices);
        




    // $('html, body').animate({
    //     scrollTop: $(".reveal-data").offset().top
    // });
    })

    let $formGuest = $('.form-guest')
    $formGuest.on('submit', function (event) {

        // stop submit refreshing the page
        // event.preventDefault();

        // store jquery form selectors of user choices
        // const $yogaChoice = $('select[name=yoga-style]').val();
        const $dayChoice = $('select[name=date]').val();
        const $cityChoiceObject = $('input[name=city]:checked');
        const $expChoiceObject = $('input[name=experience]:checked');
        const $atmosChoiceObject = $('input[name=atmosphere]:checked');

        
        // // find the user input data for the easier to access form items, collate them into one array called subChoices
        let dayChoicesArray = [];
        // let yogaChoicesArray = [];
        let subChoices = [];
        dayChoicesArray.push($dayChoice);
        // yogaChoicesArray.push($yogaChoice);
        // subChoices.push(yogaChoicesArray);
        subChoices.push(dayChoicesArray);

        // set an object to collect all the harder form items (needed cleaning) user's answers
        let allChoices = [];
        
        // collate all harder user choices into a final array
        yogaApp.findChoicesItems($cityChoiceObject, allChoices);
        yogaApp.findChoicesItems($expChoiceObject, allChoices);
        yogaApp.findChoicesItems($atmosChoiceObject, allChoices);
        
        // collate into allChoices all user input including harder and easier items
        allChoices = allChoices.concat(subChoices);

        // loop through choices in the array with .filter. If true that city (example) = (example)
        // If these choices are in the dummy data, pull that object and put its info on the page
        
        yogaApp.saveUserToLocalStorage(allChoices);
        // yogaApp.saveObjToLocalStorage(yogaApp.groupedSessions);
        // console.log(allChoices)


        // make sure that if no data selected the user isn't sent to the explore html and the error message is shown
        if (allChoices[0].length === 0 || allChoices[0].includes('toronto') === false || allChoices[1].length === 0 || allChoices[2].length === 0) {
            event.preventDefault();
            $('.reveal-data').toggleClass('reveal-data-style2')
            $('.header-wrapper').toggleClass('hide')
            $('.title5').toggleClass('hide')
        }
         
    })
}

let $formHost = $('.form-host')
$formHost.on('submit', function (event) {

    // stop submit refreshing the page
    // event.preventDefault();

    // store jquery form selectors of user choices
    const $nameChoice = $('input[type=text]').val();
    const $emailChoice = $('input[type=email]').val();
    const $yogaChoice = $('select[name=yoga-style]').val();
    const $dayChoice = $('select[name=date]').val();
    const $cityChoiceObject = $('input[name=city]:checked');
    const $expChoiceObject = $('input[name=experience]:checked');
    const $atmosChoiceObject = $('input[name=atmosphere]:checked');
    const $priceChoice = $('input[name=price]').val();


    // // find the user input data for the single answer form items, collate them into one array called subChoices
    let nameChoiceArray = [];
    let emailChoiceArray = [];
    let dayChoicesArray = [];
    let yogaChoicesArray = [];
    let priceChoicesArray = [];
    let subChoices = [];
    nameChoiceArray.push($nameChoice);
    emailChoiceArray.push($emailChoice);
    dayChoicesArray.push($dayChoice);
    yogaChoicesArray.push($yogaChoice);
    priceChoicesArray.push($priceChoice)


    subChoices.push(nameChoiceArray);
    subChoices.push(emailChoiceArray);
    subChoices.push(yogaChoicesArray);
    subChoices.push(dayChoicesArray);
    subChoices.push(priceChoicesArray);


    // set an object to collect all the harder form items (needed cleaning) user's answers
    let allChoices = [];

    // collate all user choices that have multiple options into a final array
    yogaApp.findChoicesItems($cityChoiceObject, allChoices);
    yogaApp.findChoicesItems($expChoiceObject, allChoices);
    yogaApp.findChoicesItems($atmosChoiceObject, allChoices);

    // collate into allChoices all user input including harder and easier items
    allChoices = allChoices.concat(subChoices);

    // loop through choices in the array with .filter. If true that city (example) = (example)
    // If these choices are in the dummy data, pull that object and put its info on the page

    yogaApp.saveHostToLocalStorage(allChoices);
    // yogaApp.saveObjToLocalStorage(yogaApp.groupedSessions);
    console.log(allChoices)

    // make sure that if no data selected the user isn't sent to the explore html and the error message is shown
    if (allChoices[0].length === 0 || allChoices[0].includes('toronto') === false || allChoices[1].length === 0 || allChoices[2].length === 0 || allChoices[3][0] === '' || allChoices[4][0] === '' || allChoices[5].length === 0 || allChoices[6].length === 0 || allChoices[7][0] === '' ) {
        event.preventDefault();
        console.log('need info')
        $('.reveal-data').toggleClass('reveal-data-style2')
        $('.header-wrapper').toggleClass('hide')
        $('.title5').toggleClass('hide')
        
    }

})


yogaApp.pageLoad = function () {
    window.onload = function () {
    // if explore page do this
    if (window.location.href.indexOf('explore.html') > -1) {

        let userInput = yogaApp.pullAndConvertFromLocalStorage();

        if (userInput.length === 0 || userInput[0][0] === '') {
            userInput = yogaApp.userTickedOptions
        } 
        
        // yogaApp.appendHeader();
         
        yogaApp.appendToPage(userInput); 
        
        
    } else if (window.location.href.indexOf('profile.html') > -1) {
        console.log(localStorage.hostName)

        // if they don't have a profile, return, build a profile
        if (localStorage.hostName === undefined) {
            $('.no-account').addClass('no-account-2');
            $('.profile').addClass('hide');
            $('.join-button').text(`Sorry, you don't have a host account yet!`);
            $('.fas').addClass('hide');
            $('.no-account').html(`<a href='host.html'> <button>Go to Host Class Page to Set Up an Account</button></a>`);
            console.log('helo')

        } // if they do have a profile, build out their page 
        else {
        $('.fas').removeClass('hide');
        $('.no-account').removeClass('no-account-2');
        // $('.profile').removeClass('hide');
        // yogaApp.pullAndConvertHostFromLocalStorage();
        yogaApp.appendProfile();

        }
    } else {
        console.log('not explore or profile page');
    }
    }
}


    
yogaApp.init = function () {
    yogaApp.events();
    yogaApp.pageLoad();
    console.log(localStorage);

}


$(function () {
    yogaApp.init();
});




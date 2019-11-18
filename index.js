

// Note to Reader - this is a WIP project for 2020
    // Next Steps:
    // sub out local.storage for firebase to allow the classes set up on host.html to be the classes users see on explore.html. 
    // add user verification / profiles / passwords
    // beautify the site further with more explore options 

// create the yogaApp to store all JS
const yogaApp = {};

// create class for iteration of session to hold yoga sessions. Inside the class use a static function to allow easy creation of new session classes. This future proofs us so that its easy for users to create new classes once we have firebase set up long-term.
yogaApp.Session = class Session {
    constructor({ city, day, experience, yoga, atmosphere, imageURL, name, rating, cost}) {
        this.city = city;
        this.day = day;
        this.experience = experience;
        this.yoga = yoga;
        this.atmosphere = atmosphere;
        this.imageURL = imageURL;
        this.name = name;
        this.rating = rating;
        this.cost = cost;
    }

    static createSession({ city, day, experience, yoga, atmosphere, imageURL, name, rating, cost}) {
        return new this({
            city, day, experience, yoga, atmosphere, imageURL, name, rating, cost,
        })
    }
}

// for now, create some dummy data to represent the yoga classes. This will be subbed in for real user profiles once we include firebase
// store these profiles in larger grouped sessions object for easy access when pulling data to put on the page (see appendToPage function)
 // unsplash credit to artem-beliaikin
yogaApp.groupedSessions = {
    yogiTom: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'beginner',
        yoga: 'restorative',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/artem-beliaikin-nKCtkaW4JU4-unsplash.jpg',
        name: 'yogiTom',
        rating: 4.5,
        cost: 10
    }),
    // unsplash credit to jonathan-borba

    yogiAlex: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'intermediate',
        yoga: 'ashtanga', 
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/jonathan-borba-5IjWRNGbkYI-unsplash.jpg',
        name: 'yogiAlex',
        rating: 4.2,
        cost: 12
        
    }),
    // unsplash credit to patrick kool
    yogiSofia: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/patrick-kool-zTwmxau8DlQ-unsplash.jpg',
        name: 'yogiSofia',
        rating: 4.3,
        cost: 8
    }),

    // unsplash credit to rima kruciene
    yogiZac: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'intermediate',
        yoga: 'restorative',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/rima-kruciene-Tq9Ln3gpiG4-unsplash.jpg',
        name: 'yogiZac',
        rating: 4.3,
        cost: 7
    }),

    // unsplash credit to nate johnston
    yogiSandy: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'intermediate',
        yoga: 'ashtanga',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/nate-johnston-2gBpsNuHcyA-unsplash.jpg',
        name: 'yogiSandy',
        rating: 4.8,
        cost: 19
    }),

    // unsplash credit to simon raeker
    yogiJames: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/simon-raeker.jpg',
        name: 'yogiJames',
        rating: 4.4,
        cost: 8
    }),
    // unsplash credit to scott broome

    yogiJohn: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'beginner',
        yoga: 'restorative',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/scott-broome-cuOHHP5tx5g-unsplash.jpg',
        name: 'yogiJohn',
        rating: 4.3,
        cost: 6

    }),

     // unsplash credit to ruslan
    yogiSam: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'intermediate',
        yoga: 'ashtanga',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/ruslan-zh-i_DN1jo1iTU-unsplash.jpg',
        name: 'yogiSam',
        rating: 4.2,
        cost: 8

    }),

    // unsplash credit to kike vega
    yogiElise: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/kike-vega-F2qh3yjz6Jk-unsplash.jpg',
        name: 'yogiElise',
        rating: 5.0,
        cost: 18
    }),

    // unsplash credit to mark zamore
    yogiBella: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'beginner',
        yoga: 'restorative',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/mark-zamora-7fcSXSU-zhY-unsplash.jpg',
        name: 'yogiBella',
        rating: 4.7,
        cost: 17
    }),

        // unsplash credit to ashes sitoula
    yogiSean: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'intermediate',
        yoga: 'ashtanga',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/ashes-sitoula--8ZESyFapTk-unsplash.jpg',
        name: 'yogiSean',
        rating: 4.3,
        cost: 20
    }),
    // unsplash credit to dane wetton

    yogiRachita: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/dane-wetton-t1NEMSm1rgI-unsplash.jpg',
        name: 'yogiRachita',
        rating: 4.5,
        cost: 6
    }),
    // unsplash credit to isabell winter

    yogiPaul: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'beginner',
        yoga: 'restorative',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/isabell-winter-lzYZEDJ8fbo-unsplash.jpg',
        name: 'yogiPaul',
        rating: 4.6,
        cost: 16
    }),
    // unsplash credit to form fitness

    yogiCatri: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'intermediate',
        yoga: 'ashtanga',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/form-w0YIvob3LlI-unsplash.jpg',
        name: 'yogiCatri',
        rating: 4.9,
        cost: 30
    }),
        // unsplash credit to wesley tingey

    yogiLucy: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/wesley-tingey-57wo9F-r2-A-unsplash.jpg',
        name: 'yogiLucy',
        rating: 3.6,
        cost: 5
    }),
    // unsplash credit to samuel austin

    yogiDom: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'beginner',
        yoga: 'restorative',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/samuel-austin-0tTA6cewPr8-unsplash.jpg',
        name: 'yogiDom',
        rating: 3.7,
        cost: 16

    }),
    // unsplash credit to zoltan tasi

    yogiGenene: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'intermediate',
        yoga: 'ashtanga',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/zoltan-tasi-vHnVtLK8rCc-unsplash.jpg',
        name: 'yogiGenene',
        rating: 4.9,
        cost: 12

    }),
    // unsplash credit to mark zamora

    yogiSarah: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/mark-zamora-Y9jpiiiAAOQ-unsplash.jpg',
        name: 'yogiSarah',
        rating: 4.8,
        cost: 16
    }),
    // unsplash credit to carl newton

    yogiJack: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'advanced',
        yoga: 'restorative',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/carl-newton-iX7WedkjpUY-unsplash.jpg',
        name: 'yogiJack',
        rating: 4.6,
        cost: 13

    }),

    // unsplash credit to farsai chaikukl

    yogiGeorgia: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'beginner',
        yoga: 'ashtanga',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/farsai-chaikulngamdee-L2wq7Y3h7ag-unsplash.jpg',
        name: 'yogiGeorgia',
        rating: 4.4,
        cost: 9

    }),

    // unsplash credit to max rovensky

    yogiSally: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'intermediate',
        yoga: 'vinyasa',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/max-rovensky-fGUmhLROnPc-unsplash.jpg',
        name: 'yogiSally',
        rating: 4.2,
        cost: 14
    }),

    // unsplash credit to chris ensey

    yogiRussell: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'intermediate',
        yoga: 'restorative',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/chris-ensey-16QrjudiZnE-unsplash.jpg',
        name: 'yogiRussell',
        rating: 4.3,
        cost: 13

    }),
    // unsplash credit to alexander mills

    yogiJanet: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'advanced',
        yoga: 'ashtanga',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/alexander-mils-bpoSU5kmUfo-unsplash.jpg',
        name: 'yogiJanet',
        rating: 4.7,
        cost: 12

    }),

    // unsplash credit to william farlow

    yogiTara: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'beginner',
        yoga: 'vinyasa',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/william-farlow-IevaZPwq0mw-unsplash.jpg',
        name: 'yogiTara',
        rating: 4.8,
        cost: 12
    }),

    // unsplash credit to fabian moller

    yogiTim: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'intermediate',
        yoga: 'restorative',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/fabian-moller-gI7zgb80QWY-unsplash.jpg',
        name: 'yogiTim',
        rating: 5.0,
        cost: 14

    }),
    // unsplash credit to steve halama

    yogiPaula: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'beginner',
        yoga: 'ashtanga',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/steve-halama-tyCVZ1Aaqxo-unsplash.jpg',
        name: 'yogiPaula',
        rating: 4.8,
        cost: 16

    }),

    // unsplash credit to bekir donmez

    yogiBonnie: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'beginner',
        yoga: 'vinyasa',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/bekir-donmez-eofm5R5f9Kw-unsplash.jpg',
        name: 'yogiBonnie',
        rating: 4.4,
        cost: 17
    }),

    // unsplash credit to patrick malleret

    yogiIdris: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'beginner',
        yoga: 'restorative',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/patrick-malleret-p-v1DBkTrgo-unsplash.jpg',
        name: 'yogiIdris',
        rating: 4.6,
        cost: 18

    }),
    // unsplash credit to mark adriane

    yogiHarry: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'intermediate',
        yoga: 'ashtanga',
        atmosphere: 'studio',
        imageURL: 'assets/option-visuals/mark-adriane-muS2RraYRuQ-unsplash.jpg',
        name: 'yogiHarry',
        rating: 4.9,
        cost: 18

    }),

    // unsplash credit to aniie spraat

    yogiHolly: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/annie-spratt-8mqOw4DBBSg-unsplash.jpg',
        name: 'yogiHolly',
        rating: 3.9,
        cost: 18
    }),
    // unsplash credit to wesley tingey

    yogiStar: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'beginner',
        yoga: 'vinyasa',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/wesley-tingey-dlxNvA7pVwU-unsplash.jpg',
        name: 'yogiStar',
        rating: 3.9,
        cost: 14
    }),

    // unsplash credit to ksenia makagonova

    yogiJosh: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'beginner',
        yoga: 'vinyasa',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/ksenia-makagonova-V-TIPBoC_2M-unsplash.jpg',
        name: 'yogiJosh',
        rating: 4.5,
        cost: 6
    }),

    // unsplash credit to bruce mars

    yogiCharlotte: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'morning',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'home',
        imageURL: 'assets/option-visuals/bruce-mars-pFyKRmDiWEA-unsplash(1).jpg',
        name: 'yogiCharlotte',
        rating: 4.8,
        cost: 6
    }),

     // unsplash credit to natalie grainger

    yogiCres: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'weekend',
        experience: 'intermediate',
        yoga: 'vinyasa',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/natalie-grainger-8uB5kFKWWkk-unsplash.jpg',
        name: 'yogiCres',
        rating: 4.7,
        cost: 18
    }),

    // unsplash credit to jay castor

    yogiChris: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'evening',
        experience: 'advanced',
        yoga: 'vinyasa',
        atmosphere: 'outdoor',
        imageURL: 'assets/option-visuals/jay-castor-7AcMUSYRZpU-unsplash.jpg',
        name: 'yogiChris',
        rating: 4.5,
        cost: 40
    }),

}

// set some dummy data for if we want to show data on explore.html even if the user hasn't selected anything on guest.html
yogaApp.userTickedOptions = [['toronto'], ['beginner', 'intermediate', 'advanced'], ['studio', 'home', 'outdoor'], ['any']];

// create a function that will loop through each selected form item and push them into an array 
// also clean and remove the undefined (unfilled fields)
yogaApp.findChoicesItems = (choiceObj, finalArray) => {
    let newArray = [];
    // push each item in the chosen object into an array
    for (i = 0; i < 10; i++) {
        newArray.push(choiceObj[i]);
    };

    // remove all null / undefined elements in this array in case nothing is chosen
    let cleanedArray = newArray.filter(function (item) {
        return item != null;
    });

    // create final array of choices
    let finalChoiceArray = [];
    for (i in cleanedArray) {
        finalChoiceArray.push(cleanedArray[i].id);
    };
    finalArray.push(finalChoiceArray);
}

// write a function that quickly removes any currently appended data to the page. This allows us to re-append later
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

// a series of functions. These check in case the user has responded with 'any of the above' to city, experience, atmosphere or time. If it registers, any, it returns all options for that user input (e.g. for time - Morning, Evening and Weekend)
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
        outgoingArray.push('outdoor');
        outgoingArray.push('studio');
        outgoingArray.push('home');
    }
}

yogaApp.checkForAnyDay = function (incomingArray, outgoingArray) {
    if (incomingArray.length > 0) {
        outgoingArray.push('morning');
        outgoingArray.push('evening');
        outgoingArray.push('weekend');
    }
}

// convert the array holding the user's clicks into local storage objects as keys/values. This allows us to access this information on other html pages
yogaApp.saveUserToLocalStorage = function(userInputArrays) {
        // counter allows tracking of which user input we are up to
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
}

// same as the above function (to save to local storage object for access on subsequetn pages) but for host.html instead of guest.html
yogaApp.saveHostToLocalStorage = function (userInputArrays) {
    let counter = 0;
    
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

// function that allows us to take the data from local storage and convert it into a form that is easy to run the appendToPage function
// Key note - Make sure it is using the right order for appendToPage
yogaApp.pullAndConvertFromLocalStorage = function () {
    let postStorageArrays = [];
    
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


// Key function:
    // once the user input is ready, run through the array holding the user input. 
    // also loop through the yoga classes at the top. 
    // if they are the same, append the data from the object to the page with .append()
    // Also call removeCurrentData function above to remove data each time the user searches
yogaApp.appendToPage = function(userInputArrays) {
    // variable to collate all similar items
    let sameItems = [];
    // set a checker so we can keep track of how many we have appended (error handling and alternate styling)
    let checker = 0;
    // remove current appended data if it exists
    yogaApp.removeCurrentData('.results');
    
    // loop through the yoga instructor JS classes 
    for (i in yogaApp.groupedSessions) {        
        // loop through the array and compare array city item to object city item. Return only those that are the same
        let sameCity;
        let sameExperience;
        let sameAtmosphere;
        let sameDay;

        sameCity = userInputArrays[0].filter(function (option) {
            return option === yogaApp.groupedSessions[i]['city'];
        })

        sameExperience = userInputArrays[1].filter(function (option) {
                return option === yogaApp.groupedSessions[i]['experience'];
        })

        sameAtmosphere = userInputArrays[2].filter(function (option) {
            return option === yogaApp.groupedSessions[i]['atmosphere'];
        })

        sameDay = userInputArrays[3].filter(function (option) {
            return option === yogaApp.groupedSessions[i]['day'];
        })
        
        sameAnyCity = userInputArrays[0].filter(function (option) {
                return option === 'any';
        })

        sameAnyExperience = userInputArrays[1].filter(function (option) {
            return option === 'any';
        })

        sameAnyAtmosphere = userInputArrays[2].filter(function (option) {
            return option === 'any';
        })


        sameAnyDay = userInputArrays[3].filter(function (option) {
            return option === 'any';
        })


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
        


        

        // if all the similarities that the user has specified come out as accurate, then append to page with relevant data from the JS classes at the top. then add to checker counter
        if (sameItems.includes(yogaApp.groupedSessions[i]['city']) && sameItems.includes(yogaApp.groupedSessions[i]['atmosphere']) && sameItems.includes(yogaApp.groupedSessions[i]['experience']) && sameItems.includes(yogaApp.groupedSessions[i]['day']) || sameItems.includes(yogaApp.groupedSessions[i]['any'])) {
            checker = checker + 1;
            const $revealData = $('.reveal-data');
            $revealData.addClass('reveal-data-style');

            $revealData.append(
                
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
                            <p class='normal-paragraph'>$${yogaApp.groupedSessions[i]['cost']} </p>
                            <p class='normal-paragraph'>Where:</p>
                            <p class='normal-paragraph'>${yogaApp.groupedSessions[i]['city']}</p>
                            <p class='normal-paragraph'>Type:</p>
                            <p class='normal-paragraph'>${yogaApp.groupedSessions[i]['yoga']}</p>
                            <p class='normal-paragraph'>Area: </p>
                            <p class='normal-paragraph'>${yogaApp.groupedSessions[i]['atmosphere']}</p>
                            <p class='normal-paragraph'>Rating:</p>
                            <p class='normal-paragraph'>${yogaApp.groupedSessions[i]['rating']}*</p>
                        </div>
                    </section>
                </div>
                </section>
                `)  
            // toggle different styling for alternate appending. One is a darker background, the other lighter
            const $option = $('.option');
            const $normalPara = $('.normal-paragraph');
            const $image = $('.image');
            if (checker % 2 === 0) {
                $option.toggleClass('option-one');
                $normalPara.toggleClass('alt-text');
                $image .toggleClass('box-shadow');
            } else {
                $normalPara.toggleClass('alt-text')
                $option.toggleClass('option-one')
                $image .toggleClass('box-shadow');
            }
        } 
    }  
}

// similar to the above but instead for host.html.
// this takes the data input and builds the user a localStorage profile for now
// long-term - will create new JS classes and store them in firebase
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
    // click event function to make sure the hamburger works
    const $hamburger = $(".hamburger");
    const $dropdown = $(".dropdown");
    $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
        $dropdown.toggleClass('dropdown-start')
    });

    // click event that allows us to update the items appended on explore.html based on the filter buttons at the top of the page
    const $formExplore = $('.form-explore')
    $formExplore.on('submit', function (event) {
        // prevent default form action
        event.preventDefault();
        // create arrays to store answers
        let dayChoicesArray = [];
        let cityChoicesArray = [];
        let expChoicesArray = [];
        let atmosChoicesArray = [];

        //pull the answers from the mini-form
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

        // collate all harder user choices into a final array and save to local storage. This makes sure that it doesn't clash with the save to storage on guest.html
        yogaApp.saveUserToLocalStorage(allChoices);
        yogaApp.appendToPage(allChoices);
    })

     // click event that allows us to set preferences on guest.html and stores them to local storage
     // then sends user to explore.html for appending of the data to the page 
     // also blocks the user in case any form field is missed

    const $formGuest = $('.form-guest')
    $formGuest.on('submit', function (event) {
 
        const $dayChoice = $('select[name=date]').val();
        const $cityChoiceObject = $('input[name=city]:checked');
        const $expChoiceObject = $('input[name=experience]:checked');
        const $atmosChoiceObject = $('input[name=atmosphere]:checked');
        
        // // find the user input data for the easier to access form items, collate them into one array called subChoices
        let dayChoicesArray = [];
        // let yogaChoicesArray = [];
        let subChoices = [];
        dayChoicesArray.push($dayChoice);
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


        // make sure that if no data selected the user isn't sent to the explore html and the error message is shown
        if (allChoices[0].length === 0 || allChoices[0].includes('toronto') === false || allChoices[1].length === 0 || allChoices[2].length === 0) {
            event.preventDefault();
            $('.reveal-data').toggleClass('reveal-data-style2')
            $('.header-wrapper').toggleClass('hide')
            $('.title5').toggleClass('hide')
        }
         
    })
}

  // similar to the above but for host. click event that allows us to set preferences on host.html and stores them to local storage
     // then sends user to profile.html for appending of the data to the page 
     // also blocks the user in case any form field is missed
const $formHost = $('.form-host')
$formHost.on('submit', function (event) {

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

    // make sure that if no data selected the user isn't sent to the explore html and the error message is shown
    if (allChoices[0].length === 0 || allChoices[0].includes('toronto') === false || allChoices[1].length === 0 || allChoices[2].length === 0 || allChoices[3][0] === '' || allChoices[4][0] === '' || allChoices[5].length === 0 || allChoices[6].length === 0 || allChoices[7][0] === '' ) {
        console.log('fire')
        event.preventDefault();
        $('.reveal-data').toggleClass('reveal-data-style2')
        $('.header-wrapper').toggleClass('hide')
        // $('.title5').toggleClass('hide')
        
    }

})

// once sent to explore.html / profile.html
     // pull data from local storage
     // append it to the page
     // back-up options in case of no user input (for explore.html append everything to the page / for profile.html, highlight that they don't have an accoutn and push them to host.html)
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

        // if they don't have a profile, return, build a profile
        if (localStorage.hostName === undefined) {
            $('.no-account').addClass('no-account-2');
            $('.profile').addClass('hide');
            $('.join-button').text(`Sorry, you don't have a host account yet!`);
            $('.fas').addClass('hide');
            $('.no-account').html(`<a href='host.html'> <button>Go to Host Class Page to Set Up an Account</button></a>`);

        } // if they do have a profile, build out their page 
        else {
        $('.fas').removeClass('hide');
        $('.no-account').removeClass('no-account-2');
        // $('.profile').removeClass('hide');
        // yogaApp.pullAndConvertHostFromLocalStorage();
        yogaApp.appendProfile();

        }
    } 
    }
}


// initial function that kicks off the two main categories of programming i) on load (= explore.html / profile.html) and ii) on click (=guest.html, host.html, explore.html)
yogaApp.init = function () {
    yogaApp.events();
    yogaApp.pageLoad();
}

// run init in jquery
$(function () {
    yogaApp.init();
});




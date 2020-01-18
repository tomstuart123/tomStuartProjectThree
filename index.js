// LONG TERM STEPS:
    // add mapbox to find the class nearest you
    // Add chat functionality
    // beautify the site further with more explore options (i.e. go outdoor visual) 


// create the yogaApp to store all JS
const yogaApp = {};

yogaApp.dbRef = firebase.database();

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
yogaApp.saveHostToFirebase = function (userInputArrays) {
    // console.log(userInputArrays)
    const classObject = {
        "city": userInputArrays[1][0],
        "day": userInputArrays[0][0],
        "experience": userInputArrays[2][0],
        "yoga": userInputArrays[6][0],
        "atmosphere": userInputArrays[3][0],
        "imageURL": userInputArrays[9][0],
        "name": 'yogi' + userInputArrays[4][0],
        "email": userInputArrays[5][0],
        "rating": 4.3,
        "cost": userInputArrays[8][0],
    }
    const classesRef = yogaApp.dbRef.ref('classes');
    classesRef.push(classObject)
    console.log(classObject)
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


    const classesRef = yogaApp.dbRef.ref('classes');

    classesRef.on("value", function (snapshot) {
        // console.log(snapshot.val())
        snapshot.forEach(function (i) {
            // var key = childSnapshot.key();
            var childData = i.val();
            // console.log(key)
            let sameCity;
            let sameExperience;
            let sameAtmosphere;
            let sameDay;
            sameCity = userInputArrays[0].filter(function (option) {
                return option === childData.city;
            })
            sameExperience = userInputArrays[1].filter(function (option) {
                // console.log(yogaApp.groupedSessions[i]['experience']);
                return option === childData.experience;

            })

            sameAtmosphere = userInputArrays[2].filter(function (option) {
                return option === childData.atmosphere;
            })

            sameDay = userInputArrays[3].filter(function (option) {
                return option === childData.day;
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
            yogaApp.cleanSimilarItems(sameCity, sameItems)
            yogaApp.cleanSimilarItems(sameExperience, sameItems)
            yogaApp.cleanSimilarItems(sameAtmosphere, sameItems)
            yogaApp.cleanSimilarItems(sameDay, sameItems)
            yogaApp.checkForAnyCity(sameAnyCity, sameItems)
            yogaApp.checkForAnyExperience(sameAnyExperience, sameItems)
            yogaApp.checkForAnyAtmosphere(sameAnyAtmosphere, sameItems)

            yogaApp.checkForAnyDay(sameAnyDay, sameItems);

            // console.log(sameItems)

            // if all the similarities that the user has specified come out as accurate, then append to page with relevant data from the JS classes at the top. then add to checker counter
            if (sameItems.includes(childData.city) && sameItems.includes(childData.atmosphere) && sameItems.includes(childData.experience) && sameItems.includes(childData.day) || sameItems.includes(childData.any)) {
                checker = checker + 1;
                const $revealData = $('.reveal-data');
                $revealData.addClass('reveal-data-style');

                $revealData.append(

                    `
                <section class='results'>
                
                <div class='option'>
                    <section class='wrapper'>
                        <div class='option-image'>
                            
                                <img alt='yoga-class-visual' class='image' src='${childData.imageURL}'>
                            
                        </div>
                        <div class='option-text'>
                            <p class='normal-paragraph'>Lead: </p>
                            <p class='normal-paragraph'>${childData.name} </p>
                            <p class='normal-paragraph'>Cost/hr: </p>
                            <p class='normal-paragraph'>$${childData.cost} </p>
                            <p class='normal-paragraph'>Where:</p>
                            <p class='normal-paragraph'>${childData.city}</p>
                            <p class='normal-paragraph'>Type:</p>
                            <p class='normal-paragraph'>${childData.yoga}</p>
                            <p class='normal-paragraph'>Area: </p>
                            <p class='normal-paragraph'>${childData.atmosphere}</p>
                            <p class='normal-paragraph'>Rating:</p>
                            <p class='normal-paragraph'>${childData.rating}*</p>
                            <a href='mailto:${childData.email}' class='optionContact'>Email them to Join the Class</a>
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
                    $image.toggleClass('box-shadow');
                } else {
                    $normalPara.toggleClass('alt-text')
                    $option.toggleClass('option-one')
                    $image.toggleClass('box-shadow');
                }
            } 
        });
    })

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
        // $('title6').toggleClass('hide');
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

    const $formGuest = $('#form-guest')
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
    const $nameChoice = $('input[name=name]').val();
    const $emailChoice = $('input[type=email]').val();
    const $yogaChoice = $('select[name=yoga-style]').val();
    // const $dayChoice = $('select[name=date]').val();
    const $dayChoiceObject = $('input[name=date]:checked');
    const $cityChoiceObject = $('input[name=city]:checked');
    const $expChoiceObject = $('input[name=experience]:checked');
    const $atmosChoiceObject = $('input[name=atmosphere]:checked');
    const $priceChoice = $('input[name=price]').val();
    const $imageChoice = $('input[name=imgURL]').val();
    console.log($imageChoice)
    


    // // find the user input data for the single answer form items, collate them into one array called subChoices
    let nameChoiceArray = [];
    let imageChoiceArray = [];
    let emailChoiceArray = [];
    let dayChoicesArray = [];
    let yogaChoicesArray = [];
    let priceChoicesArray = [];
    let subChoices = [];
    nameChoiceArray.push($nameChoice);
    emailChoiceArray.push($emailChoice);
    yogaChoicesArray.push($yogaChoice);
    priceChoicesArray.push($priceChoice)
    imageChoiceArray.push($imageChoice);
    



    subChoices.push(nameChoiceArray);
    subChoices.push(emailChoiceArray);
    subChoices.push(yogaChoicesArray);
    subChoices.push(dayChoicesArray);
    subChoices.push(priceChoicesArray);
    subChoices.push(imageChoiceArray);
    


    // set an object to collect all the harder form items (needed cleaning) user's answers
    let allChoices = [];

    // collate all user choices that have multiple options into a final array
    yogaApp.findChoicesItems($dayChoiceObject, allChoices);
    yogaApp.findChoicesItems($cityChoiceObject, allChoices);
    yogaApp.findChoicesItems($expChoiceObject, allChoices);
    yogaApp.findChoicesItems($atmosChoiceObject, allChoices);


    // collate into allChoices all user input including harder and easier items
    allChoices = allChoices.concat(subChoices);
    // make sure that if no data selected the user isn't sent to the explore html and the error message is shown
    if (allChoices[0].length === 0 || allChoices[1].includes('toronto') === false || allChoices[1].length === 0 || allChoices[2].length === 0 || allChoices[3].length === 0 || allChoices[4][0] === '' || allChoices[5][0] === '' || allChoices[6].length === 0 || allChoices[8][0] === '' || allChoices[9][0] === '') {
        event.preventDefault();
        $('.reveal-data').toggleClass('reveal-data-style2')
        $('.header-wrapper').toggleClass('hide')
        // $('.title5').toggleClass('hide')

    } else {
        event.preventDefault();
        alert("Great news, your class has been created and you and users can find it on the explore page. Lets go have a look now")

       
        yogaApp.saveHostToFirebase(allChoices);
        let cleanFilter = [["any"], ["any"], ["any"], ["any"]]
        yogaApp.saveUserToLocalStorage(cleanFilter);
        
       
    }
    // reset filters on explore page to any
    
    // loop through choices in the array with .filter. If true that city (example) = (example)
    // If these choices are in the dummy data, pull that object and put its info on the page

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




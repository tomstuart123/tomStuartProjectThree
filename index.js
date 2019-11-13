// Long-Term SITE STRUCTURE

    // LANDING PAGE (MVP)
        // A landing page
        // Base Description
        // Two buttons driving tow host or guest
    // Guest (MVP)
        //PAGE 1
            // Quiz (where do you live, day you want yoga session, number of attendees, favourite type of yoga)
            // Explore yoga options
            // NAV - back to guest or Host
        // Page 2
            // Options offered and shown depend on what parameters they prefer
            // filter buttons at the top
            // Also button to go back to the form 

    
    // Host (STRETCH-GOAL)
        // Page 1
            // Quiz (where do you want to host, where is this, how many people can you take, type of yoga, your experience level) >> 
            // Explore what others are doing >> PUSH TO HOST SITE
        // Page 2
            //  Profile review
            //  submit button
        // Page 3
            // Add profile to the profile options

// PSEUDO CODE

    // MVP - PSEUDO CODE
    // guest.html shows a form with how they want their yoga class (e.g. level of experience and atmosphere) (STRETCH GOAL - add more filter options e.g. day of the week)
    // on submit button of form, i) check the checked fields in the form and ii) append the relevant class options to the page.
    // HOW
            // I have created javascript objects of each yoga class that matches the items in the form field. They also have a name of the Yoga teacher and a visual
            // on click of submit event .preventdefault()
            // then find the checked answer to each question in the form using ':checked'
            // run through the object vs. these ':checked' responses using .filter()
            // .append() only the objects that meet the correct criteria to the page below it (or STRETCH GOAL - send them another html site)
            // finally, use an automatic scroll down feature so the user can view their options easily

    // STRETCH GOAL 1.1 - PSEUDO-CODE
    // on explore.html, if user clicks on a class, user isn't sent to a coming soon
    // instead user is sent to a standard profile page html. Depending on which class is clicked, loop through the corresponding JS object holding that class. Populate the profile page with the class data from the object using .text(), .html() etc. 

    // STRETCH GOAL 1.2 - PSEUDO-CODE
    // Create landingPage.html, show user buttons of Am I host or a guest yogi 
    // on click of host ->>>  send the user to host.html. 
    // host.html This is very similar to guest.html and its form. However, added questions that those hosting a yoga class would need to answer (e.g. name, email etc).
    // on submit of the form, it checks the form using :checked and uses the data to create a javascript object for the class. It also sends the user to profilePage.html
    // On profilePage.html, it would loop throguh the javascript object and populate the profile page with data from the javascript object

    // STRETCH GOAL 1.3 - PSEUDO-CODE 
    // filter buttons at the top of explore html that automatically re-adjusts the page 
    // if x filter button is toggled, loop through the opjects again and re-append based on the updated results

    // LONG-TERM GOAL 2.1 (not for this project)
    // Use firebase to link the profiles created in profile.html with the classes that the user sees

    // LONG-TERM GOAL 2.2 (not for this project)
    // set up verification of hosts on profile creation that accepts a userName, password etc. Store this profile in a database


// REAL CODE

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
        day: 'Saturday',
        experience: 'Intermediate',
        yoga: 'Slow flow',
        atmosphere: 'Outdoor',
        imageURL: 'assets/option-visuals/artem-beliaikin-nKCtkaW4JU4-unsplash.jpg',
        name: 'yogiTom',

    }),

    yogiAlex: yogaApp.Session.createSession({
        city: 'new-york',
        day: 'Monday',
        experience: 'Beginner',
        yoga: 'Power flow', 
        atmosphere: 'Outdoor',
        imageURL: 'assets/option-visuals/jonathan-borba-5IjWRNGbkYI-unsplash.jpg',
        name: 'yogiAlex',
        
    }),

    yogiSofia: yogaApp.Session.createSession({
        city: 'london',
        day: 'Wednesday',
        experience: 'Advanced',
        yoga: 'Ashtanga',
        atmosphere: 'Studio',
        imageURL: 'assets/option-visuals/nate-johnston-2gBpsNuHcyA-unsplash.jpg',
        name: 'yogiSofia',
    }),

    yogiZac: yogaApp.Session.createSession({
        city: 'new-york',
        day: 'Friday',
        experience: 'Beginner',
        yoga: 'Vinyasa',
        atmosphere: 'Studio',
        imageURL: 'assets/option-visuals/simon-raeker.jpg',
        name: 'yogiZac',
    }),

    yogiSandy: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'Thursday',
        experience: 'Intermediate',
        yoga: 'Ashtanga',
        atmosphere: 'Studio',
        imageURL: 'assets/option-visuals/nate-johnston-2gBpsNuHcyA-unsplash.jpg',
        name: 'yogiSandy',
    }),

    yogiJames: yogaApp.Session.createSession({
        city: 'toronto',
        day: 'Saturday',
        experience: 'Advanced',
        yoga: 'Slow flow',
        atmosphere: 'Outdoor',
        imageURL: 'assets/option-visuals/simon-raeker.jpg',
        name: 'yogiJames',
    }),
}

console.log(yogaApp.groupedSessions.yogiTom['atmosphere']);
console.log(yogaApp.groupedSessions.yogiZac['yoga']);
console.log(yogaApp.groupedSessions.yogiSofia['experience']);
console.log(yogaApp.groupedSessions.yogiAlex['imageURL']);

// function:
    // run through the object with a for loop
    // for each city in the object, run .filter(array[array]) 
yogaApp.appendToPage = function(array1) {
    // variable to collate all similar items
    let sameItems = [];
    // loop through the object
    for (i in yogaApp.groupedSessions) {
        
        // loop through the array and compare array city item to object city item. Return only those that are the same
        let sameCity = array1[0].filter(function (option) {
            return option === yogaApp.groupedSessions[i]['city']
        })
        // collate similar ones in array
        if (sameCity[0] != null) {
            sameItems.push(sameCity[0]);
        }
        // grab objects with these similarities
        if (array1[0].includes(yogaApp.groupedSessions[i]['city'])) {
            // console.log(yogaApp.groupedSessions[i]['name'])
            $('.reveal-data').append(
                `<div class='results'>
                    <h1> ${yogaApp.groupedSessions[i]['name']} </h1>
                </div`)
        } 
        // grab objects with these similarities
    }   
    console.log(sameItems);  
}



// store guest
yogaApp.events = function() {
    
    let $formGuest = $('.form-guest')
    $formGuest.on('submit', function (event) {

        // stop submit refreshing the page
        event.preventDefault();

        // store jquery form selectors of user choices
        const $yogaChoice = $('select[name=yoga-style]').val();
        const $dayChoice = $('select[name=date]').val();
        const $cityChoiceObject = $('input[name=city]:checked');
        const $expChoiceObject = $('input[name=experience]:checked');
        const $atmosChoiceObject = $('input[name=atmosphere]:checked');

        
        // for the easier to access form items, collate them into one array called subChoices
        let dayChoicesArray = [];
        let yogaChoicesArray = [];
        let subChoices = [];
        dayChoicesArray.push($dayChoice);
        yogaChoicesArray.push($yogaChoice);
        subChoices.push(yogaChoicesArray);
        subChoices.push(dayChoicesArray);

        // set an object to collect all the harder form items (needed cleaning) user's answers
        let allChoices = [];

        // use a function loop through each harder form item choice object to deliver the choices we want in an array 
        const findChoicesItems = (choiceObj) => {
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
            allChoices.push(finalChoiceArray);


        }
        
        // collate all user choices into a final array
        findChoicesItems($cityChoiceObject);
        findChoicesItems($expChoiceObject);
        findChoicesItems($atmosChoiceObject);
        allChoices = allChoices.concat(subChoices);

        console.log(allChoices);
        yogaApp.appendToPage(allChoices);

        // loop through choices in the array with .filter. If true that city (example) = (example)
        // If these choices are in the dummy data, pull that object

        // console.log(yogaApp.groupedSessions.tomsBeachYoga['atmosphere']);
         
    })
}
    
yogaApp.init = function () {
    yogaApp.events();
}


$(function () {
    yogaApp.init();
});




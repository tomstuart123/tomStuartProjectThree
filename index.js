// SITE STRUCTURE

    // LANDING PAGE (MVP)
        // Am I a host or guest 
    // HOST (MVP)
        //PAGE 1
            // Quiz (where do you live, day you want yoga session, number of attendees, favourite type of yoga)
            // Explore yoga options
            // NAV - back to guest or Host
        // Page 2
            // Options offered and shown depend on what parameters they prefer
            // filter buttons at the top
            // Also button to go back to the form 

    
    // GUEST (STRETCH-GOAL)
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
    // On landingPage.html, show user buttons of Am I host or a guest yogi 
    // on click of host ->>> get sent to coming soon page
    // on click of guest ->>> get sent to guest.html


    // guest.html shows a form with how they want their yoga class (e.g. city, day of the week, level of experience, type of yoga etc.)
    // on submit button of form, i) check the checked fields in the form and ii) send the user to explore.html
            // in backend there is an object of each yoga class
            // on click event prevent default
            // then find the checked answer to each question in the form using ':checked'
            // run through the object vs. these ':checked' responses using .filter()
            // .append() only the objects that meet the correct criteria to explore.html
            // send the user to explore.html
    // in explore html user can click into each option and they will get a coming soon message

    // STRETCH GOAL 1.1 - PSEUDO-CODE
    // on explore.html, if user clicks on a class, user isn't sent to a coming soon
    // instead user is sent to a standard profile page html. Depending on which class is clicked, loop through the corresponding JS object holding that class. Populate the profile page with the class data from the object using .text(), .html() etc. 

    // STRETCH GOAL 1.2 - PSEUDO-CODE
    // on landingPage.html, if user clicks host don't send them to coming soon page
    // send the user to host.html. This is very similar to guest.html and its form. However, added questions that those hosting a yoga class would need to answer (e.g. name, email etc).
    // on submit of the form, it checks the form using :checked and uses the data to create a javascript object for the class. It also sends the user to profilePage.html
    // On profilePage.html, it would loop throguh the javascript object and populate the profile page with data from the javascript object

    // STRETCH GOAL 1.3 - PSEUDO-CODE 
    // filter buttons at the top of explore html that automatically re-adjusts the page 
    // if x filter button is toggled, loop through the opjects again and re-append based on the updated results

    // LONG-TERM GOAL 2.1 (not for this project)
    // Use firebase to link the profiles created in profile.html with the classes that the user sees

    // LONG-TERM GOAL 2.2 (not for this project)
    // set up verification of hosts on profile creation that accepts a userName, password etc. Store this profile in a database






// jquery set up
$(function () {
    // store guest
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
        

        // use a function loop through each choice object to deliver the choices we want in an array
        const findChoicesItems = (choiceObj) => {
            let newArray = [];
            // push each item in the chosen object into an array
            for (i = 0; i < 10; i++) {
                newArray.push(choiceObj[i])
            }

            // remove all null / undefined elements in this array in case nothing is chosen
            const cleanedArray = newArray.filter(function (item) {
                return item != null;
            });

            // create final array of choices
            let finalChoiceArray = [];
            for (i in cleanedArray) {
                finalChoiceArray.push(cleanedArray[i].id);
            };
            return finalChoiceArray;
        }

        // store the final choices via funciton in an array for each option. We can then filter the yoga classes based on this
        let cityChoicesArray = findChoicesItems($cityChoiceObject);
        let dayChoicesArray = [];
        dayChoicesArray.push($dayChoice)
        let expChoicesArray = findChoicesItems($expChoiceObject);
        let yogaChoicesArray = [];
        yogaChoicesArray.push($yogaChoice)
        let atmosChoicesArray = findChoicesItems($atmosChoiceObject);

        // console.log(cityChoicesArray)
        // console.log(dayChoicesArray)
        // console.log(yogaChoicesArray)
        // console.log(expChoicesArray)
        // console.log(atmosChoicesArray)

    })
});




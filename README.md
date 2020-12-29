# In a Nutshell...

## Designed & Developed by Jacob Roos

## Code Institute Milestone Project 2

![Am I Responsive Image](assets/images/readme-images/amiresponsive.jpg)

In a Nutshell is a website that has been designed to display information on a selection of
common edible nuts. The aim is to provide a small hub of information displayed in a visually attractive way, 
focussing on interaction and UX design.  A live version of the site is available [HERE](https://jacobroos87.github.io/In-a-Nutshell/).

## UX

### Objectives

* The website will be simple but clear in its design 

### User Stories

- As a visitor to the site I want to be able to see the purpose of the site clearly
- As a visitor I'd like the navigation to be simple and easy to follow
- As a visitor I want the site to be visually appealing and have a relevant colour scheme 
- As a visitor I want to be able to select a nut and then for the relevant data to be displayed
- As a visitor I'd like to see nutritional data on the chosen nut
- As a visitor I'd like to be able to see production data for the selected nut
- As a visitor I want to enjoy being on the site and not be overwhelmed with the amount of data
- As a visitor I want to be able to contact the designer for more information or feedback
- As a visitor I'd like some humour added to the site to make it feel less serious

### Wireframes



## Features

### Navbar

* The Navbar has a Navbar brand for the website logo and 4 addition links - Info, Data, Jokes & Contact
* All the links have a hover effect and an active state when selected
* Bootstrap was used to create a collabsible dropdown (hamburger menu) for smaller devices
* All 4 links on arriving to te site are hidden until a nut is selected and the data loaded

### About

* This is a small section as an introduction to the site with a step-by-step and a selected nut indicator
* As the user makes their choice of nut the highlighted state of the text is moved to the second step
* The nut selected div is filled with the name of the nut that gets selected
* This section stacks for smaller devices

### Nut Selector

* **The lower sections and navbar are only made visible once the user selects a nut**
* The selector is made up of 9 images that are clickable and serves as the main starting point of the site
* Each image has a hover effect that pulses up and down and an active state with a white background
* The JS functionality links heavily to these images and on click displays all the other sections and navigation links
* The sizing of the images adjust to keep the 3x3 formation for all devices

### Nut Information

* The information is taken from the nutInfo key in the nutData Object and then displayed in the section
* The section includes the nut name and a small paragraph about the nut
* On click the information fades in to improve UX
* The width of the paragraph is adjust for smaller devices including the font-size

### Nut Nutrition

* This layout is focussed around an extensive table that mimicks a typical nutrition label
* The information displayed within the table is dynamic and changes with each nut
* The FDC API was used for the nutritional data with each nut having a unique ID which is extracted from the nutData Object
* The Calorie count for each nut (based on 100g) is calculated using the API data and JS Math functions
* The label is resized for smaller devices and is stacked with the other elements in the section

### Nut Central Image

* For larger devices there is an image of each nut in its raw form which changes with the nut selected
* This is removed for smaller devices to improve UX

### Nut Production data

* This section is focussed on the C3.js framework to display data from the nutData object 
* The chart is dynamic and changes values based on the selected nut
* The size of the chart is adjusted for smaller devices and stacks under the nutrition label

### Joke Generator

* This section has been designed with a 2 sided, 50/50 theme in mind - one for the joke and the other for the answer
* There is a central button that changes depending on whether you want to generate a joke or reveal the answer
* The data for the section is pulled in from a local json file which can be viewed [here](assets/data.json).
* The generator loops through the jokes and has been developed to be easily updated via the json file 
* The section also stacks for smaller devices but maintains the 50/50 layout

### Contact Form

* This was added with Bootstrap and adjusted to suite the project
* The blurb above the form was added to entice the user to contact for more data and to potentially submit extra jokes
* The form has been linked with email.js  and provides an auto-reply and a submission email to the email.js account holder
* The form has required for all the sections and display relevant validation errors 
* The form also has a success/error modal that pops up once the submission has been made
* The form is resized for smaller devices 

### Footer

* The footer is also hideen until the user selects a nut
* All social media icons have been added redirecting and opening in a new tab with the addition of _blank

## Technologies Used

### Languages

- #### HTML, CSS, JavaScript

### Libraries and Frameworks

* #### Bootstrap
    * Used for layout contact form and navbar 
* #### Font Awesome
    * Used for social icons and back to top arrow
* #### Google Fonts
    * Used for site fonts [**Concert One & PT sans**]
* #### jQuery
    * Used for site manipulation and to simplify JavaScript selectors
* #### C3.js
    * Used to generate the graph for the Nut Production Data [**framework is dependent on D3.js**]
* #### Jasmine
    * Used to test site functionality

### API

* #### Email.js
    * Used to send contact form submission data to developer and response to user
* #### FoodData Central API
    * Used to populate nutrition label with current data

## Testing



### Functionality in other browsers

## Deployment

## Deployment & Local Deploy

### Github Pages Deployment

* Once Project was finished it was pushed to Github.
* Head to Github.com, login, then select the project repository.
* Click the settings tab and scroll down to the Github Pages section.
* Select the Master Branch in the "Source" section, followed by the root folder.
* Click save and the page should become live on the link provided above.

### Local Deployment

* Login to Github and select the project repository.
* Click on the Gitpod dropdown and download the files as a ZIP.
* Ensure that Git software is installed locally.
* Expand the ZIP file and double click the index.html file
* The project can also be cloned within the terminal using git clone

## Credits

### Content

All content on the site was designed and written by myself 

### Media

All images for the site were sourced from [Shutterstock](www.shutterstock.com)
The files were downloaded as vector files and then resized for their various applications 

## Acknowledgements

### Websites and Books used for information:

#### Websites:

* Stack Oveflow
* w3schools
* CSS-tricks
* FDC API Guide
* YouTube Channels
    * Dev Ed
    * DesignCourse
    * The Coding Train


#### Books:

* Head First HTML & CSS - *O'reilly*
* Head First Javascript Programming - *O'reilly*
* JavaScript Testing with Jasmine - *O'reilly*
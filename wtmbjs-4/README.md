# WTM Berlin - Homework 4


1.  Extend your NodeJS application by implemeting a web server using Express.js framework
2.  Expose the capabilities of your application through URLs
3.  Make sure to add as many URLs as possible for creating / fetching / deleting resources
4.  Add at least one URL which does a complex operation. Examples: Make a user attend a meetup, make a user comment on a movie
5.  Add layout.pug file in your application under views folder
6.  Display the data in the browser using pug files. Extend your pug templates from layout.pug.

## Technologies Used

-   JavaScript
-   Github

## How to Use
Clone the repository:

    $ git clone https://github.com/cerensolpan/WTMB_Projects.git
    
Change into the directory:

    $ cd wtmbjs-4

Install the npm packages:

    $ npm install

Run the project:

    $ node index.js


## Instructions

 -  Get/Post/Delete data using axios to database on created URL.
  
Example:

    axios.post('/url', { name: 'Ceren'}).then(console.log)
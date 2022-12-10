# Stand Up Comedy Reviews

## How to Install
- Once in this application's GitHub repository, create a copy for yourself by clicking the fork button. In your own fork, click the 'Code' button and select SSH to copy the SSH key.
- Open your Command Line Interface and go to the directory where you want to store your new repo. Type in 'git clone' followed by the SSH key you copied and press enter to run the command.
- Then simply head into that new directory to begin working with the application.

## Setup

- Now that you have your own version you can get started by running a few commands in the terminal to get the backend up and running:

```
/phase-4-project$ bundle install 
/phase-4-project$ rails db:migrate
/phase-4-project$ rails db:seed
/phase-4-project$ rails s  
```

This will run the backend server on http://localhost:3000/.

- For the frontend:

```
/phase-4-project$ cd client
/phase-4-project/client$ npm install
/phase-4-project/client$ npm start
```

This will run the frontend server on http://localhost:4000/.

## How to Use
- Create an account by clicking on the create account button and filling in the corresponding fields and submitting the form
- Login by clicking the login button then filling out the username and password fields and submitting the login form
- Once logged in you can do the following:
  - See your reviews and the comedians you have reviewed on the home page
  - If you have no reviews, proceed to the comedian page by clicking the button on the navbar
  - On the comedians page, click on a comedian's name to see their information
  - Once on a single comedian's page, click see reviews to see all their reviews or click leave a review to create your own review by filling in the information
  - After filling it out you will be redirected to the comedians reviews page where your new review will show
  - You can edit the review by going back to your home page, clicking show my reviews and then clicking edit review on the corresponding review you wish to edit
    - You can do the same to delete a review except by clicking the delete review button instead
  - You can also add a comedian by clicking the add a comedian text on the comedians page and filling out the corresponding information after that

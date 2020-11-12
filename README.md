## Gallery App

A gallery app where you can search for photos of things you are curious about and see details about the photo.
 
## Getting Started


The page presents photos related to the word you're looking for. App includes three page type:


- The gallery page consists of a list of photos related to the searched word.
- The photo detail page consists of the clicked photo, the photo owner, description and contact information, if any.

All project data fetched from the Unsplash API endpoints.


## Installing

  ```s
  git clone git@github.com:yasincaliskan/Gallery.git
  cd gallery
   ```

To use Unsplash API it is necessary to add the .env file to the root directory.

 ```
 -node_modules
 -public
 -src
 .env  <--
 .package.json
```

You can register [here](https://unsplash.com/join) to quickly get the API Key. Then you need to define the following in .env file.

```REACT_APP_PHOTO_API_KEY = YOUR_API_KEY```

  

In the project directory, you can run:

 ```sh 
 npm install 
 npm start 
  ```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Architecture

- This project was created with [Create React App](https://github.com/facebookincubator/create-react-app).
- [Redux](https://redux.js.org/) is used as a state container.
- [React Router Dom](https://reactrouter.com/) is used for routing.
- [Axios](https://github.com/axios/axios) library is used as a promise based HTTP client.
- The application is almost responsive. :)
- Node version ```v12.18.3 ``` is used.

## Something Missing?

- Please contact me, I am open to any feedback.
## About The Project
Movie Store, kullanıcıların istedikleri filmleri aratabildikleri, film detaylarını araştırıp inceleyebilecekleri, istedikleri filmlerin favorilerine ekleyebilecekleri ve ayrıca kendi istedikleri filmleri oluşturup güncelleyip silebileceği bir uygulamadır.
DEMO: https://movieapptypescript.herokuapp.com/

<!-- DESCRİPTİON -->
## Description
- Movie Application consists of 5 pages: "Home page", "Search and listing", "Favorites", "Add Movie" and "movie detail" that does not appear in the header.
- With the Movie Application, users will be able to search and list the movies they want, see their details and add them to their favourites, and create a new movie list by adding the movies they want.
- Movies can be listed as sliders by using the swiper.js library under the 'coming soon' title on the main page of the application. They can go to the pages they want from adding movies and movie calling cards.
- You can search and filter the movies you want from the movie search page and add them to your favorites.
- You can see the list of movies added to favorites from the favorite page.
- You can view the details of the listed movies by clicking on the relevant movie.
- You can create the movie you want from the add movie page and add it to your list. You can update or delete these movies later if you wish.
- The application can work responsively on mobile and desktop platforms.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- PROJECT OUTCOME -->
## Project Outcome
![Project gif](Animation_App.gif)


<!-- DEVELOPMENT PROCESS -->
## Project Development Process

- 1 : api registered to `https://omdbapi.com/ and get API key to get data from ``https://www.omdbapi.com/?apikey=${ API_KEY}`, ` to search movies https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}` and `https://www.omdbapi.com/?apikey=${API_KEY}&i=${ for movie details id}`.

- 2: The project was built using the React.js library.

- 3 : Tailwind css is used as a css library for styling purposes in the project.

- 4 : Material UI and Tailwind UI libraries were used as Uikit in the project.

- 5 : The application is designed in a responsive structure that can run smoothly on mobile and desktop platforms.

- 6 : Movies added by the user are stored in Locale Storage and configured to not go away even when the browser tab is closed.

- 7 : Context Provider structure was used as state management.

- 8 : All fields were made mandatory when adding movies, and added movies were created in a structure that can be updated and deleted (including modal deletion confirmation).

- 9 : Generic components were created that can be reused throughout the project.

- 10 : The movies listed on the search page are listed in order by name, year and genre by default.

- 11 : After the movies were listed, a structure was set up where the year type and name filtering could be done and the desired movie filtering could be done.

- 12: The application has been shared on Github. While the project was being prepared, the development stages were committed and pushed to the repo.

- 13: Added gif and detailed README.md file after the project was completed.

- 14: The yarn package manager was used during application development. Webpack was used for pre-deployment packaging.

- 15: The project is finally deployed using the Vercel service.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- PROJECT SKELETON -->
## Project Skeleton

```
Movie App (folder)
|
├── public
│    └── index.html
├── src
│    ├── assets
│    │     └── logo1.png
│    ├── components
│    │     ├── Card.jsx
│    │     ├── EditForm.jsx
│    │     ├── Header.jsx
│    │     ├── Input.jsx
│    │     └── TaskItem.jsx
│    ├── config
│    │     └── Router.jsx
│    ├── context
│    │     └── MovieContext.jsx
│    ├── hooks
│    │     └── useLocaleStorge.jsx
│    ├── pages
│    │     ├── AddMovies.jsx
│    │     ├── Detail.jsx
│    │     ├── Favorite.jsx
│    │     ├── Home.jsx
│    │     └── SearchMovies.jsx
│    ├── App.jsx
│    ├── App.css
│    ├── index.js
│    ├── index.css
│    └── setupTest.ts
├── package.json
├── package-lock-json
├── tailwind.config.js
└── README.md
```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://omdbapi.com/](https://omdbapi.com/)
3. Clone the repo
   ```sh
   git clone https://github.com/enes9103/movie_app_task_react_ts
   ```
4. Install NPM packages
   ```sh
   npm install  or yarn install
   ``` 

5. The project is ready, you can start using it now.
    You can run:

    `npm start` or `yarn start`

    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- NOTES -->
## Notes

- You can add additional functionalities to your app.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
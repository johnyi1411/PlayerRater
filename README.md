# PlayerRater

<img src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/2d/1044282/32a9f0a5bb46f25d0c915c0bc7dae44f-original.png" height="500px">

PlayerRater is a simple rating app for soccer players in the English Premier League. It aggregates ratings from all users and displays the top 25 players based on their average rating.

## How It Works

1. Uses React to render player ratings, rater and user login page.
2. Persists user ratings in PostgrSQL database.
3. Average rating is retrieved using PostgreSQL aggregate function.
4. Authentication handled with Passport.js
5. Hashing and salting handled with bcrypt.


## Usage

1. Install dependancies:

    ```sh
    $ npm install
    ```

2. Run script `npm run build` to build webpack (watch is on by default).:

    ```sh
    $ npm run build
    ```

3. Start nodemon server:

    ```sh
    $ npm start
    ```
4. Create pgnode config file. An example is provided at ./database/config/pg.config.example.js.

    ```sh
    module.exports = {
      host: 'my.database-server.com',
      port: 5432,
      user: 'database-user',
      database: 'mydatabase',
      password: 'secretpassword!!',
    };
    ```

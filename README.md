# ReactJS - Flask - Webpack 4 - **Boilerplate**

![stack](https://raw.githubusercontent.com/EdgarHuber/reactjs_flask_webpack4_boilerplate/master/readme%20images/stack.png)

- [Installation](#Installation)
    - [Get the repository](#Get-the-repository)
    - [Backend setup](#Backend-setup)
    - [Frontend setup](#Frontend-setup)
- [Run the application](#Start-the-application)
    - [Start backend](#Start-backend)
    - [Start frontend](#Start-frontend)
- [Enjoy your application!](#Enjoy-your-application!)
    - [Hint for Google Chrome users](#Hint-for-Google-Chrome-users)
- [Some notes](#Some-notes)

<br>

Inspired by [angineering](https://github.com/angineering/FullStackTemplate).

## Installation

### Get the repository

copy the repository URL

open your terminal and navigate to the path you want to store the application

clone it to your local machine

<pre>
    git clone git@github.com:EdgarHuber/reactjs_flask_webpack4_boilerplate.git
</pre>


### Backend setup

python 3 required!

I recommend to use a virtual environment (venv) for running the python backend, even if this boilerplate just contains one package.

Navigate to the beginning of the application

<pre>
    cd reactjs_flask_webpack4_boilerplate
</pre>


install all neccessary python packages

<pre>
    pip install -r requirements.txt
</pre>

### Frontend setup

navigate to the frontend part (inside of static)

<pre>
    cd reactjs_flask_webpack4_boilerplate/static
</pre>


install all nodeJS depencies

<pre>
    npm install
</pre>

bundle the frontend code (still inside of static)

<pre>
    npm run build
</pre>

you will see the new directory "dist", it includes bundle.js and a public folder with all neccessary files beside the javascript code

![file_strucutre](https://raw.githubusercontent.com/EdgarHuber/reactjs_flask_webpack4_boilerplate/master/readme%20images/file_structure.png)

## Run the application

### Start backend

Open a terminal and navigate to server.py at the beginning path of the application

start the flask server

<pre>
    python server.py
</pre>

if you did the setup right, you will see the following:

<pre>
    * Serving Flask app "server" (lazy loading)
 	* Environment: production
   	WARNING: Do not use the development server in a production environment.
  	Use a production WSGI server instead.
 	* Debug mode: off
 	* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
</pre>

### Start frontend

open another terminal and navigate to the frontend part (inside of the static folder)

start the frontend part in development mode

<pre>
    npm run watch
</pre>

development mode means, everytime you do some changes on the react application, webpack will update the bundle package.

## Enjoy your application!

Open a browser of your choice and navigate to

<pre>
    http://127.0.0.1:5000/
</pre>

you should see the following:

![webapp_screenshot](https://raw.githubusercontent.com/EdgarHuber/reactjs_flask_webpack4_boilerplate/master/readme%20images/webapp_screenshot.PNG)

### Hint for Google Chrome users

To improve your development workflow, I recommend to disable cache storage on your chrome browser. So you do not have to always empty your cache if you have made some updates on your frontend.

1. open **Chrome**

2. open **DevTools**

   <pre>
       F12
       Command + Option + i on Mac
       Control + Shift + i on Windows or Linux
   </pre>

3. Click **Network** in the toolbar
4. Check the **Disable cache** checkbox at the top

## Some notes

As you may have noticed, there is no database here. The reason is that I want to keep the focus on the interaction between Flask and ReactJS. For a later implementation of a database of your choice there are lots of instructions and should be no problem.



| tested on | version | successfull |
| --------- | ------- | ----------- |
| python    | 3.7.3   | yes         |
| node      | 10.15.3 | yes         |
| npm       | 6.4.1   | yes         |

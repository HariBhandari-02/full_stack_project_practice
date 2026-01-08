# setting up project using npm

- make folder using (mkdir _project-name_) then setup frontend and backend in seperate folder inside project folder.
- npm install to create package-lock.json and node_modules file for overall project.

# setup backend and frontend

- <--------------Backend----------------->

```bash

- initialize project using init -y (y- for every question asked during process in answered with yes automatically)
npm init -y

```

|
|
|
|

- install cors to connect to frontend port

````bash
npm install cors

npm install --save-dev @types/cors
```


- <----------------------------For frontend-------------------------->

```bash
- for frontend setup at first we have to create folder using
npm create vite@latest
-- this command does not install npm so later we can use yarn as per person choice .

-then install npm to create package-lock.json in frontend folder, also go inside frontend folder before installing.(cd frontend)
npm install

````

- install axios to make a bridge between backend url with frontend

````bash
npm install axios
```

# packages install for frontend

```bash
// tailwind css
npm install tailwindcss @tailwindcss/vite


````

# D&S
D&S is a fully-featured web application, built with the MERN stack.  



## Installation and usage
1) Clone this repository  
```
git clone https://github.com/ayush-aks/dnsMain
```
2) Install dependencies  
```
npm install
cd client
npm install
```
3) Create .env in root directory
```
cd ..
touch .env
```
4) Configure environment variables in your new .env file. To acquire your MONGO_URI, create a cluster for free over at https://www.mongodb.com/. The TOKEN_KEY is a secret key of your choosing, you can generate one at this site: https://randomkeygen.com/.
```
MONGO_URI=<YOUR_MONGO_URI> 
TOKEN_KEY=<YOUR_TOKEN_KEY>
PORT=4000
```
5) Run the server
```
npm run server
```
6) Start a new terminal and run react's development server
```
cd client
npm start
```ok

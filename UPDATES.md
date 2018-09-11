## 1.2.0
In this update, there are several elements being fixed and updated. Primary focus in this update was put on the _serverless_ approach, as well as how to design and architect the serverless applications. 

**API updates**: 
API was updated to include the function to add the _songs_, whereas previously it only used to return the list of the songs available on the server. Reason being the fact that I now need to explain how each of the function in this API can be exposed as a standalone serverless function&mdash;benefits of this will be discussed in the article that accompanies. 

Another API endpoint was added, `/api/tasks`, this is responsible for the long-running IO-mimicing demonstration of the serverless approach. 

**Logging**:
Logging has been changed, and the logging is now simple for each of the request. Since, I am only using `GET` or `POST` versions of the HTTP communication, the message is logged as  

    GET|POST /url

**Packages**:
In the development, I had to add some extra packages, UUID and body-parser were the packages I had to install in order to make the development easier. They are added to the package.json file, and you only need to run `$ npm update` and everything will be done for you. 

**`package.json`**:
I also added an extra mode of starting the app, `debug`, this can be executed as, `$ npm run debug` and it will run the app in debug mode. The benefit is that it allows you to modify the `PORT` where your app has to run. Previous version would always acquire port 80 and run on that. 

**Summary**: 
In a nutshell, this update focused on the serverless architecture, and I use Node.js to demonstrate the basics of serverless, and how to write serverless solutions. I wanted to keep the repository intact, and the aftermath of the changes will be made available in a separate branch once done. 

## Older versions
In the previous versions of the source code, the app was enough to run a basic Node.js application. Primary features included:

1. Node.js instance
2. Web API code (and a mock database)
3. Dockerfile 

I do not remember pretty much what I did in which version, thus leaving this for the time being.
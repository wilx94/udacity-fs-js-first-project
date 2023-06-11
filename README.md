### Scripts
- Install: ```npm install```
- Build: ```npm run build```
- Lint: ```npm run lint```
- Prettify: ```npm run prettier-format```
- Run unit tests: ```npm run test```
- Start server: ```npm run start```

### Usage
The server will listen on port 5000


#### Endpoint to resize images provided in assets/images/full directory
http://localhost:5000/api

##### Arguments
- filename:
  - encenadaport
  - fjord
  - icelandwaterfall
  - palmtunnel
  - santamonica
- width: pixel values as a number greater than 0
- height: pixel values as a number greater than 0

### Examples
- http://localhost:5000/api?filename=encenadaport&width=200&height=300
Will display the encenadaport image resized having width=200 and height=300
- http://localhost:3000/api/images?filename=encenadaport&width=-200&height=200
Error telling that need to provide a positive value for width and height parameters
- http://localhost:3000/api/images?filename=encenadaport
Show an error that shows all parameters that needs to be provided

### Notes
- Images are stored and resized from `assets/images/full`. Extension is not checked, all of them are asummed to be jpg
- Image thumbs will be stored in `assets/images/thumb` using the following format <filname>_<width>_<height>.jpg
- Every time you call an endpoint it will verify if that resized image already exists in the `thumb` folder. If is exists it read the image from the file system, if not it creates the image.
# http module
hyper text transfer protocol
html - hyper text markup language
css - cascade style sheet
npm - node package manager

# Content type
it tells the browser what type of data is being sent. It is used in the header of the HTTP request and response. The content type is specified using the "Content-Type" header field. Common content types include:
- text/html: for HTML documents
- text/css: for CSS stylesheets
- application/json: for JSON data
- text/plain: for plain text files


# Status codes
- 200 -> OK
- 201 -> Created
- 202 -> Accepted
- 204 -> No Content
- 400 -> Bad Request
- 401 -> Unauthorized
- 402 -> Payment Required
- 403 -> Forbidden
- 404 -> Not Found
- 500 -> Internal Server Error
- 503 -> Service Unavailable

# Server can send data
1. html content
2. html files
3. json data
4. plain text
5. css
6. jss
7. file

## Server can set Header to send data
1. res.writeHeader()
2. res.setHeader()

## Server can set Status code
1. res.statusCode()
2. res.writeHeader()

## request methods
1. GET
2. POST
3. PUT/PATCH
4. DELETE

## routes

# API Documentation

## Table of Contents

### User Endpoints

- [Register User (`/user/register`)](#register-user)
- [Login User (`/user/login`)](#login-user)
- [Get User Profile (`/user/profile`)](#get-user-profile)
- [Logout User (`/user/logout`)](#logout-user)

### Captain Endpoints

- [Register Captain (`/captain/register`)](#register-captain)
- [Login Captain (`/captain/login`)](#login-captain)
- [Get Captain Profile (`/captain/profile`)](#get-captain-profile)
- [Logout Captain (`/captain/logout`)](#logout-captain)

## User Endpoints

### Register User

**Endpoint:** `/user/register`  
**Method:** POST  
**Authentication:** Not required

#### Description

Registers a new user in the system. The endpoint validates input data, securely hashes the password, creates a new user
record, and returns an authentication token along with user details.

#### Request Body

Field descriptions:

- `fullname.firstname`: Required, minimum length: 2 characters
- `fullname.lastname`: Optional
- `email`: Required, must be a valid email address
- `password`: Required, minimum length: 6 characters

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

##### Success Response (201 Created)

```json
{
  "token": "jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

##### Error Response (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Login User

**Endpoint:** `/user/login`  
**Method:** POST  
**Authentication:** Not required

#### Description

Authenticates a user using email and password. On successful authentication, returns a JWT token (both in response body
and as an HTTP-only cookie) and user details.

#### Request Body

Field descriptions:

- `email`: Required, must be a valid email address
- `password`: Required, minimum length: 6 characters

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

##### Success Response (201 Created)

```json
{
  "token": "jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

##### Error Responses

###### Validation Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

###### Authentication Error (401 Unauthorized)

```json
{
  "message": "Invalid email or password"
}
```

### Get User Profile

**Endpoint:** `/user/profile`  
**Method:** GET  
**Authentication:** Required (JWT Token)

#### Description

Retrieves the profile information of the currently authenticated user.

#### Authentication

Requires a valid JWT token, which can be provided in either:

- Authorization header: `Authorization: Bearer <token>`
- Cookie: `token=<token>`

#### Response (200 OK)

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

### Logout User

**Endpoint:** `/user/logout`  
**Method:** GET  
**Authentication:** Required (JWT Token)

#### Description

Logs out the currently authenticated user by clearing the authentication cookie and blacklisting the current JWT token.

#### Authentication

Requires a valid JWT token, which can be provided in either:

- Authorization header: `Authorization: Bearer <token>`
- Cookie: `token=<token>`

#### Responses

##### Success Response (200 OK)

```json
{
  "message": "User logged out"
}
```

## Captain Endpoints

### Register Captain

**Endpoint:** `/captain/register`  
**Method:** POST  
**Authentication:** Not required

#### Description

Registers a new captain in the system. The endpoint validates input data, securely hashes the password, creates a new
captain record, and returns an authentication token along with captain details.

#### Request Body

Field descriptions:

- `fullname.firstname`: Required, minimum length: 2 characters
- `fullname.lastname`: Optional
- `email`: Required, must be a valid email address
- `password`: Required, minimum length: 6 characters
- `vehicle.color`: Required, minimum length: 3 characters
- `vehicle.plate`: Required, minimum length: 3 characters
- `vehicle.capacity`: Required, minimum value: 1
- `vehicle.vehicleType`: Required, must be one of: "car", "motorcycle", or "auto"

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Responses

##### Success Response (201 Created)

```json
{
  "token": "jwt_token_here",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

##### Error Responses

###### Validation Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```

###### Duplicate Account Error (400 Bad Request)

```json
{
  "message": "Captain already exists"
}
```

### Login Captain

**Endpoint:** `/captain/login`  
**Method:** POST  
**Authentication:** Not required

#### Description

Authenticates a captain using email and password. Upon successful authentication, returns a JWT token (both in response
body and as an HTTP-only cookie) and captain details.

#### Request Body

Field descriptions:

- `email`: Required, must be a valid email address
- `password`: Required, minimum length: 6 characters

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

##### Success Response (201 Created)

```json
{
  "token": "jwt_token_here",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

##### Error Response: Invalid Credentials (401 Unauthorized)

```json
{
  "message": "Invalid email or password"
}
```

### Get Captain Profile

**Endpoint:** `/captain/profile`  
**Method:** GET  
**Authentication:** Required (JWT Token)

#### Description

Retrieves the profile information of the currently authenticated captain.

#### Authentication

Requires a valid JWT token, which can be provided in either:

- Authorization header: `Authorization: Bearer <token>`
- Cookie: `token=<token>`

#### Response (200 OK)

```json
{
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Logout Captain

**Endpoint:** `/captain/logout`  
**Method:** GET  
**Authentication:** Required (JWT Token)

#### Description

Logs out the currently authenticated captain by clearing the authentication cookie and blacklisting the current JWT
token.

#### Authentication

Requires a valid JWT token, which can be provided in either:

- Authorization header: `Authorization: Bearer <token>`
- Cookie: `token=<token>`

#### Success Response (200 OK)

```json
{
  "message": "Captain logout successfull"
}
```

## General Notes

### Authentication

- For protected endpoints, the JWT token can be provided in either:
    - Authorization header: `Authorization: Bearer <token>`
    - HTTP-only cookie: `token=<token>`
- Invalid or expired tokens will result in a 401 Unauthorized response
- Upon logout, tokens are blacklisted to prevent reuse

### Error Handling

- All endpoints return appropriate HTTP status codes
- Validation errors return 400 Bad Request with detailed error messages
- Authentication errors return 401 Unauthorized
- Server errors return 500 Internal Server Error

### Security Features

- Passwords are hashed before storage
- JWT tokens are HTTP-only cookies for XSS protection
- Token blacklisting prevents token reuse after logout

### Validation Rules

#### User Registration

- Email must be a valid email address
- First name must be at least 2 characters long
- Password must be at least 6 characters long

#### Captain Registration

- Email must be a valid email address
- First name must be at least 2 characters long
- Password must be at least 6 characters long
- Vehicle color must be at least 3 characters long
- Vehicle plate must be at least 3 characters long
- Vehicle capacity must be at least 1
- Vehicle type must be one of: "car", "motorcycle", "auto"
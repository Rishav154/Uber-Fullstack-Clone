# User API Documentation

## Table of Contents

- [Register User (`/user/register`)](#register-user)
- [Login User (`/user/login`)](#login-user)
- [Get User Profile (`/user/profile`)](#get-user-profile)
- [Logout User (`/user/logout`)](#logout-user)

## Register User

**Endpoint:** `/user/register`  
**Method:** POST  
**Authentication:** Not required

### Description

Registers a new user in the system. The endpoint validates input data, securely hashes the password, creates a new user
record, and returns an authentication token along with user details.

### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    // Required, min length: 2
    "lastname": "Doe"
    // Optional
  },
  "email": "john.doe@example.com",
  // Required, valid email
  "password": "password123"
  // Required, min length: 6
}
```

### Responses

#### Success Response (201 Created)

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

#### Error Response (400 Bad Request)

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

## Login User

**Endpoint:** `/user/login`  
**Method:** POST  
**Authentication:** Not required

### Description

Authenticates a user using email and password. On successful authentication, returns a JWT token (both in response body
and as an HTTP-only cookie) and user details.

### Request Body

```json
{
  "email": "john.doe@example.com",
  // Required, valid email
  "password": "password123"
  // Required, min length: 6
}
```

### Responses

#### Success Response (201 Created)

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

#### Error Responses

##### Validation Error (400 Bad Request)

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

##### Authentication Error (401 Unauthorized)

```json
{
  "message": "Invalid email or password"
}
```

## Get User Profile

**Endpoint:** `/user/profile`  
**Method:** GET  
**Authentication:** Required (JWT Token)

### Description

Retrieves the profile information of the currently authenticated user.

### Authentication

Requires a valid JWT token, which can be provided in either:

- Authorization header: `Authorization: Bearer <token>`
- Cookie: `token=<token>`

### Responses

#### Success Response (200 OK)

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

#### Error Response (401 Unauthorized)

```json
{
  "message": "Authentication required"
}
```

## Logout User

**Endpoint:** `/user/logout`  
**Method:** GET  
**Authentication:** Required (JWT Token)

### Description

Logs out the currently authenticated user by clearing the authentication cookie and blacklisting the current JWT token.

### Authentication

Requires a valid JWT token, which can be provided in either:

- Authorization header: `Authorization: Bearer <token>`
- Cookie: `token=<token>`

### Responses

#### Success Response (200 OK)

```json
{
  "message": "User logged out"
}
```

#### Error Response (401 Unauthorized)

```json
{
  "message": "Authentication required"
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
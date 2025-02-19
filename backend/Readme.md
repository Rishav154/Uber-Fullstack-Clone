# User Registration Endpoint Documentation

## Endpoint: `/user/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in
the database, and returns an authentication token along with the user details.

### Request Body:

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
    - `firstname` (string, required, minimum length: 2)
    - `lastname` (string, optional, minimum length: 2)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

Example:

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

Response:

```
Responses:
Success (201 Created):
Description: User successfully registered.
Body:
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



Client Error (400 Bad Request):
Description: Validation errors or missing required fields.
Body:
{
  "errors": [
    {
      "msg": "Error message here",
      "param": "field_name",
      "location": "body"
    }
  ]
}


Validation Errors:
Invalid Email: If the email is not in a valid format.
First name must be at least 2 characters long: If the firstname is less than 2 characters.
```
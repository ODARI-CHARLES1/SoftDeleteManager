# User Management API

A Node.js backend project using Express and Mongoose that demonstrates:

- Object-Oriented Programming (OOP) with service classes to manage users
- User registration, retrieval, and soft deletion with recycling
- Recycling of deleted users: users are stored separately for 30 days before permanent deletion

---


---

## Features

- **User Registration:** Save new users via a dedicated service class
- **Get Users:** Retrieve all active users
- **Soft Delete & Recycling:** When users are deleted, they move to a separate `deletedUsers` collection and remain for 30 days
- **Scheduled Cleanup:** Users in the deleted collection older than 30 days are permanently removed

---

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- Environment variables managed with [dotenv](https://github.com/motdotla/dotenv)

---

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo

---

## Install Dependencies
  
1. **install the depencies**

   ```bash
    npm install 

## Configure environment variables
  
1. **creating the .env file in the root folder**

   ```bash
     MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/dbname
     PORT=3000  

## Run Server
 1. **Star the server**   
    ```bash
     MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/dbname
     PORT=3000  
The server will start on http://localhost:3000 by default.
## License

This project is licensed under the ISC License.

---

## Contributing

Feel free to open issues or submit pull requests!

---

## Contact

[![GitHub followers](https://img.shields.io/github/followers/CharlesOdari?label=Follow&style=social)](https://github.com/ODARI-CHARLES1)  
[![Portfolio](https://img.shields.io/badge/Portfolio-View-blue?logo=google-chrome)](https://charles.k.odari.portfolio.thegtm.or.ke/)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://ke.linkedin.com/in/odari-kibisi-charles-329b19331)  
[![Email](https://img.shields.io/badge/Email-Contact-red?logo=gmail)](mailto:daymondodari68@gmail.com)  
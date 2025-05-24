# Project Name
This project handles efficient import of a large sales CSV file into a MongoDB database, with data normalization and API endpoints for analytics like total customer count

## Prerequisites

Make sure you have the following installed before running the project:

| Tool         | Version          | Installation Link                             |
|--------------|------------------|----------------------------------------------|
| Node.js      | >= 16.x          | https://nodejs.org/en/download/              |
| npm          | >= 8.x (comes with Node) | https://nodejs.org/en/download/       |     |
| Git          | Latest stable    | https://git-scm.com/downloads                  |

---

A screenshot of the normalized database schema is included to visualize entity relationships.
    Created One Controller to get theb total number of customer 
 router.get('/total-customers',userController.getTotalCustomers);


## Setup & Run Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   node import.js

 

# To-Do-List

## Description

To-Do List Application with Full CRUD Functionality
This project is a simple To-Do List application that allows users to create, complete, and delete to-do items. The application features a seamless interaction between the front-end and back-end, where the to-do items are dynamically managed and stored in a PostgreSQL database.

Key Features:
✅Create To-Do Items: Users can add new to-do items by entering a text description and clicking the "Add Todo" button. Each new item is stored in the database and immediately displayed on the page.

✅Complete To-Do Items: Users can mark a to-do item as "completed" by clicking the "Complete" button next to it. This updates the isComplete field in the database to TRUE, and the visual appearance of the item changes (e.g., background color turns green, and the text gets a line-through effect).

✅Delete To-Do Items: Users can delete a to-do item, removing it from both the DOM and the database. A "Delete" button next to each to-do item allows for easy removal.

✅Dynamic UI Updates: The page dynamically updates when to-do items are created, completed, or deleted. The UI responds immediately after each action without needing a page refresh.

✅Visual Feedback for Completed Items: When a to-do item is marked as completed, it visually changes (e.g., background color, text decoration) to provide clear feedback to the user.

✅Backend Integration: The application is connected to a backend built with Node.js and Express, where the to-do items are stored and managed in a PostgreSQL database. The API endpoints handle all the necessary CRUD operations.

Technologies Used:
Frontend: HTML, CSS, JavaScript (with Axios for API requests)
Backend: Node.js, Express.js, PostgreSQL
CSS Styling: Basic styles for the to-do items, including dynamic classes for completed tasks.
This project demonstrates the full CRUD lifecycle of a to-do list, from creation to deletion, with real-time updates to the user interface. It offers an intuitive user experience with a clean, simple design for managing daily tasks.

##How to Run the App Locally
Follow these steps to run the app on your local machine:

Step 1: Clone the Repository
⚙️Clone the repository to your local machine using Git:
 --copy ssh key from the green code button copy:
 git@github.com:Heather-Haymond/New-To-do.git

⚙️Open your terminal and locate the folder you'd like to store this file, enter
git clone git@github.com:Heather-Haymond/New-To-do.git

Step 2:Navigate to the Project Directory
⚙️After cloning the repository, navigate into the project folder:
cd New-To-do

⚙️If using VS code open file using 
code . 

Step 3: Install Dependencies
⚙️Next, install the required dependencies by running:
npm install

Step 4: Start the Development Server
 ⚙️To start the development server, run:
npm start

This will start the application on localhost:3000 by default.

Step 5: Access the App in Your Browser
⚙️Open a web browser and go to:
http://localhost:3000

⁉️#How to Use the App⁉️
Create a Task:

🔅Type a task name in the input field and click the Add button or press Enter.
The task will be added to the list and saved to the database.
Complete a Task:

🔅Click the Complete button next to a task.
The task’s isComplete value will update in the database, and the task will be visually marked as complete (e.g., with a green background).
Delete a Task:

🔅Click the Delete button next to a task.
The task will be removed from the list and deleted from the database.
The page will automatically update with the latest list of tasks after each action.


Support
If you have suggestions or issues, please email me at edtechenthusiast101@gmail.com

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

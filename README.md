# Kledo Project Starter README

Welcome to the Kledo project starter! This README provides an overview of the project structure, key functionalities, and available routes.

## Project Overview

This project is designed as a dashboard application with several main features:

1. **Dashboard**: This is the landing page after a user logs in. It displays a welcome message to the logged-in user.

2. **Shipping Company Management**:
   - **List**: Displays a list of shipping companies fetched from the API using `GET /finance/shippingComps`. It also includes a filter feature that sends requests to the server using the same endpoint with a query string parameter `search` after a 1-second delay.
   - **Add**: Allows users to add a new shipping company with a `name` field, which is mandatory and must be at least 2 characters long. Validation for the minimum character length is performed as the user types. Submission is done using `POST /finance/shippingComps`. After a successful submission, users are redirected to the list page.
   - **Edit**: Similar to the Add page but with a few differences. If the name is not changed, the submission only navigates back to the list page. If the name is modified, it uses `PUT /finance/shippingComps/{id}` for the update.
   - **Delete**: Provides a delete button on the Edit page. When clicked, it shows a confirmation prompt. If confirmed, it uses `DELETE /finance/shippingComps/{id}` to delete the shipping company.

3. **Logout**: Allows users to log out and redirects them to the login page using `POST /authentication/logout`.

## API Endpoint

The project uses the following API base URL: `https://api.jokolodang.com/api/v1`.

## Routes

- `/login`: The login page where users can log in with their credentials.
- `/logout`: Logs the user out and redirects them to the login page.
- `/dashboard`: The dashboard landing page, displaying a welcome message.
- `/dashboard/shipping`: Shipping company management, including listing, adding, editing, and deleting shipping companies.

## Login Credentials

- Email: `me@kledo.id`
- Password: `123456`

Feel free to explore and customize this project to meet your specific needs. Happy coding!

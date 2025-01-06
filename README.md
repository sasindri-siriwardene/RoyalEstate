# Responsive Web Application for Estate Agent

This project is a client-side web application for an estate agent, developed as part of the 5COSC026W Advanced Client-Side Web Development module. It enables users to search for properties based on various criteria, save favorite properties, and access detailed property information in a responsive, user-friendly interface.

## Features

### Search Functionality
- **Criteria**: Search properties by type, price, bedrooms, date added, and postcode area.
- **Dynamic Search**: Works with one or multiple criteria simultaneously.
- **JSON Integration**: Property data sourced from a JSON file containing seven properties.

### Property Listing
- **Responsive Display**: Properties are displayed with an image, short description, and price.
- **Detailed Property Page**: Includes a large image, thumbnails, long description, floor plan, and a Google map.

### Favorites Management
- **Add to Favorites**: Save properties by dragging them to a favorites list or pressing a button.
- **Remove from Favorites**: Remove properties by dragging them out of the list or pressing a delete button.
- **Clear Favorites**: Clear the entire favorites list.

### Responsiveness
- **Hand-written Media Queries**: Adapt layout for large screens and devices smaller than iPad landscape width.
- **Flexible Layouts**: Use of CSS Flexbox or Grid.

### Aesthetics
- Visual hierarchy with headings, subheadings, consistent font styles, and alignment.
- Effective use of images and colors for visual appeal.

### Security
- Client-side protection using CSP and HTML encoding.

## Installation

### Prerequisites
- Node.js and npm installed.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd estate-agent-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```


### Important Note on `node_modules`
The `node_modules` folder is excluded from the project to comply with submission requirements. To ensure the project runs:
1. After cloning the repository, run `npm install` to regenerate the `node_modules` folder.
2. This will install all necessary dependencies based on the `package.json` file.
3. Verify the setup by running `npm start`.

## Usage
1. Use the search form to filter properties by criteria.
2. View search results dynamically displayed.
3. Access individual property pages for more details.
4. Save properties to your favorites list and manage them efficiently.


## Design Considerations
- **Consistency**: Unified design elements across the application.
- **Usability**: Easy navigation and intuitive interactions.
- **Performance**: Optimized for smooth performance across devices.

## Security Measures
- Enforced client-side security to protect against potential vulnerabilities.
- HTML encoding within JSX to prevent injection attacks.


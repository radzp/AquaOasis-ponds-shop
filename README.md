# 🌊 AquaOasis-ponds-shop

## 📖 Project Overview

AquaOasis is a web-based application designed to showcase and manage water garden products. The project includes features such as adding and removing products from a shopping cart, displaying product details, and integrating a map to show the company's location. The application is built using modern web technologies and follows best practices for web development.

## 🛠️ Technologies Used

- **HTML5**: For structuring the web pages.
- **CSS3**: For styling the web pages, including Bootstrap for responsive design.
- **JavaScript**: For adding interactivity to the web pages.
- **Leaflet.js**: For integrating the map feature.
- **Bootstrap 5**: For responsive and modern UI components.
- **Remixicon**: For using a variety of icons.
- **FancyBox**: For creating responsive lightbox galleries.
- **AOS (Animate On Scroll)**: For adding scroll animations.
- **LocalStorage**: For persisting the shopping cart data.

## Features

- **🛒 Shopping Cart**: Users can add and remove products from the shopping cart. The cart data is persisted using LocalStorage.
- **🛍️ Product Display**: Products are displayed with their details, including name, price, and an option to add them to the cart.
- **🗺️ Map Integration**: A map is integrated using Leaflet.js to show the company's location.
- **✅ Form Validation**: The checkout form includes validation to ensure all required fields are filled out correctly.
- **📱 Responsive Design**: The application is fully responsive, ensuring a seamless experience across different devices.


## Preview
![Animation](https://github.com/user-attachments/assets/230a159e-a2db-4662-aa8e-db55b14b9f31)


## 🔧 Getting started

#### 🐳 Docker Container Guide

#### 🏗️ Building and Running the Project
1. **Install Docker:** Begin by [downloading and installing Docker](https://docs.docker.com/get-docker/).
2.  **Set Up the Container:**
   Use the following commands to pull the image and run the container:

```sh
docker pull annepvcz/aqua-oasis
docker run -p 8080:8080 --name aqua-oasis annepvcz/aqua-oasis
```
3. **Access the Application:** Open your web browser and navigate to http://localhost:8080.

## Contributors
- <a href="https://github.com/radzp"> Anna Pacześna </a>
- <a href="https://github.com/mrcn49"> Marcin Wójcik </a>



# Dynamic Dashboard Application

This repository contains a dynamic dashboard application built with React and Redux. It allows users to create, manage, and visualize widgets within a customizable dashboard.
The app uses a JSON structure to dynamically build and manage the dashboard, offering flexibility to tailor it to specific needs.

## Features

- **Dynamic Dashboard Creation:** The dashboard is generated based on a JSON structure, including categories and widgets for customizable layouts.
- **Widget Management:** Add and remove widgets from categories. For example, "CSPM Executive Dashboard" is a sample category.
- **Random Text for Widgets:** Widgets display random text as placeholders, which can be replaced with actual data.
- **Add Widget Modal:** Use the "+Add Widget" button to open a modal for specifying the widget's name and content, then add it to the selected category.
- **Widget Removal:** Remove widgets using a cross icon or by managing them from the category list.
- **Widget Search Functionality:** Search for widgets across the list to easily find and manage them.
- **Chart Widgets:** Includes bar and pie charts. PieChart widgets generate random data, while BarChart widgets display critical, high, medium, and low data with clear visibility.

## Technologies Used

- **React:** For building the user interface and handling component state.
- **Redux:** For managing application state and dynamic widget operations.
- **JSON:** For defining dashboard structure and widget categories.

## How to Use

1. Clone this repository to your local machine.
2. Install dependencies with `npm install`.
3. Start the application using `npm start`.
4. Use the dashboard to add, remove, and manage widgets, and explore the widget search functionality.

<img width="959" alt="Screenshot 2024-08-15 173925" src="https://github.com/user-attachments/assets/79566cfa-952a-4bb3-8bcf-67a2a525fa9c">

# Nuxt 3 Program and Tickets Test task

#### This is a project maintained by Nuxt 3. The project will be served on `http://localhost:3000`.

For an overview of the project, visit [Nuxt 3 Program and Tickets](https://nuxt3-program-and-tickets.vercel.app/).

### Project Structure

The project is organized into the following folders:

- **assets**: Contains styles, images, and icons.

  - **styles**: Split into slices for variables such as SCSS variables, colors, and breakpoints. This structure allows for easy updates across the project. It also includes mixins for media queries and the Inter font definition.

- **components**: Contains reusable components used throughout the project:

  - **Button**: Used in event cards and the not found page.
  - **Select Filter**: Customized select box for the project.
  - **Event Card**: Displays individual events.
  - **Empty State**: Shown when no events match the filter criteria.
  - **Spinner**: Loading spinner component.

- **layouts**: Layouts for the project.

- **models**: Defines the types for responses and each event.

- **pages**: Defines the routes for the project:

  - The default route displays all available events.
  - A dynamic route is used for all other paths, displaying the not found page.

- **public**: Public assets.

- **server**: Contains the `data.json` file from which data is fetched.

For starting the project follow the below instruction

Use node js version 20

Run npm start

Run npm run dev

This will serve the project in localhost:3000

The overviw of the project is available on https://nuxt3-program-and-tickets.vercel.app/

The project structure contains assets components layouts models pages public and server folder

the assets folder contains styles images and icons, the styles parts into slices of variables where the scss variables such as colors needed throw the project and breakpoints are declared in this way if needed to change one of them the whole usage will affected, mixins where i have defined the media query and fonts to define the Inter font which is used in this project.

There are some reusable components which is used throw the project the button which is used in eventcards and not found page. the select filter which is the select box customized for the project, event card which is use to show each eveng and also empty state where there is no event matches with filter found. and also spinner

The models folder is where the type of response and each event is defined

The pages are related to routes, for this project there is only one and default route which is showing all the events available and also a dynamic route for all other routes entered to show the not found page

The data is fetched from data.json which is located in serve folder.

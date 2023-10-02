# BTST Technologies Blogs

This project is a simple responsive blog page created using Next.js and Tailwind CSS. It displays a list of blog posts fetched dynamically from NewsAPI. The blog page includes features such as a navigation menu, responsive design, and a "Read more" button for each blog post.



[Production Link](https://btst-assignment-task.vercel.app/)

![Weather App Screenshot](https://github.com/ayushsgithub/btst_assignment/blob/main/public/blog-home.png?raw=true)

![Weather App Screenshot](https://github.com/ayushsgithub/btst_assignment/blob/main/public/blog-page.png?raw=true)

## Getting Started

### Layout
- Implemented a responsive layout for the blog page.
- Created a navigation menu that links to the Home page and Blog page.

### Blog Posts API Integration
- Integrated a third-party API to fetch and display blog-like data.
- Displayed at least 5 blog posts from the API.
- Each blog post displays the title, author, image, publication date, and content.
- Ensured that the data from the API is displayed correctly and consistently.

### Responsive Design
- Ensured that the blog page is responsive and looks good on various screen sizes, from mobile to desktop.
- Implemented responsive design principles using Tailwind CSS classes, including flex, grid, and responsive breakpoints.

### Prerequisites

To run this project, you will need:

- Node.js installed on your machine.
- npm or yarn package manager.

### Installation

1. Clone this repository to your local machine:

   ```git clone https://github.com/ayushsgithub/btst_assignment.git```

2. Go the folder

   ```cd btst_assignment```

3. Install dependencies

   ```npm install```

4. Get your [NewsApi](https://newsapi.org/) key and store in **.env.local**

   ```API_KEY=```

5. To start development server run the below command in terminal
 
   ```npm run dev```

- This will start a development server on **localhost:3000** in your browser


# Contributing

### Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

- Fork the repository.

- Create a new branch for your feature or bug ```fix: git checkout -b feature-name```.

- Make your changes and commit them.

- Push your changes to your fork: ```git push origin feature-name```.

- Create a pull request on the original repository.


# To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
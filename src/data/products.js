import dashboard from "../assets/projects/project_1.png";
import shopping_cart from "../assets/projects/project_3.png";
import food_blog from "../assets/projects/project_6.png";
import animated_card from "../assets/projects/project_9.png";
import animated_gallery from "../assets/projects/project_10.png";
import product_listing from "../assets/projects/project_11.png";
import credit_card from "../assets/projects/project_12.png";
import refine_dashboard from "../assets/projects/project_01.png";
import chef_claude from "../assets/projects/project_03.png";
import video_call from "../assets/projects/project_14.png";

export const projects = [
  {
    id: 1,
    title: "Refine Dashboard",
    description:
      "Refine dashboard fetches Real time data and consists of Knaban borad, Charts , Upcoming events etc.",
    image: refine_dashboard,
    gitHubUrl: "https://github.com/Layomi1/react-admin-dashboard-app.git",
    hostedUrl: "https://frontend-rookie-refine-dashboard.netlify.app/",
    tags: ["Refine React", "Ant Design Chart", "GraphQL"],
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "Admin dashboard contains theme chaging, charts and serach features",
    image: dashboard,
    gitHubUrl: "https://github.com/Layomi1/react-admin-dashboard-app.git",
    hostedUrl: "https://rookie-admin-dashboard.netlify.app/",
    tags: ["React", "Tailwind CSS", "syncfusion", "API"],
  },
  {
    id: 3,
    title: "Chef Claude",
    description:
      "Recipe App implemented in React, features  includes search and AI integration",
    image: chef_claude,
    gitHubUrl: "https://github.com/Layomi1/react-chef-claude",
    hostedUrl: " https://frontend-rookie-chef-claude.netlify.app",
    tags: ["React", "Tailwind CSS", "Huggingface AI"],
  },

  {
    id: 4,
    title: "Shopping Cart",
    description:
      "Shopping Cart implemented using React, Redux and axios for fetcjing dummy endpoints",
    image: shopping_cart,
    gitHubUrl: "https://github.com/Layomi1/react-shopping-cart.git",
    hostedUrl: "https://frontend-rookie-shopping-cart.netlify.app/",
    tags: ["React", "Tailwind CSS", "sync-fusion", "API"],
  },
  {
    id: 5,
    title: "Video Call",
    description: "Video call app...",
    image: video_call,
    gitHubUrl: "https://github.com/Layomi1/react-shopping-cart.git",
    hostedUrl: "https://frontend-rookie-shopping-cart.netlify.app/",
    tags: ["React", "Chakra UI", "Zego Cloud", "API"],
  },

  {
    id: 6,
    title: "Food Blog",
    description:
      "AFood blog is implemneted using React , Redux and Tailwind CSS.",
    image: food_blog,
    gitHubUrl: "https://github.com/Layomi1/react-food-blog.git",
    hostedUrl: "",
    tags: ["React", "Redux", "Tailwind CSS", "API"],
  },

  {
    id: 7,
    title: "Animated Card",
    description: "Simple Animated card",
    image: animated_card,
    gitHubUrl: "https://github.com/Layomi1/react-animated-card.git",
    hostedUrl: "https://react-animated-card-wine.vercel.app/",
    tags: ["React", "Tailwind CSS", "Framer- Motion"],
  },
  {
    id: 8,
    title: "Animated Image Gallery",
    description: "Simple Animated image gallery",
    image: animated_gallery,
    gitHubUrl: "https://github.com/Layomi1/react-animated-image-gallery.git",
    hostedUrl: "https://github.com/Layomi1/react-animated-image-gallery.git",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 9,
    title: "Product Listing",
    description:
      "The Product Listing app. Features included increasing and decreasing items in cart",
    image: product_listing,
    gitHubUrl: "https://github.com/Layomi1/js-product-list-with-cart.git",
    hostedUrl: "frontend-rookie-product-listing.netlify.app/",
    tags: ["JS", "Tailwind CSS", "API"],
  },

  {
    id: 10,
    title: "Credit Card",
    description: "Credit card app",
    image: credit_card,
    gitHubUrl: "https://github.com/Layomi1/js-credit-card-payment.git",
    hostedUrl: "https://my-credit-card-app.netlify.app/",
    tags: ["JS", "CSS"],
  },
];

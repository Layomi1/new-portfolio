import dashboard from "../assets/projects/project_1.png";
import shopping_cart from "../assets/projects/project_3.png";
import food_blog from "../assets/projects/project_6.png";
import animated_gallery from "../assets/projects/project_10.png";
import product_listing from "../assets/projects/project_11.png";
import credit_card from "../assets/projects/project_12.png";
import refine_dashboard from "../assets/projects/project_01.png";
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
    title: "Shopping Cart",
    description:
      "Shopping Cart implemented using React, Redux and axios for fetcjing dummy endpoints",
    image: shopping_cart,
    gitHubUrl: "https://github.com/Layomi1/react-shopping-cart.git",
    hostedUrl: "https://frontend-rookie-shopping-cart.netlify.app/",
    tags: ["React", "Tailwind CSS", "sync-fusion", "API"],
  },
  {
    id: 4,
    title: "Video Call",
    description: "Video call app...",
    image: video_call,
    gitHubUrl: "https://github.com/Layomi1/react-video-call-app",
    hostedUrl: "https://rookie-video-call-app.netlify.app",
    tags: ["React", "Chakra UI", "Zego Cloud", "API"],
  },

  {
    id: 5,
    title: "Food Blog",
    description:
      "AFood blog is implemneted using React , Redux and Tailwind CSS.",
    image: food_blog,
    gitHubUrl: "https://github.com/Layomi1/react-food-blog.git",
    hostedUrl: "",
    tags: ["React", "Redux", "Tailwind CSS", "API"],
  },

  {
    id: 6,
    title: "Animated Image Gallery",
    description: "Simple Animated image gallery",
    image: animated_gallery,
    gitHubUrl: "https://github.com/Layomi1/react-animated-image-gallery.git",
    hostedUrl: "https://github.com/Layomi1/react-animated-image-gallery.git",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 7,
    title: "Product Listing",
    description:
      "The Product Listing app. Features included increasing and decreasing items in cart",
    image: product_listing,
    gitHubUrl: "https://github.com/Layomi1/js-product-list-with-cart.git",
    hostedUrl: "frontend-rookie-product-listing.netlify.app/",
    tags: ["JS", "Tailwind CSS", "API"],
  },

  {
    id: 8,
    title: "Credit Card",
    description: "Credit card app",
    image: credit_card,
    gitHubUrl: "https://github.com/Layomi1/js-credit-card-payment.git",
    hostedUrl: "https://my-credit-card-app.netlify.app/",
    tags: ["JS", "CSS"],
  },
];

// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?
import { MainProperty } from "./classes";
import { LoyaltyUser, Permissions } from "./enums";
import { Property, Review, User } from "./interface.ts";
import {
  showReviewTotal,
  populateUser,
  mapPropertyToDom,
  addReviews,
  populateFooter,
  bindEventListener,
} from "./utils.ts";

// DOM Element Selections
// Header elements
const returningUserDisplay = document.getElementById("returning-user")!;
const userNameDisplay = document.getElementById("user")!;

// Body elements
const reviewContainer = document.querySelector(".reviews")!;
const container = document.querySelector(".container")!;
const button = document.querySelector("button")!;
const reviewTotalDisplay = document.getElementById("reviews")!;
const propertiesTag = document.getElementById("properties")!;

// Footer element
const footerTag = document.getElementById("footer")!;

// Reviews
const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,

    date: "27-03-2021",
    description: "Great hosts, location was a bit further than said",
  },
];

// User
const you: User = {
  firstName: "Bobby",
  lastName: "Brown",
  isReturning: true,
  permissions: Permissions.ADMIN,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

//Properties
const properties: Property[] = [
  {
    image: "images/colombia-property.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: [+1123495082908, "marywinkle@gmail.com"],
    isAvailable: true,
  },
  {
    image: "images/poland-property.jpg",
    title: "Polish Cottage",
    price: 30,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland",
    },
    contact: [+1123495082908, "garydavis@hotmail.com"],
    isAvailable: false,
  },
  {
    image: "images/london-property.jpg",
    title: "London Flat",
    price: 25,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: "SW4 5XW",
      country: "United Kingdom",
    },
    contact: [+1123495082908, "andyluger@aol.com"],
    isAvailable: true,
  },
  {
    image: "images/malaysian-hotel.jpeg",
    title: "Malia Hotel",
    price: 30,
    location: {
      firstLine: "Room 4",
      city: "Malia",
      code: 45334,
      country: "Malaysia",
    },
    contact: [+60349822083, "lee34@gmail.com"],
    isAvailable: false,
  },
];

// Functions
showReviewTotal(
  reviewTotalDisplay,
  reviews.length,
  reviews[0].name,
  reviews[0].loyaltyUser
);

populateUser(
  returningUserDisplay,
  userNameDisplay,
  you.isReturning,
  you.firstName
);

mapPropertyToDom(propertiesTag, properties, you.permissions);

// event listeners
const unSubButton = bindEventListener(button, "click", () => {
  addReviews(reviewContainer, reviews);
  container.removeChild(button);
  // Unsubscribe the event listener
  unSubButton();
});

let MainPropertyImage = new MainProperty(
  "images/italian-property.jpg",
  "Italian House",
  [
    {
      name: "Olive",
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: "12-04-2021",
    },
  ]
);

const mainImageContainer = document.querySelector(".main-image")!;
mainImageContainer.appendChild(MainPropertyImage.getElement);

// footer function
populateFooter(footerTag);
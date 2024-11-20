import { LoyaltyUser, Permissions } from "./enums";
import { Property, Review } from "./interface";

export function showReviewTotal(
  reviewTotalDisplay: HTMLElement,
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const iconDisplay = isLoyalty == LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    "review total " +
    value.toString() +
    "| last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

export function populateUser(
  returningUserDisplay: HTMLElement,
  userNameDisplay: HTMLElement,
  isReturning: boolean,
  userName: string
) {
  if (isReturning == true) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

export function buildPropertyElement(data: Property) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = data.title;

  const image = document.createElement("img");
  image.setAttribute("src", data.image);
  card.appendChild(image);

  return card;
}
export function showDetails(
  authStatus: boolean | Permissions,
  tag: HTMLDivElement,
  price: number
) {
  if (authStatus) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + " / night";
    tag.append(priceDisplay);
  }
}
export function mapPropertyToDom(
  tag: HTMLElement,
  data: Property[],
  authStatus: boolean | Permissions
) {
  const cards = data.map((cardData) => {
    const card = buildPropertyElement(cardData);
    showDetails(authStatus, card, cardData.price);
    return card;
  });

  tag.append(...cards);
}

export function returnTopReviews(reviews: Review[], cap: number): Review[] {
  let buffer: Review[] = [...reviews]
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .slice(0, cap);

  return buffer;
}

export function addReviews(tag: Element, array: Review[]): void {
  const cap = 2;
  const topTwoReviews = returnTopReviews(array, cap);

  const builder = (index: number): HTMLElement => {
    const card = document.createElement("div");
    card.classList.add("review-card");
    card.innerHTML =
      topTwoReviews[index].stars + " stars from " + topTwoReviews[index].name;
    return card;
  };

  const cards = [];
  for (let i = 0; i < cap; i++) {
    cards.push(builder(i));
  }

  tag.innerHTML = "";
  tag.append(...cards);
}

export function bindEventListener(
  tag: Element,
  eventName: string,
  listener: (event: Event) => void
): () => void {
  tag.addEventListener(eventName, listener);

  return () => {
    tag.removeEventListener(eventName, listener);
  };
}

export function populateFooter(footer: HTMLElement) {
  let locationStats: [string, string, number] = ["cpt", "3:42", 21];
  footer.innerHTML =
    locationStats[0] + " " + locationStats[1] + " " + locationStats[2] + "°";
}
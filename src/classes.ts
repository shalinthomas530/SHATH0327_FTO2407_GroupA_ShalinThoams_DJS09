import { Review } from "./interface";

export class MainProperty {
  private src: string;
  private body: HTMLElement;
  title: string;
  reviews: Review[];
  constructor(src: string, title: string, reviews: Review[]) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
    this.body = this.build();
  }

  private build(): HTMLElement {
    const image = document.createElement("img");
    image.setAttribute("src", this.src);
    return image;
  }

  get getElement(): HTMLElement {
    return this.body;
  }
}
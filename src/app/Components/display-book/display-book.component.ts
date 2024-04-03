import { Component } from '@angular/core';

interface Book {
  title: string;
  author: string;
  imageUrl: string;
  rating: number;
  ratingCount: number;
  price: number;
}
@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrl: './display-book.component.scss',
})
export class DisplayBookComponent {
  panelOpenState = false;

  books: Book[] = [
    {
      title: "Don't Make Me Think",
      author: 'by Steve Krug',
      imageUrl: 'https://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500,
    },

    {
      title: "Don't Make Me Think",
      author: 'by Steve Krug',
      imageUrl: 'https://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500,
    },

    {
      title: "Don't Make Me Think",
      author: 'by Steve Krug',
      imageUrl: 'https://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500,
    },

    {
      title: "Don't Make Me Think",
      author: 'by Steve Krug',
      imageUrl: 'https://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500,
    },

    {
      title: "Don't Make Me Think",
      author: 'by Steve Krug',
      imageUrl: 'https://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500,
    },

    {
      title: "Don't Make Me Think",
      author: 'by Steve Krug',
      imageUrl: 'https://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500,
    },

    {
      title: "Don't Make Me Think",
      author: 'by Steve Krug',
      imageUrl: 'https://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500,
    },

    {
      title: "Don't Make Me Think",
      author: 'by Steve Krug',
      imageUrl: 'https://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500,
    },

    {
      title: "Don't Make Me Think",
      author: 'by Steve Krug',
      imageUrl: 'https://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500,
    },

    {
      title: "Don't Make Me Think",
      author: 'by Steve Krug',
      imageUrl: 'https://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500,
    },

    {
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      imageUrl: 'https://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500,
    },
  ];
}

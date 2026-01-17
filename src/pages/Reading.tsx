// Reading.tsx

import React from 'react';
import './Reading.css';
import atomicHabits from '../images/atomic_habits.jpg';
import richDadPoorDad from '../images/rich_dad_poor_dad.jpg';
import alchemist from '../images/alchemist.jpg';
import eatThatFrog from '../images/eat_that_frog.jpg';
import vijayanikiAidhuMetlu from '../images/unfck.jpg';
import lp from '../images/lp.jpg';

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: atomicHabits,
    description: "A practical guide to building good habits, breaking bad ones, and improving daily behavior through small, consistent changes.",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    imgSrc: richDadPoorDad,
    description: "A personal finance book that contrasts two mindsets about money, focusing on assets, investing, and financial independence.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    imgSrc: alchemist,
    description: "A philosophical novel about a young shepherd’s journey to follow his dreams and discover his personal legend.",
  },
  {
    title: "Eat That Frog",
    author: "Brian Tracy",
    imgSrc: eatThatFrog,
    description: "A productivity book focused on overcoming procrastination by prioritizing and tackling the most important tasks first.",
  },
  {
    title: "Unfu*k Yourself: Get Out of Your Head and Into Your Life",
    author: "Gary John Bishop",
    imgSrc: vijayanikiAidhuMetlu,
    description: "A blunt, no-nonsense self-help book about taking responsibility, changing internal dialogue, and regaining control over one’s life.",
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    imgSrc: lp,
    description: "A strategy and psychology book that analyzes power dynamics using historical examples and timeless principles.",
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Journey</h2>
      <p className="reading-intro">These books have influenced my perspectives, motivation, and self-growth.</p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;

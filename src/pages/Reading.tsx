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
    link: "https://jamesclear.com/atomic-habits"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    imgSrc: richDadPoorDad,
    description: "A personal finance book that contrasts two mindsets about money, focusing on assets, investing, and financial independence.",
    link: "https://dn721905.ca.archive.org/0/items/rich-dad-poor-dad_bongotweet/rich-dad-poor-dad.pdf"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    imgSrc: alchemist,
    description: "A philosophical novel about a young shepherd’s journey to follow his dreams and discover his personal legend.",
    link: "https://dn721507.ca.archive.org/0/items/OceanofPDF.comTheAlchemist/_OceanofPDF.com_The_Alchemist.pdf"
  },
  {
    title: "Eat That Frog",
    author: "Brian Tracy",
    imgSrc: eatThatFrog,
    description: "A productivity book focused on overcoming procrastination by prioritizing and tackling the most important tasks first.",
    link: "https://www.briantracy.com/blog/time-management/the-truth-about-frogs/"
  },
  {
    title: "Unfu*k Yourself: Get Out of Your Head and Into Your Life",
    author: "Gary John Bishop",
    imgSrc: vijayanikiAidhuMetlu,
    description: "A blunt, no-nonsense self-help book about taking responsibility, changing internal dialogue, and regaining control over one’s life.",
    link: "https://icrrd.com/public/media/16-05-2021-052320Unfuck-Yourself-Gary-John-Bishop.pdf"
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    imgSrc: lp,
    description: "A strategy and psychology book that analyzes power dynamics using historical examples and timeless principles.",
    link: "https://irp-cdn.multiscreensite.com/cb9165b2/files/uploaded/The+48+Laws+Of+Power.pdf"
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Journey</h2>
      <p className="reading-intro">These books have influenced my perspectives, motivation, and self-growth.</p>
      <div className="books-grid">
        {books.map((book, index) => {
          const CardTag = book.link ? 'a' : 'div';
          return (
          <CardTag
            key={index}
            className="book-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            href={book.link}
            target={book.link ? '_blank' : undefined}
            rel={book.link ? 'noopener noreferrer' : undefined}
          >
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </CardTag>
        )})}
      </div>
    </div>
  );
};

export default Reading;

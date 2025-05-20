
import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import FeaturedSection from '../components/FeaturedSection';
import ListingsGrid from '../components/ListingsGrid';
import Footer from '../components/Footer';
import { ListingProps } from '../components/ListingCard';

// Sample data for listings
const featuredListings: ListingProps[] = [
  {
    id: '1',
    title: 'Modern 3 Bedroom Apartment with Sea View',
    price: 950000,
    location: 'Tel Aviv',
    imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    category: 'Real Estate',
    featured: true,
    date: 'Today'
  },
  {
    id: '2',
    title: 'Apple MacBook Pro 16" M2 Max 32GB RAM',
    price: 3799,
    location: 'Jerusalem',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    category: 'Electronics',
    featured: true,
    date: 'Yesterday'
  },
  {
    id: '3',
    title: '2021 Tesla Model 3 Long Range, Low Miles',
    price: 42000,
    location: 'Haifa',
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    category: 'Vehicles',
    featured: true,
    date: '2 days ago'
  },
  {
    id: '4',
    title: 'Senior Full Stack Developer - Remote',
    price: 160000,
    location: 'Remote',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    category: 'Jobs',
    featured: true,
    date: '3 days ago'
  }
];

const recentListings: ListingProps[] = [
  {
    id: '5',
    title: 'Modern Leather Sofa - Like New',
    price: 1200,
    location: 'Beer Sheva',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    category: 'Furniture',
    date: '2 hours ago'
  },
  {
    id: '6',
    title: 'iPhone 14 Pro Max 256GB Mint Condition',
    price: 950,
    location: 'Netanya',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    category: 'Electronics',
    date: '4 hours ago'
  },
  {
    id: '7',
    title: 'Purebred Persian Kitten',
    price: 800,
    location: 'Rishon LeZion',
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    category: 'Pets',
    date: '6 hours ago'
  },
  {
    id: '8',
    title: 'Horse Riding Lessons - Experienced Instructor',
    price: 75,
    location: 'Ramat Gan',
    imageUrl: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2',
    category: 'Services',
    date: '8 hours ago'
  },
  {
    id: '9',
    title: 'Vintage Vinyl Records Collection',
    price: 350,
    location: 'Tel Aviv',
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    category: 'Music & Hobbies',
    date: 'Yesterday'
  },
  {
    id: '10',
    title: 'Gaming PC - RTX 4080, i9, 64GB RAM',
    price: 2500,
    location: 'Herzliya',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    category: 'Electronics',
    date: 'Yesterday'
  },
  {
    id: '11',
    title: 'Professional DSLR Camera Kit',
    price: 1800,
    location: 'Eilat',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    category: 'Electronics',
    date: '2 days ago'
  },
  {
    id: '12',
    title: 'Luxury Vacation Home - Weekly Rental',
    price: 2800,
    location: 'Dead Sea',
    imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    category: 'Vacation Rentals',
    date: '2 days ago'
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <FeaturedSection />
        <Categories />
        <ListingsGrid title="Featured Listings" listings={featuredListings} />
        <ListingsGrid title="Recent Listings" listings={recentListings} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

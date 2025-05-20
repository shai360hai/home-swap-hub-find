
import React from 'react';
import ListingCard, { ListingProps } from './ListingCard';

interface ListingsGridProps {
  title: string;
  listings: ListingProps[];
}

const ListingsGrid: React.FC<ListingsGridProps> = ({ title, listings }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-marketplace-gray-dark mb-6">{title}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
};

export default ListingsGrid;

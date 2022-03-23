import React from 'react';

function Item() {
  return (
    <li className="grid grid-cols-4 rounded shadow p-1">
      <div className="col-span-1 relative h-16 w-16 bg-gray-200 animate-pulse rounded" />
      <div className="col-span-3">
        <div className="flex flex-col justify-evenly h-full">
          <div className="w-16 h-1 rounded-full bg-gray-200 animate-pulse" />
          <div className="w-40 h-1 rounded-full bg-gray-200 animate-pulse" />
        </div>
      </div>
    </li>
  );
}

export default function ItemSkeleton() {
  return (
    <>
      <Item />
      <Item />
      <Item />
    </>
  );
}

import React from 'react';

function Skeleton() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-2">
      <div className="h-3 col-start-1 col-end-3 bg-gray-200 rounded animate-pulse" />
      <div className="h-3 col-span-3 bg-gray-200 rounded animate-pulse" />
      <div className="h-3 col-start-1 col-end-2 bg-gray-200 rounded animate-pulse" />
      <div className="h-3 bg-gray-200 col-start-1 col-end-3" />
    </div>
  );
}

export default function LyricSkeleton() {
  return (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
}

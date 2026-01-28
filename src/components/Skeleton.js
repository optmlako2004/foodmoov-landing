// src/components/Skeleton.js
import React from 'react';
import './Skeleton.css';

// Skeleton de base - barre animée
export const SkeletonLine = ({ width = '100%', height = '16px', style = {} }) => (
  <div
    className="skeleton-line"
    style={{ width, height, ...style }}
  />
);

// Skeleton cercle (avatar, image ronde)
export const SkeletonCircle = ({ size = '50px' }) => (
  <div
    className="skeleton-circle"
    style={{ width: size, height: size }}
  />
);

// Skeleton pour une carte
export const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-card-image" />
    <div className="skeleton-card-content">
      <SkeletonLine width="70%" height="20px" />
      <SkeletonLine width="100%" height="14px" style={{ marginTop: '12px' }} />
      <SkeletonLine width="85%" height="14px" style={{ marginTop: '8px' }} />
      <SkeletonLine width="40%" height="14px" style={{ marginTop: '8px' }} />
    </div>
  </div>
);

// Skeleton pour un article de blog
export const SkeletonBlogPost = () => (
  <div className="skeleton-blog-post">
    <div className="skeleton-blog-image" />
    <div className="skeleton-blog-content">
      <SkeletonLine width="30%" height="12px" />
      <SkeletonLine width="90%" height="22px" style={{ marginTop: '12px' }} />
      <SkeletonLine width="100%" height="14px" style={{ marginTop: '16px' }} />
      <SkeletonLine width="95%" height="14px" style={{ marginTop: '8px' }} />
      <SkeletonLine width="60%" height="14px" style={{ marginTop: '8px' }} />
    </div>
  </div>
);

// Skeleton pour un profil influenceur/partenaire
export const SkeletonProfile = () => (
  <div className="skeleton-profile">
    <SkeletonCircle size="80px" />
    <div className="skeleton-profile-info">
      <SkeletonLine width="120px" height="18px" />
      <SkeletonLine width="80px" height="14px" style={{ marginTop: '8px' }} />
    </div>
  </div>
);

// Skeleton pour une liste
export const SkeletonList = ({ count = 3, type = 'card' }) => {
  const items = Array.from({ length: count }, (_, i) => i);

  switch (type) {
    case 'blog':
      return (
        <div className="skeleton-list skeleton-list-blog">
          {items.map(i => <SkeletonBlogPost key={i} />)}
        </div>
      );
    case 'profile':
      return (
        <div className="skeleton-list skeleton-list-profile">
          {items.map(i => <SkeletonProfile key={i} />)}
        </div>
      );
    default:
      return (
        <div className="skeleton-list skeleton-list-cards">
          {items.map(i => <SkeletonCard key={i} />)}
        </div>
      );
  }
};

// Skeleton page loading (remplace "Chargement...")
export const PageSkeleton = () => (
  <div className="page-skeleton">
    <div className="page-skeleton-header">
      <SkeletonLine width="50%" height="32px" />
      <SkeletonLine width="70%" height="16px" style={{ marginTop: '16px' }} />
    </div>
    <div className="page-skeleton-content">
      <SkeletonList count={3} />
    </div>
  </div>
);

export default PageSkeleton;

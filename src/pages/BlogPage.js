// src/pages/BlogPage.js
import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { blogCategories, getCategoryById } from "../data/blogCategories";
import { api } from "../services/api";
import "./BlogPage.css";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  // Recuperer la categorie depuis l'URL ou "all" par defaut
  const selectedCategory = searchParams.get("categorie") || "all";

  useEffect(() => {
    async function fetchPosts() {
      try {
        const dbPosts = await api.get("/blog/posts");
        setPosts(Array.isArray(dbPosts) ? dbPosts : []);
      } catch (error) {
        // silent
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Filtrer les posts selon la categorie selectionnee
  const filteredPosts = selectedCategory === "all"
    ? posts
    : posts.filter(post => {
        const postCategory = (post.category || 'foodtruckers').toLowerCase();
        return postCategory === selectedCategory.toLowerCase();
      });

  const handleCategoryChange = (categoryId) => {
    if (categoryId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ categorie: categoryId });
    }
  };

  const getExcerpt = (post) => {
    if (post.excerpt) return post.excerpt;
    const tmp = document.createElement("DIV");
    tmp.innerHTML = post.body || "";
    let text = tmp.textContent || tmp.innerText || "";
    return text.substring(0, 150) + "...";
  };

  const getCategoryDisplayName = (categoryId) => {
    const cat = getCategoryById(categoryId);
    return cat ? cat.name : categoryId;
  };

  if (loading) {
    return <div style={{textAlign: 'center', padding: '100px'}}>Chargement...</div>;
  }

  return (
    <div className="blog-page">
      <title>Blog Street-Food - Conseils et Actualites | Foodmoov</title>

      <div className="blog-page-header">
        <h1>Le Blog de la Street-Food</h1>
        <p>Retrouvez ici nos derniers articles, conseils et actualites sur le monde culinaire nomade.</p>
      </div>

      {/* Filtres par categorie */}
      <div className="blog-categories">
        <div className="blog-categories-inner">
          {blogCategories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
              style={{
                '--category-color': category.color
              }}
            >
              {category.name}
              {selectedCategory === category.id && (
                <span className="category-count">
                  {category.id === "all" ? posts.length : filteredPosts.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Resultat du filtre */}
      {selectedCategory !== "all" && (
        <div className="blog-filter-info">
          <p>
            <strong>{filteredPosts.length}</strong> article{filteredPosts.length > 1 ? 's' : ''} dans la categorie <strong>{getCategoryDisplayName(selectedCategory)}</strong>
          </p>
          <button className="clear-filter" onClick={() => handleCategoryChange("all")}>
            Voir tous les articles
          </button>
        </div>
      )}

      <div className="blog-list">
        {filteredPosts.length === 0 ? (
          <div className="no-posts">
            <p>Aucun article dans cette categorie pour le moment.</p>
            <button className="btn-primary" onClick={() => handleCategoryChange("all")}>
              Voir tous les articles
            </button>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="post-card">
              <div className="post-card-image-wrapper">
                {post.main_image_url ? (
                  <img src={post.main_image_url} alt={post.title} className="post-card-image" />
                ) : (
                  <div style={{width:'100%', height:'100%', background:'#f0f0f0'}}></div>
                )}
              </div>

              <div className="post-card-content">
                <span
                  className="post-category"
                  style={{ backgroundColor: getCategoryById(post.category)?.color || 'var(--primary-color)' }}
                >
                  {getCategoryDisplayName(post.category)}
                </span>
                <h2>{post.title}</h2>
                <p className="excerpt">{getExcerpt(post)}</p>
                <div className="post-card-footer">
                  <div className="author-info">
                    <p className="post-meta">Par {post.first_name} {post.last_name}</p>
                  </div>
                  <span className="read-more-link">Lire la suite</span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default BlogPage;

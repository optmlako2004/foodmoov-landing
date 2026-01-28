// src/pages/BlogPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockPosts } from "../data/mockPosts"; 
import { api } from "../services/api"; // <-- IMPORT DU NOUVEAU SERVICE
import "./BlogPage.css";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      let dbPosts = [];
      try {
        // On récupère les articles de la BASE DE DONNÉES via le service centralisé
        dbPosts = await api.get("/blog/posts");
      } catch (error) {
        console.error("Erreur serveur lors de la récupération des articles:", error);
        // En cas d'erreur serveur, on peut décider de ne rien faire et de n'afficher que les mocks
      } finally {
        // On formate les articles MOCK pour qu'ils ressemblent à ceux de la DB
        const formattedMockPosts = mockPosts.map(mock => ({
          id: `mock-${mock.id}`,
          title: mock.title,
          slug: mock.slug,
          category: 'Conseils',
          main_image_url: mock.image,
          excerpt: mock.excerpt,
          body: mock.content,
          published_at: new Date(),
          first_name: mock.author,
          last_name: '',
          isMock: true
        }));

        // On FUSIONNE les deux listes (articles de la DB et mocks)
        setPosts([...dbPosts, ...formattedMockPosts]);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const getExcerpt = (post) => {
    if (post.excerpt) return post.excerpt;
    const tmp = document.createElement("DIV");
    tmp.innerHTML = post.body || "";
    let text = tmp.textContent || tmp.innerText || "";
    return text.substring(0, 150) + "...";
  };

  if (loading) {
    return <div style={{textAlign: 'center', padding: '100px'}}>Chargement...</div>;
  }

  return (
    <div className="blog-page">
      <title>Blog Street-Food - Conseils et Actualités | Foodmoov</title>

      <div className="blog-page-header">
        <h1>Le Blog de la Street-Food</h1>
        <p>Retrouvez ici nos derniers articles, conseils et actualités sur le monde culinaire nomade.</p>
      </div>

      <div className="blog-list">
        {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="post-card">
              <div className="post-card-image-wrapper">
                {post.main_image_url ? (
                  <img src={post.main_image_url} alt={post.title} className="post-card-image" />
                ) : (
                  <div style={{width:'100%', height:'100%', background:'#f0f0f0'}}></div>
                )}
              </div>
              
              <div className="post-card-content">
                <span className="post-category">{post.category || 'Conseils'}</span>
                <h2>{post.title}</h2>
                <p className="excerpt">{getExcerpt(post)}</p>
                <div className="post-card-footer">
                  <div className="author-info">
                    <p className="post-meta">Par {post.first_name} {post.last_name}</p>
                  </div>
                  <span className="read-more-link">Lire la suite →</span>
                </div>
              </div>
            </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
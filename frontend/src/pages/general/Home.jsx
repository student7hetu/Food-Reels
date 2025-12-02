import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../assets/styles/auth.css';
import './home.css';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const videoRefs = useRef(new Map());

  useEffect(() => {
    const options = { root: containerRef.current, threshold: 0.75 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = videoRefs.current.get(entry.target.dataset.key);
        if (!video) return;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, options);

    const children = containerRef.current?.querySelectorAll('.reel-item');
    if (children) children.forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, [videos]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setVideos([]);
    const fetchFood = async () => {
      try {
        const res = await axios.get('/api/food', { withCredentials: true });
        if (!mounted) return;
        const payload = res.data;
        // Normalize API response shapes:
        // - { foodItems: [...] }
        // - { foodItem: {...} }
        // - [...] (array)
        let dataArr = [];
        if (Array.isArray(payload)) dataArr = payload;
        else if (Array.isArray(payload?.foodItems)) dataArr = payload.foodItems;
        else if (payload?.foodItem) dataArr = [payload.foodItem];
        else dataArr = [];

        // Some backends return nested structures or different field names for video - be safe
        const normalized = dataArr.map((it) => ({
          ...it,
          video: it.video || it.videoUrl || it.video_url || it.src || it.videoSrc || '',
        }));
        setVideos(normalized);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch food items', err?.response?.data || err.message);
        setVideos([]);
        setLoading(false);
      }
    };
    fetchFood();
    return () => { mounted = false; };
  }, []);

  return (
    <div className='home-reels' ref={containerRef}>
      {loading ? (
        <div className="reel-item" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div className='reel-bottom-panel' style={{maxWidth:'640px'}}>Loading reels…</div>
        </div>
      ) : videos.length === 0 ? (
        <div className="reel-item" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div className='reel-bottom-panel' style={{maxWidth:'640px'}}>No reels available yet.</div>
        </div>
      ) : videos.map((item) => (
        <section className='reel-item' data-key={item._id} key={item._id}>
          <video
            className='reel-video'
            ref={(el) => el && videoRefs.current.set(item._id, el)}
            src={item.video}
            playsInline
            muted
            loop
            preload='metadata'
          />

          <div className='reel-overlay'>
            <div className='reel-bottom-panel'>
              <div className='reel-description'>{item.description}</div>
              <div className='reel-actions'>
                <Link
                  aria-label={`Visit store ${item._id}`}
                  className='store-btn'
                  to={`/food-partner/${item.foodPartner}`}
                >
                  Visit store
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;

import img1 from "../assets/gallery/Carousel/1.jpg";
import img2 from "../assets/gallery/Carousel/2.jpg";
import img3 from "../assets/gallery/Carousel/3.jpg";
import img4 from "../assets/gallery/Carousel/4.jpg";
import img5 from "../assets/gallery/Carousel/5.jpg";
import img6 from "../assets/gallery/Carousel/6.jpg";
import img7 from "../assets/gallery/Carousel/7.jpg";
import img8 from "../assets/gallery/Carousel/8.jpg";
import img9 from "../assets/gallery/Carousel/9.jpg";
import img10 from "../assets/gallery/Carousel/10.jpg";

/* ================= ARCHITECTURE ================= */
import img11 from "../assets/gallery/Architecture/1.jpg";
import img12 from "../assets/gallery/Architecture/2.jpg";
import img13 from "../assets/gallery/Architecture/3.jpg";
import img14 from "../assets/gallery/Architecture/4.jpg";
import img15 from "../assets/gallery/Architecture/5.jpg";
import img16 from "../assets/gallery/Architecture/6.jpg";
import img17 from "../assets/gallery/Architecture/7.jpg";
import img18 from "../assets/gallery/Architecture/8.jpg";
import img19 from "../assets/gallery/Architecture/9.jpg";
import img20 from "../assets/gallery/Architecture/10.jpg";
import img21 from "../assets/gallery/Architecture/11.jpg";
import img22 from "../assets/gallery/Architecture/12.jpg";
import img23 from "../assets/gallery/Architecture/13.jpg";
import img24 from "../assets/gallery/Architecture/14.jpg";
import img25 from "../assets/gallery/Architecture/15.jpg";
import img26 from "../assets/gallery/Architecture/16.jpg";
import img27 from "../assets/gallery/Architecture/17.jpg";
import img28 from "../assets/gallery/Architecture/18.jpg";
import img29 from "../assets/gallery/Architecture/19.jpg";
import img30 from "../assets/gallery/Architecture/20.jpg";
import img31 from "../assets/gallery/Architecture/21.jpg";
import img32 from "../assets/gallery/Architecture/22.jpg";
import img33 from "../assets/gallery/Architecture/23.jpg";
import img34 from "../assets/gallery/Architecture/24.jpg";

/* ================= NATURE ================= */
import img35 from "../assets/gallery/Nature/1.jpg";
import img36 from "../assets/gallery/Nature/2.jpg";
import img37 from "../assets/gallery/Nature/3.jpg";
import img38 from "../assets/gallery/Nature/4.jpg";
import img39 from "../assets/gallery/Nature/5.jpg";
import img40 from "../assets/gallery/Nature/6.jpg";
import img41 from "../assets/gallery/Nature/7.jpg";
import img42 from "../assets/gallery/Nature/8.jpg";
import img43 from "../assets/gallery/Nature/9.jpg";
import img44 from "../assets/gallery/Nature/10.jpg";
import img45 from "../assets/gallery/Nature/11.jpg";
import img46 from "../assets/gallery/Nature/12.jpg";
import img47 from "../assets/gallery/Nature/13.jpg";
import img48 from "../assets/gallery/Nature/14.jpg";
import img49 from "../assets/gallery/Nature/15.jpg";
import img50 from "../assets/gallery/Nature/16.jpg";
import img51 from "../assets/gallery/Nature/17.jpg";
import img52 from "../assets/gallery/Nature/18.jpg";
import img53 from "../assets/gallery/Nature/19.jpg";
import img54 from "../assets/gallery/Nature/20.jpg";
import img55 from "../assets/gallery/Nature/21.jpg";
import img56 from "../assets/gallery/Nature/22.jpg";

/* ================= CAMPUS TOUR ================= */
import img57 from "../assets/gallery/Campus Tour/1.jpg";
import img58 from "../assets/gallery/Campus Tour/2.jpg";
import img59 from "../assets/gallery/Campus Tour/3.jpg";
import img60 from "../assets/gallery/Campus Tour/4.jpg";
import img61 from "../assets/gallery/Campus Tour/5.jpg";
import img62 from "../assets/gallery/Campus Tour/6.jpg";
import img63 from "../assets/gallery/Campus Tour/7.jpg";
import img64 from "../assets/gallery/Campus Tour/8.jpg";
import img65 from "../assets/gallery/Campus Tour/9.jpg";
import img66 from "../assets/gallery/Campus Tour/10.jpg";
import img67 from "../assets/gallery/Campus Tour/11.jpg";
import img68 from "../assets/gallery/Campus Tour/12.jpg";
import img69 from "../assets/gallery/Campus Tour/13.jpg";
import img70 from "../assets/gallery/Campus Tour/14.jpg";
import img71 from "../assets/gallery/Campus Tour/15.jpg";
import img72 from "../assets/gallery/Campus Tour/16.jpg";
import img73 from "../assets/gallery/Campus Tour/17.jpg";

/* ================= WILDLIFE ================= */
import img74 from "../assets/gallery/Wildlife/1.jpg";
import img75 from "../assets/gallery/Wildlife/2.jpg";
import img76 from "../assets/gallery/Wildlife/3.jpg";
import img77 from "../assets/gallery/Wildlife/4.jpg";
import img78 from "../assets/gallery/Wildlife/5.jpg";
import img79 from "../assets/gallery/Wildlife/6.jpg";


import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaThLarge,
  FaUniversity,
  FaBuilding,
  FaLeaf,
  FaPaw,
} from "react-icons/fa";


/* ================= CONFIG ================= */

const MAX_IMAGES = 16;

/* ================= DATA ================= */

const categories = [
  { name: "All", icon: <FaThLarge /> },
  { name: "Campus Tour", icon: <FaUniversity /> },
  { name: "Architecture", icon: <FaBuilding /> },
  { name: "Nature", icon: <FaLeaf /> },
  { name: "Wildlife", icon: <FaPaw /> },
];

const photos = [
  // ===== CAROUSEL =====
  { src: img1, category: "Campus Tour", featured: true },
  { src: img2, category: "Campus Tour", featured: true },
  { src: img3, category: "Architecture", featured: true },
  { src: img4, category: "Architecture", featured: true },
  { src: img5, category: "Campus Tour", featured: true },
  { src: img6, category: "Nature", featured: true },
  { src: img7, category: "Nature", featured: true },
  { src: img8, category: "Architecture", featured: true },
  { src: img9, category: "Campus Tour", featured: true },
  { src: img10, category: "Nature", featured: true },

  // ===== CATEGORY GRID =====
  { src: img11, category: "Architecture", caption: "Symmetry in concrete" },
  { src: img12, category: "Architecture", caption: "Morning mist over the hills" },
  { src: img13, category: "Architecture", caption: "Light cutting through clouds" },
  { src: img14, category: "Architecture", caption: "Still waters, silent sky" },
  { src: img15, category: "Architecture", caption: "Endless greens" },
  { src: img16, category: "Architecture", caption: "Nature’s calm" },
  { src: img17, category: "Architecture", caption: "A quiet moment" },
  { src: img18, category: "Architecture", caption: "Golden hour" },
  { src: img19, category: "Architecture", caption: "Shadows and light" },
  { src: img20, category: "Architecture", caption: "Silence speaks" },
  { src: img21, category: "Architecture", caption: "Silence speaks" },
  { src: img22, category: "Architecture", caption: "Silence speaks" },
  { src: img23, category: "Architecture", caption: "Silence speaks" },
  { src: img24, category: "Architecture", caption: "Silence speaks" },
  { src: img25, category: "Architecture", caption: "Silence speaks" },
  { src: img26, category: "Architecture", caption: "Silence speaks" },
  { src: img27, category: "Architecture", caption: "Silence speaks" },
  { src: img28, category: "Architecture", caption: "Silence speaks" },
  { src: img29, category: "Architecture", caption: "Silence speaks" },
  { src: img30, category: "Architecture", caption: "Silence speaks" },
  { src: img31, category: "Architecture", caption: "Silence speaks" },
  { src: img32, category: "Architecture", caption: "Silence speaks" },
  { src: img33, category: "Architecture", caption: "Silence speaks" },
  { src: img34, category: "Architecture", caption: "Silence speaks" },
  { src: img35, category: "Nature", caption: "Symmetry in concrete" },
  { src: img36, category: "Nature", caption: "Morning mist over the hills" },
  { src: img37, category: "Nature", caption: "Light cutting through clouds" },
  { src: img38, category: "Nature", caption: "Still waters, silent sky" },
  { src: img39, category: "Nature", caption: "Endless greens" },
  { src: img40, category: "Nature", caption: "Nature’s calm" },
  { src: img41, category: "Nature", caption: "A quiet moment" },
  { src: img42, category: "Nature", caption: "Golden hour" },
  { src: img43, category: "Nature", caption: "Shadows and light" },
  { src: img44, category: "Nature", caption: "Silence speaks" },
  { src: img45, category: "Nature", caption: "Silence speaks" },
  { src: img46, category: "Nature", caption: "Silence speaks" },
  { src: img47, category: "Nature", caption: "Silence speaks" },
  { src: img48, category: "Nature", caption: "Silence speaks" },
  { src: img49, category: "Nature", caption: "Silence speaks" },
  { src: img50, category: "Nature", caption: "Silence speaks" },
  { src: img51, category: "Nature", caption: "Silence speaks" },
  { src: img52, category: "Nature", caption: "Silence speaks" },
  { src: img53, category: "Nature", caption: "Silence speaks" },
  { src: img54, category: "Nature", caption: "Silence speaks" },
  { src: img55, category: "Nature", caption: "Silence speaks" },
  { src: img56, category: "Nature", caption: "Silence speaks" },
  { src: img57, category: "Campus Tour", caption: "Symmetry in concrete" },
  { src: img58, category: "Campus Tour", caption: "Morning mist over the hills" },
  { src: img59, category: "Campus Tour", caption: "Light cutting through clouds" },
  { src: img60, category: "Campus Tour", caption: "Still waters, silent sky" },
  { src: img61, category: "Campus Tour", caption: "Endless greens" },
  { src: img62, category: "Campus Tour", caption: "Nature’s calm" },
  { src: img63, category: "Campus Tour", caption: "A quiet moment" },
  { src: img64, category: "Campus Tour", caption: "Golden hour" },
  { src: img65, category: "Campus Tour", caption: "Shadows and light" },
  { src: img66, category: "Campus Tour", caption: "Silence speaks" },
  { src: img67, category: "Campus Tour", caption: "Silence speaks" },
  { src: img68, category: "Campus Tour", caption: "Silence speaks" },
  { src: img69, category: "Campus Tour", caption: "Silence speaks" },
  { src: img70, category: "Campus Tour", caption: "Silence speaks" },
  { src: img71, category: "Campus Tour", caption: "Silence speaks" },
  { src: img72, category: "Campus Tour", caption: "Silence speaks" },
  { src: img73, category: "Campus Tour", caption: "Silence speaks" },
  { src: img74, category: "Wildlife", caption: "Symmetry in concrete" },
  { src: img75, category: "Wildlife", caption: "Morning mist over the hills" },
  { src: img76, category: "Wildlife", caption: "Light cutting through clouds" },
  { src: img77, category: "Wildlife", caption: "Still waters, silent sky" },
  { src: img78, category: "Wildlife", caption: "Endless greens" },
  { src: img79, category: "Wildlife", caption: "Nature’s calm" },
];

/* ================= ANIMATION ================= */

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const isPausedRef = useRef(false);

  const isAll = activeCategory === "All";

  const featured = photos.filter((p) => p.featured);
  const loopPhotos = [...featured, ...featured];

  const categoryPhotos = photos
    .filter((p) => !p.featured && p.category === activeCategory)
    .slice(0, MAX_IMAGES);

  /* ===== CAROUSEL ===== */
  useEffect(() => {
    if (!isAll || !trackRef.current) return;

    const track = trackRef.current;
    const ITEM_WIDTH = 444;
    const TOTAL = featured.length * ITEM_WIDTH;
    const SPEED = 0.6;
    let raf;

    const animate = () => {
      if (!isPausedRef.current) {
        offsetRef.current -= SPEED;
        if (Math.abs(offsetRef.current) >= TOTAL) offsetRef.current = 0;
        track.style.transform = `translateX(${offsetRef.current}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isAll, featured.length]);

  return (
    <section style={wrapper}>
      <h2 style={title}>GALLERY</h2>

      {/* ===== CAROUSEL ===== */}
      {isAll && (
        <div style={carouselWrapper}>
          <div ref={trackRef} style={carousel}>
            {loopPhotos.map((p, i) => (
              <img
                key={i}
                src={p.src}
                style={carouselImage}
                onMouseEnter={() => (isPausedRef.current = true)}
                onMouseLeave={() => (isPausedRef.current = false)}
                onClick={() => setActiveImage(p.src)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ===== TABS ===== */}
      <div style={tabs}>
        {categories.map((c) => (
          <button
            key={c.name}
            onClick={() => setActiveCategory(c.name)}
            style={{
              ...tab,
              ...(activeCategory === c.name ? activeTab : {}),
            }}
          >
            {c.icon} {c.name}
          </button>
        ))}
      </div>

      {/* ===== CATEGORY GRID ===== */}
      {!isAll && (
        <motion.div style={grid}>
          {categoryPhotos.map((p, i) => (
            <motion.div
              key={i}
              style={imageCard}
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              onClick={() => setActiveImage(p.src)}
            >
              <img src={p.src} style={image} />
              <div style={gradientOverlay} />
              {p.caption && (
                <div style={captionStyle}>{p.caption}</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* ===== LIGHTBOX ===== */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            style={overlay}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              style={fullscreenImage}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== FOOTER ===== */}
      <div style={footer}>
        <div style={footerCircle}>©</div>
        <span style={footerText}>Prabhav Deshpande</span>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const wrapper = {
  padding: "90px 10% 120px",
  minHeight: "100vh",
  color: "#e5e7eb",
};

const title = {
  textAlign: "center",
  fontSize: "32px",
  fontWeight: 800,
  marginBottom: "30px",
};

const carouselWrapper = { overflow: "hidden", marginBottom: "60px" };

const carousel = {
  display: "flex",
  gap: "24px",
  padding: "20px 0",
};

const carouselImage = {
  minWidth: "420px",
  height: "260px",
  objectFit: "cover",
  borderRadius: "20px",
  cursor: "pointer",
};

const tabs = {
  display: "flex",
  justifyContent: "center",
  gap: "14px",
  marginBottom: "40px",
  flexWrap: "wrap",
};

const tab = {
  padding: "10px 18px",
  borderRadius: "20px",
  background: "rgba(2,6,23,0.7)",
  border: "1px solid rgba(34,211,238,0.3)",
  color: "#e5e7eb",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const activeTab = {
  background: "#22d3ee",
  color: "#020617",
  fontWeight: 700,
};

const grid = {
  columnCount: 4,
  columnGap: "24px",
};

const imageCard = {
  position: "relative",
  borderRadius: "18px",
  overflow: "hidden",
  cursor: "pointer",
  breakInside: "avoid",
  marginBottom: "24px",
};

const image = {
  width: "100%",
  display: "block",
};

const gradientOverlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to top, rgba(2,6,23,0.65), transparent)",
};

const captionStyle = {
  position: "absolute",
  bottom: "12px",
  left: "14px",
  right: "14px",
  color: "#f8fafc",
  fontSize: "13px",
  fontWeight: 500,
  letterSpacing: "0.4px",
  textShadow: "0 2px 8px rgba(0,0,0,0.65)",
};

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
};

const fullscreenImage = {
  maxWidth: "90%",
  maxHeight: "90%",
  borderRadius: "18px",
};

const footer = {
  marginTop: "120px",
  paddingBottom: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
};

const footerCircle = {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  color: "#ffffff",
};

const footerText = {
  fontSize: "14px",
  letterSpacing: "0.5px",
  color: "#ffffff",
  fontWeight: 500,
};

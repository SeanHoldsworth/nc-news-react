export default function HeroImage() {
  console.log(typeof heroImage);
  return (
  <div className = "hero-image">
    <img src = "../../public/news.jpg" alt="Stand of foreign newspapers" />
    <div className = "hero-text">
        <p> Broken News </p>
    </div>
  </div>
  );
}
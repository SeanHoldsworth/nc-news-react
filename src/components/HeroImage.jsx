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

  /*
  return (
    <div style={{
      backgroundImage: `url(${heroImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover", 
      position: "relative",
      height: "50%"
    }}>
      <div className = "hero-text">
        <h1> Broken News </h1>
      </div>
    </div>
  );
}
//<h1 style="font-size:50px">Broken News</h1>
    <div className = "hero-image">
      <div className = "hero-text">
        <h1> Broken News </h1>
      </div>
    </div>
*/
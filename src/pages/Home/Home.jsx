import React from "react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";

function Home() {
  return (
    <div className="page">
      <h1>🚀 Welcome to Our Business</h1>

      <div className="grid">
        <FeatureCard title="Fast" desc="High speed performance" />
        <FeatureCard title="Responsive" desc="Mobile friendly" />
        <FeatureCard title="Modern UI" desc="Clean professional design" />
      </div>
    </div>
  );
}

export default Home;
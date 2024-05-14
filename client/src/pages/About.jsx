import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.png"
            alt="contactus"
            width="400"
            height="400"
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            At Shopzy, we're committed to providing you with the best shopping
            experience possible. Our curated collection features the latest
            trends in fashion, electronics, home decor, and more. With a wide
            range of products sourced from trusted brands, you can shop with
            confidence knowing that quality is our top priority. Whether you're
            looking for everyday essentials or something special for a special
            occasion, Shopzy has you covered. Explore our website today and
            discover the perfect items to elevate your lifestyle.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

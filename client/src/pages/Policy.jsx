import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/services.png"
            alt="contactus"
            width="400"
            height="400"
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p>
            At Shopzy, we are committed to protecting your privacy and ensuring
            the security of your personal information.
          </p>
          <p>
            Your information is securely stored and will not be shared with
            third parties without your consent.
          </p>
          <p>
            By using our website, you consent to the collection and use of your
            information as described in this policy. If you have any questions
            or concerns about our privacy practices, please contact us.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            The Manage Blood Bank App is a cutting-edge mobile application
            designed to streamline the process of blood donation, enhance blood
            bank management, and ultimately save lives. This innovative solution
            harnesses the power of technology to connect donors, recipients, and
            blood banks in a secure and efficient manner. By providing a
            user-friendly interface and powerful features, the app aims to
            bridge the gap between blood supply and demand, ensuring timely
            access to safe blood transfusions.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;

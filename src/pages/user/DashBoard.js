import React from "react";
import Layout from "./../../components/layout/Layout";
import UserMenu from "../../components/layout/UserMenu";
import { useAuth } from "../../context/auth";
import { MdEmail, MdHomeFilled, MdPhone } from "react-icons/md";

const DashBoard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"My Dashboard - SKS "}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Username: {auth?.user?.name}</h3>
              <h5>
                <MdEmail /> : {auth?.user?.email}
              </h5>
              <h5>
                <MdPhone />:{auth?.user?.phone}{" "}
              </h5>
              <h5>
                <MdHomeFilled /> : {auth?.user?.address}{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashBoard;

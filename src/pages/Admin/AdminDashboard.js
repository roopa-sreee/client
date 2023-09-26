import React from "react";
import Layout from "./../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";
import { useAuth } from "../../context/auth";
import { MdEmail, MdHomeFilled, MdPhone } from "react-icons/md";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h1>{auth?.user?.name}</h1>
              <h3>
                <MdEmail />: {auth?.user?.email}
              </h3>
              <h3>
                <MdPhone /> :{auth?.user?.phone}
              </h3>
              <h3>
                <MdHomeFilled />: {auth?.user?.address}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;

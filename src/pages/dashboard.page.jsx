import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar.component";

const Dashboard = () => {
  let dir;
  const { user } = useSelector((state) => state.auth.user);
  const lang = useSelector((state) => state.language);
  if (lang === "ar") {
    dir = "rtl";
  } else {
    dir = "ltr";
  }

  return (
    <div className="dashboardContainer">
      <Navbar />
      <div className="dashboardWrapper" dir={dir}>
        {lang === "ar" ? <h2>لوحة القيادة</h2> : <h2>Dashboard</h2>}

        {lang === "ar" ? (
          <div className="userInfoContainer">
            <p>
              <b>اسم</b>
              {" - "}
              {user.name}
            </p>
            <p>
              <b>بريد إلكتروني</b>
              {" - "}
              {user.email}
            </p>
            <p>
              <b>انضمام</b>
              {" - "}
              {user.joining}
            </p>
          </div>
        ) : (
          <div className="userInfoContainer">
            <p>
              <b>Name:</b> {user.name}
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>Joining:</b> {user.joining}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

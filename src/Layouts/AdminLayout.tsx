import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const AdminHelmet = () => {
  return (
    <Helmet>
      <link
        href="/assets-admin/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="/assets-admin/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link href="/assets-admin/vendor/aos/aos.css" rel="stylesheet" />
      <link
        href="/assets-admin/vendor/glightbox/css/glightbox.min.css"
        rel="stylesheet"
      />
      <link
        href="/assets-admin/vendor/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />
      <link href="/assets-admin/css/main.css" rel="stylesheet" />

      <script src="/assets-admin/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/assets-admin/vendor/php-email-form/validate.js"></script>
      <script src="/assets-admin/vendor/aos/aos.js"></script>
      <script src="/assets-admin/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="/assets-admin/vendor/swiper/swiper-bundle.min.js"></script>

      <script src="/assets-admin/js/main.js"></script>
    </Helmet>
  );
};

const AdminLayout = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  if (showLoading) {
    return (
      <>
        <AdminHelmet />
        <div id="preloader"></div>
      </>
    );
  }

  return (
    <>
      <AdminHelmet />

      <Outlet />
    </>
  );
};

export default AdminLayout;

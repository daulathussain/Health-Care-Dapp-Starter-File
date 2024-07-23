import "../styles/globals.css";

import { StateContextProvider } from "../Context/index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <script src="vendor/global/global.min.js"></script>
      <script src="vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
      <script src="vendor/chart.js/chart.bundle.min.js"></script>
      <script src="vendor/owl-carousel/owl.carousel.js"></script>

      <script src="vendor/apexchart/apexchart.js"></script>
      <script src="js/custom.min.js"></script>
      <script src="js/deznav-init.js"></script>
      <script src="js/demo.js"></script>
      <script src="js/styleSwitcher.js"></script>
    </>
  );
}

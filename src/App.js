import logo from "./logo.svg";
import "./App.css";
import VoucherManagement from "./Pages/VoucherManagement/VoucherManagement";
import VoucherCampaignManagement from "./Pages/VoucherCampaignManagement/VoucherCampaignManagement";

function App() {
  return (
    <div className="App">
      {/* <VoucherManagement /> */}
      <VoucherCampaignManagement />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import VoucherManagement from "./Pages/VoucherManagement/VoucherManagement";
import VoucherCampaignManagement from "./Pages/VoucherCampaignManagement/VoucherCampaignManagement";
import { SidebarWithBurgerMenu } from "./Pages/SidebarWithBurgerMenu";

function App() {
  return (
    <div className="App">
      <VoucherManagement />
      {/* <SidebarWithBurgerMenu /> */}
      {/* <VoucherCampaignManagement /> */}
    </div>
  );
}

export default App;

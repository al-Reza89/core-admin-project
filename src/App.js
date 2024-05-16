import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import ProductsDashboard from "./screens/ProductsDashboard";
import NewProduct from "./screens/NewProduct";
import Drafts from "./screens/Drafts";
import Released from "./screens/Released";
import Comments from "./screens/Comments";
import Scheduled from "./screens/Scheduled";
import Customers from "./screens/Customers";
import CustomerList from "./screens/CustomerList";
import Promote from "./screens/Promote";
import Notification from "./screens/Notification";
import Settings from "./screens/Settings";
import UpgradeToPro from "./screens/UpgradeToPro";
import MessageCenter from "./screens/MessageCenter";
import ExploreCreators from "./screens/ExploreCreators";
import AffiliateCenter from "./screens/AffiliateCenter";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Earning from "./screens/Earning";
import Refunds from "./screens/Refunds";
import Payouts from "./screens/Payouts";
import Statements from "./screens/Statements";
import Shop from "./screens/Shop";
import PageList from "./screens/PageList";
// Our pages
import Home2 from "./screens/Home2";
import Workflows from "./screens/Workflows";
import OpsCenter from "./screens/OpsCenter";
import WorkflowLog from "./screens/WorkflowLog";
import WorkflowRun from "./screens/WorkflowRun";
import NewWorkflow from "./screens/NewWorkflow";
import CreateWorkflow from "./screens/CreateWorkflow";
import Scheduled2 from "./screens/Scheduled2";
import AiWorker from "./screens/AiWorker";
import MessageCenterPage from "./components/messageCenterPage";
import NewMessageCenter from "./screens/NewMessageCenter";
import Preview from "./screens/Preview";
import { useRecoilState } from "recoil";
import userAtom from "./atoms/userAtom";
import Loader from "./components/Loader";
import { useEffect } from "react";
import { getUser } from "./api/rbac";
import InviteContent from "./screens/Invite/InviteContent";

function App() {
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    const doJob = async () => {
      try {
        const data = await getUser();
        setUser({ ...data, loggedIn: true });
      } catch (e) {
        console.error(e);
        setUser((p) => {
          return { ...p, not_checked_login: false };
        });
      }
    };
    doJob();
  }, []);

  if (user.not_checked_login) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <Routes>
      {user.loggedIn? (
        <Route path="/">
          <Route index element={<Navigate to="home" />} />
          <Route
            path="home"
            element={
              <Page title="Home">
                <Home2 />
              </Page>
            }
          />
          <Route
            path="workflows"
            element={
              <Page title="Workflows">
                <Workflows />
              </Page>
            }
          />
          <Route
            path="new-workflow"
            element={
              <Page title="New Workflow">
                <NewWorkflow />
              </Page>
            }
          />
          <Route
            path="create-workflow"
            element={
              <Page title="Create Workflow">
                <CreateWorkflow />
              </Page>
            }
          />
          <Route
            path="ops-center"
            element={
              <Page title="Ops Center">
                <OpsCenter />
              </Page>
            }
          />
          <Route
            path="ops-center/:id"
            element={
              <Page title="Workflow Logs" showBackBtn>
                <WorkflowLog />
              </Page>
            }
          />
          <Route
            path="run-time/:id"
            element={
              <Page title="Procure to Pay" showBackBtn>
                <WorkflowRun />
              </Page>
            }
          />
          <Route
            path="products/dashboard"
            element={
              <Page title="Products dashboard">
                <ProductsDashboard />
              </Page>
            }
          />
          <Route
            path="products/add"
            element={
              <Page title="New product">
                <NewProduct />
              </Page>
            }
          />
          <Route
            path="products/drafts"
            element={
              <Page title="Drafts">
                <Drafts />
              </Page>
            }
          />
          <Route
            path="products/released"
            element={
              <Page title="Released">
                <Released />
              </Page>
            }
          />
          <Route
            path="products/comments"
            element={
              <Page title="Comments">
                <Comments />
              </Page>
            }
          />
          <Route
            path="products/scheduled"
            element={
              <Page title="Scheduled">
                <Scheduled />
              </Page>
            }
          />
          <Route path="/onboarding" element={<Scheduled2 />} />
          <Route path="products/preview" element={<Preview />} />
          <Route
            path="/onboarding/:aiWorkerName"
            element={<AiWorker />}
          />
          <Route path="/invite" element={<InviteContent/>}/>
          <Route
            path="customers/overview"
            element={
              <Page title="Customers">
                <Customers />
              </Page>
            }
          />
          <Route
            path="customers/customer-list"
            element={
              <Page title="Customer list">
                <CustomerList />
              </Page>
            }
          />
          <Route
            path="shop"
            element={
              <Page wide>
                <Shop />
              </Page>
            }
          />
          <Route
            path="income/earning"
            element={
              <Page title="Earning">
                <Earning />
              </Page>
            }
          />
          <Route
            path="income/refunds"
            element={
              <Page title="Refunds">
                <Refunds />
              </Page>
            }
          />
          <Route
            path="income/payouts"
            element={
              <Page title="Payouts">
                <Payouts />
              </Page>
            }
          />
          <Route
            path="income/statements"
            element={
              <Page title="Statements">
                <Statements />
              </Page>
            }
          />
          <Route
            path="promote"
            element={
              <Page title="Promote">
                <Promote />
              </Page>
            }
          />
          <Route
            path="notification"
            element={
              <Page title="Notification">
                <Notification />
              </Page>
            }
          />
          <Route
            path="settings"
            element={
              <Page title="Settings">
                <Settings />
              </Page>
            }
          />
          <Route
            path="upgrade-to-pro"
            element={
              <Page title="Upgrade to Pro">
                <UpgradeToPro />
              </Page>
            }
          />
          <Route
            path="message-center"
            element={
              <Page title="Message center">
                <MessageCenter />
              </Page>
            }
          />
          <Route
            path="new-message-center"
            element={
              <MessageCenterPage>
                <NewMessageCenter />
              </MessageCenterPage>
            }
          />
          <Route
            path="explore-creators"
            element={
              <Page title="Explore creators">
                <ExploreCreators />
              </Page>
            }
          />
          <Route
            path="affiliate-center"
            element={
              <Page title="Affiliate center">
                <AffiliateCenter />
              </Page>
            }
          />

          

          <Route path="sign-up" element={<Navigate to="/" />} />
          <Route path="sign-in" element={<Navigate to="/" />} />
          <Route path="pagelist" element={<PageList />} />
        </Route>
      ) : (
        <Route>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="*" element={<Navigate to="sign-in" />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;

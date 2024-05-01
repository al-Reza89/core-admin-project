import Questions from "../screens/MessageCenter/FinancialApp/Questions";

export const messages = [
  {
    id: 1,
    text: (
      <div>
        Describe your application workflow in detail so I can help you build it.
      </div>
    ),
    time: "12:00",
    user: "user1",
  },
  {
    id: 2,
    text: <div>Inventory Management tool for ecommerce with Shopify.</div>,
    time: "12:02",
    user: "user2",
  },
  {
    id: 3,
    text: (
      <div>
        <Questions />
      </div>
    ),
    button: "Generate Workflow",
    time: "12:02",
    user: "user1",
  },
];

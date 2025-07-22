export {}

// 🧠 Basic Discriminated Union Example
type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

type Shape = Circle | Square;

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    default:
      // Exhaustiveness check
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}

console.log("Circle Area:", calculateArea({ kind: "circle", radius: 5 }));
console.log("Square Area:", calculateArea({ kind: "square", side: 4 }));

// 🔐 Auth Example
type AuthState =
  | { status: "logged_in"; user: { id: string; email: string } }
  | { status: "logged_out" };

function renderUser(auth: AuthState) {
  if (auth.status === "logged_in") {
    console.log("✅ Welcome,", auth.user.email);
  } else {
    console.log("❌ Please log in.");
  }
}

renderUser({ status: "logged_in", user: { id: "123", email: "pranav@example.com" } });
renderUser({ status: "logged_out" });

// --------------------
// 🧪 Mini Challenge
// --------------------

type Notification =
  | { type: "email"; to: string; subject: string }
  | { type: "sms"; to: string; message: string }
  | { type: "push"; deviceToken: string; title: string; body: string };

function sendNotification(n: Notification) {
  switch (n.type) {
    case "email":
      console.log(`📧 Sending email to ${n.to} | Subject: ${n.subject}`);
      break;
    case "sms":
      console.log(`📱 Sending SMS to ${n.to} | Message: ${n.message}`);
      break;
    case "push":
      console.log(`📲 Sending push to ${n.deviceToken} | Title: ${n.title}`);
      break;
    default:
      const _exhaustive: never = n;
      throw new Error(`Unhandled notification type: ${_exhaustive}`);
  }
}

sendNotification({ type: "email", to: "a@b.com", subject: "Welcome!" });
sendNotification({ type: "sms", to: "1234567890", message: "OTP: 999999" });
sendNotification({
  type: "push",
  deviceToken: "abc123",
  title: "New Feature!",
  body: "Check out our latest update.",
});

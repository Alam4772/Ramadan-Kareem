import Router from "./Router";
import PWABadge from "./PWABadge.tsx";
import { useEffect } from "react";

const PUBLIC_VAPID_KEY =
  "BPbv3gbQY4j5bmhyAHaU24MEuhAhmKZYZo25-hVvBwHhkPWMfVH7d2bA1ZKWP88go7MLPm2mCo29erHZe2c9NHE";

async function subscribeToPush() {
  if (!("serviceWorker" in navigator)) {
    console.error("Service Worker not supported");
    return;
  }

  const registration = await navigator.serviceWorker.ready;
  const existingSubscription = await registration.pushManager.getSubscription();

  if (!existingSubscription) {
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: PUBLIC_VAPID_KEY,
    });

    await fetch("http://localhost:5000/subscribe", {
      method: "POST",
      body: JSON.stringify(subscription),
      headers: { "Content-Type": "application/json" },
    });

    console.log("Push subscription saved:", subscription);
  } else {
    console.log("Already subscribed to push notifications.");
  }
}

export default function App() {
  useEffect(() => {
    subscribeToPush();
  }, []);

  return (
    <>
      <Router />
      <PWABadge />
    </>
  );
}

Stage 1
Actions: Fetch Notifications, Mark as Read, Update Preferences.
API Contract:

GET /notifications: Fetch current notifications.

PATCH /notifications/:id: Update isRead status.

POST /notifications/settings: Configure delivery channels.
Real-time Mechanism: WebSockets. This allows the server to push notifications to the client immediately without the client having to poll the server.
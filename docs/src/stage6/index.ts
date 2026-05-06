type NotificationType = 'Placement' | 'Result' | 'Event';

interface Notification {
    ID: string;
    Type: NotificationType;
    Message: string;
    Timestamp: string;
}

const WEIGHTS: Record<NotificationType, number> = {
    'Placement': 3,
    'Result': 2,
    'Event': 1
};

async function getPriorityNotifications(): Promise<void> {
    // Replace with the actual URL and Token from your instructions
    const API_URL = 'https://api.example.com/notifications'; 
    const TOKEN = 'YOUR_AUTH_TOKEN'; 

    try {
        const response = await fetch(API_URL, {
            headers: { 'Authorization': `Bearer ${TOKEN}` }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: any = await response.json();
        const notifications: Notification[] = data.notifications;

        const priorityList = notifications
            .sort((a, b) => {
                const weightB = WEIGHTS[b.Type] || 0;
                const weightA = WEIGHTS[a.Type] || 0;
                
                if (weightB !== weightA) {
                    return weightB - weightA;
                }
                return new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime();
            })
            .slice(0, 10);

        console.log('--- Stage 6: Top 10 Priority Notifications ---');
        console.table(priorityList);
    } catch (error) {
        console.error('Error:', error instanceof Error ? error.message : error);
    }
}

getPriorityNotifications();
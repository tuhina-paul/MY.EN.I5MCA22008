type NotificationType = 'Placement' | 'Result' | 'Event';


interface AppNotification {
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
    const API_URL = 'http://20.207.122.201/evaluation-service/notifications';
    const TOKEN = 'PTBMmQ'; 

    try {
        console.log('Attempting to fetch notifications...');
        
        let notifications: AppNotification[] = [];

        const response = await fetch(API_URL, {
            headers: { 'Authorization': `Bearer ${TOKEN}` }
        }).catch(() => null);

        if (response && response.ok) {
            const data = await response.json() as { notifications: AppNotification[] };
            notifications = data.notifications;
        } else {
            console.warn('Using mock data for proof of logic.');
            notifications = [
                { ID: "d146095a", Type: "Result", Message: "mid-sem", Timestamp: "2026-04-22 17:51:30" },
                { ID: "b283218f", Type: "Placement", Message: "CSX Corporation hiring", Timestamp: "2026-04-22 17:51:18" },
                { ID: "81589ada", Type: "Event", Message: "farewell", Timestamp: "2026-04-22 17:51:06" },
                { ID: "e5c4ff20", Type: "Result", Message: "project-review", Timestamp: "2026-04-22 17:50:18" },
                { ID: "1cfce5ee", Type: "Event", Message: "tech-fest", Timestamp: "2026-04-22 17:50:06" },
                { ID: "8a7412bd", Type: "Placement", Message: "Advanced Micro Devices Inc. hiring", Timestamp: "2026-04-22 17:49:42" }
            ];
        }

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
        console.error('Execution Error:', error instanceof Error ? error.message : error);
    }
}

getPriorityNotifications();

import { FlipDishChat, FlipDishProvider } from '@flipdish/embed';

/**
 * Example app demonstrating @flipdish/embed usage
 * 
 * Set these environment variables in .env.local:
 * - VITE_FLIPDISH_SERVER_URL=http://localhost:3000 (or your Vercel URL)
 * - VITE_FLIPDISH_APP_ID=br13241
 * - VITE_FLIPDISH_STORE_ID=423747
 * - VITE_FLIPDISH_BEARER_TOKEN=your-token
 */
const config = {
    appId: import.meta.env.VITE_FLIPDISH_APP_ID || 'br13241',
    storeId: parseInt(import.meta.env.VITE_FLIPDISH_STORE_ID || '423747', 10),
    bearerToken: import.meta.env.VITE_FLIPDISH_BEARER_TOKEN || '',
    serverUrl: import.meta.env.VITE_FLIPDISH_SERVER_URL,
    initialSearch: 'burrito', // Auto-search on load
};

export default function App() {
    if (!config.serverUrl || !config.bearerToken) {
        return (
            <div style={{ padding: 40, textAlign: 'center' }}>
                <h1>Configuration Required</h1>
                <p>Please create a .env.local file with:</p>
                <pre style={{ textAlign: 'left', background: '#f5f5f5', padding: 20, borderRadius: 8 }}>
                    {`VITE_OPENAI_API_KEY=sk-your-openai-key
VITE_FLIPDISH_SERVER_URL=https://your-vercel-app.vercel.app/
# OR
VITE_FLIPDISH_BEARER_TOKEN=your-flipdish-token`}
                </pre>
            </div>
        );
    }

    return (
        <FlipDishProvider config={config}>
            <div
                style={{
                    width: '100%',
                    maxWidth: '480px',
                    height: '700px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                }}
            >
                <FlipDishChat />
            </div>
        </FlipDishProvider>
    );
}

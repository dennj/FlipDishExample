import { FlipDishChat, FlipDishProvider } from '@flipdish/embed';

/**
 * Example app demonstrating @flipdish/embed usage
 * 
 * Set these environment variables in .env.local:
 * - VITE_OPENAI_API_KEY=sk-your-key
 * - VITE_FLIPDISH_APP_ID=br13241
 * - VITE_FLIPDISH_STORE_ID=423747
 * - VITE_FLIPDISH_BEARER_TOKEN=your-token
 */
const config = {
    openaiApiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
    appId: import.meta.env.VITE_FLIPDISH_APP_ID || 'br13241',
    storeId: parseInt(import.meta.env.VITE_FLIPDISH_STORE_ID || '423747', 10),
    bearerToken: import.meta.env.VITE_FLIPDISH_BEARER_TOKEN || '',
    serverUrl: import.meta.env.VITE_FLIPDISH_SERVER_URL,
};

export default function App() {
    // Check for required config (bearerToken optional if serverUrl is present)
    if (!config.openaiApiKey || (!config.bearerToken && !config.serverUrl)) {
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

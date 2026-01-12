# Example - FlipDish Embed Demo

A minimal example showing how to use `@flipdish/embed`.

## Setup

1. Install dependencies:
   ```bash
   bun install
   ```

2. Set your OpenAI API key:
   ```bash
   echo "VITE_OPENAI_API_KEY=sk-your-key-here" > .env.local
   ```

3. Run the dev server:
   ```bash
   bun run dev
   ```

## Usage

```tsx
import { FlipDishChat, FlipDishProvider } from '@flipdish/embed';

function App() {
    return (
        <FlipDishProvider config={{ openaiApiKey: 'sk-...' }}>
            <FlipDishChat />
        </FlipDishProvider>
    );
}
```

## Environment Variables

The Embed package requires these environment variables (from the Server):
- `NEXT_PUBLIC_FLIPDISH_APP_ID` - FlipDish brand ID
- `NEXT_PUBLIC_FLIPDISH_STORE_ID` - FlipDish store ID  
- `FLIPDISH_SPECIAL_APIS` - Phone Agent API bearer token

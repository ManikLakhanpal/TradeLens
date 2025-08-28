import { Spot } from "@binance/connector";
import { stringify } from "flatted";

const apiKey = process.env.BINANCE_API_KEY!;
const apiSecret = process.env.BINANCE_API_SECRET!;

const bc = new Spot(apiKey, apiSecret, {});

async function getBinanceProfile() {
  try {
    const result = await bc.account();

    // * Binance API returns balances in result.data.balances
    if (Array.isArray(result.data?.balances)) {
      result.data.balances = result.data.balances.filter((b: any) => {
        const free = parseFloat(b.free);
        const locked = parseFloat(b.locked);
        return free !== 0 || locked !== 0;
      });
    }

    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}

const dataTesting = await getBinanceProfile();
console.log(dataTesting.data);

export { bc, getBinanceProfile };

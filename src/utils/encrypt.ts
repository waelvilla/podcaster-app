import * as Crypto from "expo-crypto";

export default async function encrypt(text: string) {
  return Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, text);
}

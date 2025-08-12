export async function encryptAES(plaintext, secretKey) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plaintext);

  const binaryString = window.atob(secretKey);
  const keyData = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    keyData[i] = binaryString.charCodeAt(i);
  }

  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt'],
  );
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    data,
  );
  const encryptedArray = new Uint8Array(
    Array.from(iv).concat(Array.from(new Uint8Array(encrypted))),
  );
  return btoa(String.fromCharCode.apply(null, encryptedArray));
}

export type Web3FormsPayload = {
  name: string;
  email: string;
  message?: string;
  subject: string;
  from_name?: string;
};

export async function submitWeb3Form(payload: Web3FormsPayload): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
    throw new Error('Web3Forms is not configured');
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      botcheck: false,
      ...payload,
    }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || 'Unable to send message');
  }
}

export type TgetUrlResponse = {
  is_malicious: boolean;
  description: 'BENIGN' | 'MALICIOUS' | 'DEFACEMENT' | 'MALWARE';
};

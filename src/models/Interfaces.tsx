export interface Physician {
  id: string;
  name: string;
  patients: Patient[];
}

interface Patient {
  id: string;
  name: string;
  time: string;
  kind: string;
}

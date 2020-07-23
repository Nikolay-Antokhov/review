import { toast } from 'mdbreact';

export function notification(type, message) {
  toast[type](message);
}

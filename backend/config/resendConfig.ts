import { Resend } from 'resend';

const resend = new Resend(Bun.env.RESEND_KEY);

export { resend };
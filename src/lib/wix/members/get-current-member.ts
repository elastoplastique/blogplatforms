import { WixSession } from '@/lib/wix/auth/session';
import { members } from '@wix/members';

export const getCurrentMember = (wixSession: WixSession) =>
  wixSession.wixClient!.members.getCurrentMember({
    fieldSet: members.Set.FULL,
  });

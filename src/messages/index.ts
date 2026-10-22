import { type Locale, useLocale } from "@/lib/i18n";
import { en } from "./en";
import { type Messages, fr } from "./fr";

export type { Messages };

export const messages: Record<Locale, Messages> = { fr, en };

export function useMessages(): Messages {
  return messages[useLocale()];
}

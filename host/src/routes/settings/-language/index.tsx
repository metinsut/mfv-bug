import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@workspace/shared";
import { m } from "@/paraglide/messages";
import { getLocale, locales, setLocale } from "@/paraglide/runtime";

type Locale = (typeof locales)[number];

export function Language() {
  const currentLocale = getLocale();

  function handleChangeLanguage(value: string | null) {
    if (value === null) return;
    if (locales.includes(value as Locale)) setLocale(value as Locale);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{m.settingsLanguageTitle()}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={currentLocale} onValueChange={handleChangeLanguage}>
          <TabsList>
            <TabsTrigger value="en">{m.languageEnglish()}</TabsTrigger>
            <TabsTrigger value="tr">{m.languageTurkish()}</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  );
}

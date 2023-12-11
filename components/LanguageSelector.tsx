import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export default function LanguageSelector() {
  const router = useRouter();

  const { t, i18n } = useTranslation("common");
  const handleDropDownAction = (language: React.Key) => {
    let lang = language.toString();
    i18n.changeLanguage(lang);
    router.push(router.pathname, router.asPath, { locale: lang });
  };
  
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{t("HEADER.CHOOSE_LANGUAGE")}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" onAction={handleDropDownAction}>
        <DropdownItem key="en">{t("HEADER.ENGLISH")}</DropdownItem>
        <DropdownItem key="zh">{t("HEADER.CHINESE")}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

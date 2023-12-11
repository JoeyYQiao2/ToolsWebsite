import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import AcmeLogo from "../app/layout/acmelogo";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";
import LanguageSelector from "./LanguageSelector";
import { useRouter } from "next/router";

export default function Navigator() {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="/website">
            {t("HEADER.WEBSITE")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/tools" aria-current="page">
            {t("HEADER.TOOL")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/blogs">
            {t("HEADER.BLOG")}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <LanguageSelector></LanguageSelector>
    </Navbar>
  );
}

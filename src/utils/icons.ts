import {
  TbBrandNodejs, TbBrandTypescript, TbBrandJavascript, TbBrandTailwind,
  TbBrandReact, TbDatabase, TbBrandNextjs, TbApi, TbBrandFramer,
  TbBrandMysql, TbBrandVercel, TbPlugConnected, TbBrandAws,
  TbBrandMongodb, TbPalette, TbCode, TbCoffee, TbBrandDocker, TbServer
} from 'react-icons/tb';
import {Coffee} from "lucide-react";

export const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes('node')) return TbBrandNodejs;
  if (s.includes('typescript')) return TbBrandTypescript;
  if (s.includes('javascript')) return TbBrandJavascript;
  if (s.includes('tailwind')) return TbBrandTailwind;
  if (s.includes('react')) return TbBrandReact;
  if (s.includes('next')) return TbBrandNextjs;
  if (s.includes('express')) return TbApi;
  if (s.includes('motion')) return TbBrandFramer;
  if (s.includes('mysql')) return TbBrandMysql;
  if (s.includes('postgres') || s.includes('hibernate') || s.includes('sql') || s.includes('redis') || s.includes('database')) return TbDatabase;
  if (s.includes('vercel')) return TbBrandVercel;
  if (s.includes('websocket')) return TbPlugConnected;
  if (s.includes('aws')) return TbBrandAws;
  if (s.includes('mongo')) return TbBrandMongodb;
  if (s.includes('design')) return TbPalette;
  if (s.includes('java')) return TbCoffee;
  if (s.includes('api')) return TbApi;
  if (s.includes('docker')) return TbBrandDocker;
  if (s.includes('spring')) return TbServer;
  return TbCode;
};

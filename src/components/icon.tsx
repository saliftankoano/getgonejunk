import {
  ShieldCheck,
  Recycle,
  ArrowsClockwise,
  House,
  Couch,
  Truck,
  Phone,
  ChatCircleText,
  CheckCircle,
  Leaf,
  Clock,
  CurrencyDollar,
  Broom,
  MapPin,
  Star,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";
import type { IconProps } from "@phosphor-icons/react/dist/lib/types";
import type { ComponentType } from "react";

const MAP: Record<string, ComponentType<IconProps>> = {
  shield: ShieldCheck,
  recycle: Recycle,
  reusable: ArrowsClockwise,
  house: House,
  couch: Couch,
  truck: Truck,
  phone: Phone,
  chat: ChatCircleText,
  check: CheckCircle,
  leaf: Leaf,
  clock: Clock,
  dollar: CurrencyDollar,
  broom: Broom,
  pin: MapPin,
  star: Star,
  caret: CaretRight,
};

export function Icon({
  name,
  ...props
}: { name: string } & IconProps) {
  const Cmp = MAP[name] ?? CheckCircle;
  return <Cmp {...props} />;
}

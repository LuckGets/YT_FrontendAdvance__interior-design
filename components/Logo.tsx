import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image alt="logo" width={160} height={55} src="/images/logo.png" />
      </Link>
    </div>
  );
}

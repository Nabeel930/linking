import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      This is main page
      <br />
      <Link href='/name'>go to Name page</Link>
    </div>
  );
}

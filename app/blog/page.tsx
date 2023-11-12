import Link from "next/link";

export default function Page() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/blog/1"}>Blog 1</Link>
        </li>
        <li>
          <Link href={"/blog/2"}>Blog 1</Link>
        </li>
        <li>
          <Link href={"/blog/3"}>Blog 1</Link>
        </li>
        <li>
          <Link href={"/blog/4"}>Blog 1</Link>
        </li>
        <li>
          <Link href={"/blog/5"}>Blog 1</Link>
        </li>
      </ul>
    </div>
  );
}

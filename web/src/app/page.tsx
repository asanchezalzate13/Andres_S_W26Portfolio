import Link from "next/link";
import { PageHeading, Prose } from "@/components/Prose";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <Prose>
      <PageHeading title="Personal overview" eyebrow="Personal data">
        <p>
          This site is a structured portfolio for coursework and career navigation. Use the menu
          to explore credentials, academic and professional samples, and the ParkSpot capstone
          documentation.
        </p>
      </PageHeading>

      <h2>Bio</h2>
      <p>
        I am <strong>{site.name}</strong>, a trilingual developer focused on full-stack and mobile
        delivery, with growing strength in project leadership and product thinking. I hold an{" "}
        <strong>{site.education}</strong>, after completing the <strong>Baccalauréat</strong> at{" "}
        <strong>Liceo Francés de Pereira</strong> (Pereira, Colombia). I communicate professionally in{" "}
        <strong>{site.languages}</strong>, which helps me collaborate across teams and markets.
      </p>
      <p>
        Before committing fully to software, I competed as an <strong>elite-level tennis player</strong>{" "}
        until 2023. That chapter trained discipline under pressure, rapid recovery from setbacks,
        and the habit of learning mechanics deeply—skills I now apply to engineering and delivery.
      </p>

      <h2>Quick links</h2>
      <ul>
        <li>
          <Link href="/resume">Resume</Link> — experience, stack, and project highlights
        </li>
        <li>
          <Link href="/cover-letter">Cover letter</Link> — Deloitte (Junior Financial Analyst), March
          2026
        </li>
        <li>
          <Link href="/philosophy">Philosophy &amp; career goals</Link> — motivations and outlook
        </li>
        <li>
          <Link href="/academic">Academic credentials</Link> — diplomas (GBC + Baccalauréat)
        </li>
        <li>
          <Link href="/work-samples">Academic work samples</Link> — five curated pieces
        </li>
        <li>
          <Link href="/capstone">Capstone (ParkSpot)</Link> — vision through implementation
        </li>
        <li>
          <Link href="/professional">Professional summary</Link> — Tatamá and other samples
        </li>
        <li>
          <Link href="/contact">Contact</Link> — form and profiles
        </li>
      </ul>
    </Prose>
  );
}

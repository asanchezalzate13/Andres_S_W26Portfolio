import { PageHeading, Prose } from "@/components/Prose";
import { site } from "@/lib/site";

export default function CoverLetterPage() {
  return (
    <Prose>
      <PageHeading title="Cover letter — Deloitte (Junior Financial Analyst)" eyebrow="Personal data">
        <p>
          Letter dated <strong>March 19, 2026</strong> for the Junior Financial Analyst role. Update
          the date or employer details when you reuse this for other applications.
        </p>
      </PageHeading>

      <p>
        {site.name}
        <br />
        {site.address}
        <br />
        {site.phone} · {site.contactEmail}
        <br />
        March 19, 2026
      </p>

      <p>
        Hiring Manager
        <br />
        Deloitte
        <br />
        8 Adelaide St W #200, Toronto, ON M5H 0A9
      </p>

      <p>
        <strong>Re: Junior Financial Analyst</strong>
      </p>

      <p>Dear Hiring Manager,</p>

      <p>
        I am writing to express my enthusiastic interest in the Junior Financial Analyst position at
        Deloitte. Combining a rigorous technical background from George Brown College with an
        entrepreneurial spirit, I am eager to contribute to Deloitte&apos;s mission of delivering
        high-impact financial solutions.
      </p>

      <p>
        Through my Computer Programming and Analysis program, I have mastered data analysis and system
        design using Python, Java, and SQL. My experience as a Project Manager for the ParkSpot
        application has taught me to oversee complex requirements and deliver data-driven results
        under pressure. Furthermore, my background in the international coffee trade (Tatamá) has
        provided me with practical insights into logistics, e-commerce, and the financial
        foundations necessary for a successful business.
      </p>

      <p>
        I am particularly drawn to Deloitte&apos;s reputation for innovation. As a trilingual
        professional (Spanish, French, English) with a history of elite athletic competition, I
        bring a global perspective and a disciplined work ethic to every challenge. I am confident
        that my ability to synthesize technical data into actionable insights will support
        Deloitte&apos;s continued success.
      </p>

      <p>
        Thank you for your time and consideration. I look forward to discussing how my unique blend
        of programming expertise and financial interest can benefit your team.
      </p>

      <p>
        Best regards,
        <br />
        <br />
        {site.name}
      </p>
    </Prose>
  );
}

import { ContactForm } from "@/components/ContactForm";
import { PageHeading, Prose } from "@/components/Prose";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <Prose>
      <PageHeading title="Contact" eyebrow="Connect">
        <p>Send a message below, or reach me via GitHub or email.</p>
      </PageHeading>

      <div className="flex flex-wrap gap-4 text-base">
        <a
          href={site.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--accent)] underline underline-offset-4"
        >
          GitHub profile
        </a>
        <a
          href={`mailto:${site.contactEmail}`}
          className="font-medium text-[var(--accent)] underline underline-offset-4"
        >
          Email ({site.contactEmail})
        </a>
      </div>

      <ContactForm />
    </Prose>
  );
}

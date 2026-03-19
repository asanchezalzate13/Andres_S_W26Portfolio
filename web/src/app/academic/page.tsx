import { PageHeading, Prose } from "@/components/Prose";

export default function AcademicPage() {
  return (
    <Prose>
      <PageHeading title="Academic credentials" eyebrow="As applicable">
        <p>
          List formal credentials and awards here. Add scans or PDFs to <code>web/public/docs/</code>{" "}
          and link them below when ready.
        </p>
      </PageHeading>

      <h2>Certificates &amp; degrees</h2>
      <ul>
        <li>
          <strong>Advanced College Diploma — Computer Programming and Analysis (T177)</strong>
          <br />
          George Brown College, Toronto
          <br />
          <em>Optional:</em> add a scan or PDF to <code>web/public/docs/</code> and link it here.
        </li>
      </ul>

      <h2>Academic awards</h2>
      <ul>
        <li>
          <strong>[Award name]</strong> — [Term / year]. <em>Replace with your real awards.</em>
        </li>
        <li>
          <strong>[Dean&apos;s list / scholarship / etc.]</strong> — [Details].
        </li>
      </ul>

      <h2>Academic record / transcript (optional)</h2>
      <p>
        If your instructor allows and you choose to include an unofficial transcript, place a PDF
        in <code>public/docs/</code> and link it here. Omit this section if you prefer not to share
        it on a public deployment.
      </p>
      <p>
        If included, link your unofficial transcript PDF from <code>public/docs/</code> in this
        paragraph.
      </p>
    </Prose>
  );
}

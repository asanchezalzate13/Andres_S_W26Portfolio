import { PageHeading, Prose } from "@/components/Prose";

export default function AcademicPage() {
  return (
    <Prose>
      <PageHeading title="Academic credentials" eyebrow="As applicable">
        <p>
          Formal diplomas and degrees. Add scans or PDFs to <code>web/public/docs/</code> and link
          them from the bullets below when you have files ready.
        </p>
      </PageHeading>

      <h2>Certificates &amp; degrees</h2>
      <ul>
        <li>
          <strong>Advanced College Diploma — Computer Programming and Analysis (T177)</strong>
          <br />
          George Brown College, Toronto
          <br />
          <em>Optional:</em> link a diploma scan from <code>public/docs/</code> here.
        </li>
        <li>
          <strong>Baccalauréat</strong> (diplôme du baccalauréat / French international secondary
          credential)
          <br />
          Liceo Francés de Pereira — Pereira, Colombia
          <br />
          <em>Optional:</em> link a scan from <code>public/docs/</code> here.
        </li>
      </ul>
    </Prose>
  );
}

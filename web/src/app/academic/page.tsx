import { PageHeading, Prose } from "@/components/Prose";

export default function AcademicPage() {
  return (
    <Prose>
      <PageHeading title="Academic credentials" eyebrow="Education">
        <p>Degrees and diplomas.</p>
      </PageHeading>

      <h2>Certificates &amp; degrees</h2>
      <ul>
        <li>
          <strong>Advanced College Diploma — Computer Programming and Analysis (T177)</strong>
          <br />
          George Brown College, Toronto
        </li>
        <li>
          <strong>Baccalauréat</strong> (diplôme du baccalauréat / French international secondary
          credential)
          <br />
          Liceo Francés de Pereira — Pereira, Colombia
        </li>
      </ul>
    </Prose>
  );
}

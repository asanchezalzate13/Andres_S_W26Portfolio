import { PageHeading, Prose } from "@/components/Prose";

export default function PhilosophyPage() {
  return (
    <Prose>
      <PageHeading title="Philosophy & career goals" eyebrow="Profile">
        <p className="font-serif text-xl italic text-[var(--foreground)]">
          &ldquo;La perseverancia alcanza lo que la dicha no logra.&rdquo;
        </p>
      </PageHeading>

      <p>
        As a project manager, developer, and aspiring entrepreneur, I believe technical proficiency
        is only half of the equation; meaningful progress also requires the discipline of an athlete
        and the strategic patience of a leader. I see my role not as someone who simply assigns
        tasks, but as a <strong>facilitator of solutions</strong> that connect human needs with
        systems that actually work in practice—clear, maintainable, and respectful of constraints.
      </p>

      <p>
        My path—from competitive tennis, through living and studying in Colombia, France, and
        Canada—shaped how I learn and how I collaborate. The trilingual perspective I carry helps me
        question assumptions, communicate with precision, and build bridges between stakeholders
        who may not share the same context. Looking ahead, I want to keep growing as someone who can
        <strong> ship reliable software</strong>, <strong>coordinate honest delivery</strong>, and{" "}
        <strong>build products</strong> that earn trust over time. That ambition is less about a
        single job title and more about a standard: steady improvement, accountable leadership, and
        work that holds up when it is examined closely.
      </p>

    </Prose>
  );
}

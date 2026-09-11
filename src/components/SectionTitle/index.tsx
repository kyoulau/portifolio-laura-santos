import Reveal from "../Reveal";

type SectionTitleProps = {
  /** Numeral do ato, ex: "01" */
  index: string;
  kicker: string;
};

/** Cabeçalho de seção: número, título em mono e régua ornamentada. */
function SectionTitle({ index, kicker }: SectionTitleProps) {
  return (
    <Reveal>
      <div className="mb-12 flex items-center gap-4 md:mb-16">
        <span className="font-retro text-[12px] tracking-[0.28em] text-blood-bright">
          {index}
        </span>
        <h2 className="font-retro text-[13px] tracking-[0.3em] text-mist uppercase">
          {kicker}
        </h2>
        <span className="rule-ornate h-px flex-1" />
      </div>
    </Reveal>
  );
}

export default SectionTitle;

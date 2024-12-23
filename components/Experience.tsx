export default function Experience({
  head1,
  head2,
  head3,
  head4,
  bulletPoints,
}: ExperienceProps) {
  return (
    <div className="[&:not(:first-child)]:mt-1">
      <div className="text-[15px] flex justify-between flex-wrap text-zinc-700 dark:text-zinc-300">
        <div className="flex gap-x-2 flex-wrap">
          <div className="font-semibold text-zinc-900 dark:text-zinc-200">
            {head1}
          </div>
          {head2}
          {/* {!hideHead3 && <div>{head3}</div>} */}
        </div>
        <span>{head4}</span>
      </div>

      <ul className="text-base leading-[26px] list-disc ml-4 text-zinc-700 dark:text-zinc-400">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

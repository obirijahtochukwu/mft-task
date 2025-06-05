import { Icons } from "./icons";

export const Buttons = {
  primary: ({
    text,
    isArrow,
    ...props
  }: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    text: string;
    isArrow?: boolean;
  }) => (
    <button
      {...props}
      className="flex items-center py-1 text-[var(--success)] rounded-lg w-fit text-sm font-medium px-0.5 gap-1 cursor-pointer whitespace-nowrap focus:outline-0"
    >
      {text} {isArrow && <Icons.arrow color="#3C7E44" />}
    </button>
  ),
};

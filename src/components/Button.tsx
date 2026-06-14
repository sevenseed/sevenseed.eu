import clsx from "clsx";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

const baseStyles = {
	solid:
		"inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm duration-200 focus:outline-none",
	outline:
		"inline-flex justify-center rounded-md border py-[calc(--spacing(1)-1px)] px-[calc(--spacing(4)-1px)] text-base font-semibold tracking-tight duration-200 focus:outline-none",
};

const variantStyles = {
	solid: {
		slate:
			"bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900",
		blue: "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600",
		white:
			"bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600",
		green:
			"bg-green-600 text-white hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:bg-green-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-green-600",
		red: "bg-red-600 text-white hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 active:bg-red-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-red-600",
	},
	outline: {
		slate:
			"border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:border-slate-200 active:bg-slate-50 active:text-slate-900/70 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent",
		blue: "border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent",
		green:
			"border-green-300 text-green-600 hover:border-green-400 hover:bg-green-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:text-green-600/70 disabled:opacity-40 disabled:hover:border-green-300 disabled:hover:bg-transparent",
		red: "border-red-300 text-red-600 hover:border-red-400 hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 active:text-red-600/70 disabled:opacity-40 disabled:hover:border-red-300 disabled:hover:bg-transparent",
	},
};

type VariantKey = keyof typeof variantStyles;
type ColorKey<Variant extends VariantKey> =
	keyof (typeof variantStyles)[Variant];

type ButtonProps<
	Variant extends VariantKey,
	Color extends ColorKey<Variant>,
> = {
	variant?: Variant;
	color?: Color;
} & (
	| Omit<ComponentPropsWithoutRef<typeof Link>, "color">
	| (Omit<ComponentPropsWithoutRef<"button">, "color"> & {
			href?: undefined;
	  })
);

export function Button<
	Color extends ColorKey<Variant>,
	Variant extends VariantKey = "solid",
>({ variant, color, className, ...props }: ButtonProps<Variant, Color>) {
	variant = variant ?? ("solid" as Variant);
	color = color ?? ("slate" as Color);

	className = clsx(
		baseStyles[variant],
		variantStyles[variant][color] as string,
		className,
	);

	return typeof props.href === "undefined" ? (
		<button className={className} {...props} />
	) : (
		<Link className={className} {...props} />
	);
}

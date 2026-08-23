import { FC, ReactNode } from "react";

const EmailLink: FC<{
	email: string;
	className?: string;
	subject?: string;
	children?: ReactNode | ReactNode[];
}> = ({ email, className, subject, children }) => (
	<a
		href={
			subject
				? `mailto:${email}?subject=${encodeURIComponent(subject)}`
				: `mailto:${email}`
		}
		target="_blank"
		rel="noopener noreferrer"
		className={className}
	>
		{children || email}
	</a>
);

export default EmailLink;

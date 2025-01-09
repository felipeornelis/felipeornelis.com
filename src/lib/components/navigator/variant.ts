import { cva } from '$lib/utils/cva';
import type { VariantProps } from 'class-variance-authority';

export const navigator_item = cva(
	'inline-flex items-center relative h-full text-[14px] transition-color duration-300 relative',
	{
		variants: {
			status: {
				active:
					'text-foreground cursor-default pointer-events-none relative after:absolute after:h-px after:w-full after:rounded-full after:bottom-0 after:bg-gradient-to-r after:from-transparent after:to-transparent after:via-white/30',
				inactive: 'text-[#eaeaea80] hover:text-foreground'
			}
		},
		defaultVariants: {
			status: 'inactive'
		}
	}
);

export type NavigatorItemProps = VariantProps<typeof navigator_item>;
